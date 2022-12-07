import {Component} from '@angular/core';
import {PhrasesService} from "../../shared/phrases.service";
import {Phrase} from "../../shared/phrase";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent {

  phrases!: Phrase[];
  private selectedID!: number;

  constructor(private phrasesService: PhrasesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: res => {
        this.selectedID = +res['id'];

        this.phrasesService
          .getAllPhrases()
          .then(res => {
            this.phrases = res;
          });
      }
    });

  }

  onSelect(phrase: Phrase): void {
    this.router.navigate(['phrases', phrase.id]).then();
  }

  isSelected(phrase: Phrase): boolean {
    return phrase.id === this.selectedID
  }
}
