import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhraseDetailsComponent} from "./phrase-details/phrase-details.component";
import {PhrasesHostComponent} from "./phrases-host/phrases-host.component";
import {PhrasesListComponent} from "./phrases-list/phrases-list.component";

const routes: Routes = [
  {
    path: 'phrases',
    component: PhrasesHostComponent,
    children: [
      {
        path: '',
        component: PhrasesListComponent,
        children: [
          {
            path: ':id',
            component: PhraseDetailsComponent
          }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule {
}
