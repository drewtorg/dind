import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';

import { AppRoutingModule } from './app-routing.module';

// TODO: create Shared module
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

// TODO: make a module for each of these feature
import { CharacterListComponent } from './characters/character-list.component';
import { CharacterDetailComponent } from './characters/character-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ToolbarComponent,
    CharacterDetailComponent,
    CharacterListComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
