import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

// Pour la localisation fr
import { registerLocaleData } from '@angular/common';
import france from '@angular/common/locales/fr';
registerLocaleData(france);

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
