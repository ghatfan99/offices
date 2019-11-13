import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BureauComponent } from './bureaux/bureau/bureau.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BureauxComponent } from './bureaux/bureaux.component';

const routes: Routes = [
  {
    path: '',
    component: BureauxComponent
  },
  { path: 'bureau/:id',      component: BureauComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
