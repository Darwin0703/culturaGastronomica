import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MediterraneaComponent } from './components/mediterranea/mediterranea.component';
import { LatinoamericanaComponent } from './components/latinoamericana/latinoamericana.component';
import { FrancesaComponent } from './components/francesa/francesa.component';
import { ItalianaComponent } from './components/italiana/italiana.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'mediterranea', component: MediterraneaComponent },
  { path: 'latinoamericana', component: LatinoamericanaComponent },
  { path: 'francesa', component: FrancesaComponent },
  { path: 'italiana', component: ItalianaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
