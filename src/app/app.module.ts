import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VcardComponent } from './vcard/vcard/vcard.component';
import { ToDoListComponent } from './to-do-list/to-do-list/to-do-list.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    VcardComponent,
    ToDoListComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
