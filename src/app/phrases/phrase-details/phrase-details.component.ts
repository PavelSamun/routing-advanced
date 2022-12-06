import {Component, OnInit} from '@angular/core';
import {Phrase} from "../../shared/phrase";
import {PhrasesService} from "../../shared/phrases.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase?: Phrase;

  constructor(private phrasesService: PhrasesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];

      if (isNaN(id)) return

      this.phrasesService
        .getPhrase(id)
        .then(res => {
          this.phrase = res;
        });
    });
  }

  gotoPhrasesList(): void {
    this.router.navigate(['/phrases', {
      id: this.phrase?.id
    }]).then();
  }

}
