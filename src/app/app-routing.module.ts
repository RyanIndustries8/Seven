import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SinsComponent } from './sins/sins.component';

const routes: Routes = [
  {
    path: 'sins',
    component: CardComponent
  },
  {
    path: 'sins/:id',
    component: SinsComponent
  },
  {
    path: '',
    redirectTo: 'sins',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: CardComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
