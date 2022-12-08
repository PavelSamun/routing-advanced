import {Component, OnInit} from '@angular/core';
import {Phrase} from "../../shared/phrase";
import {PhrasesService} from "../../shared/phrases.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase?: Phrase;
  editValue?: string;
  editLanguage?: string;

  constructor(private phrasesService: PhrasesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];

      if (isNaN(id)) return

      this.phrasesService
        .getPhrase(id)
        .then(res => {
          this.phrase = res;
          this.editValue = this.phrase?.value;
          this.editLanguage = this.phrase?.language;
        });
    });
  }

  gotoPhrasesList(): void {
    this.router.navigate(['/phrases', {
      id: this.phrase?.id,
      param1: 'test',
      param2: 123
    }]).then();
  }

  save(): void {
    if (this.phrase) {
      this.phrase.value = this.editValue || '';
      this.phrase.language = this.editLanguage || '';
    }
  }

  isChanged(): boolean {
    return !(this.phrase?.value === this.editValue && this.phrase?.language === this.editLanguage)
  }

}
