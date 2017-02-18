import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODO: make a module for each of these features
import { CharacterListComponent } from './characters/character-list.component';
import { CharacterDetailComponent } from './characters/character-detail.component';
import { HomeComponent } from './home/home.component';

// TODO: route each feature in its own module
const appRoutes: Routes = [
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: '', component: HomeComponent },
  { path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
