import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhrasesRoutingModule} from './phrases-routing.module';
import {PhrasesListComponent} from "./phrases-list/phrases-list.component";
import {PhraseDetailsComponent} from "./phrase-details/phrase-details.component";
import { PhrasesHostComponent } from './phrases-host/phrases-host.component';


@NgModule({
  declarations: [PhrasesListComponent, PhraseDetailsComponent, PhrasesHostComponent],
  imports: [
    CommonModule,
    PhrasesRoutingModule
  ]
})
export class PhrasesModule {
}
