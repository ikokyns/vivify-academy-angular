import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';
import { SharedModule } from './shared/shared.module';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    LayoutComponent,
    MessagesComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }