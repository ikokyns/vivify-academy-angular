import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MessagesComponent } from './components/messages/messages.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    LayoutComponent,
    MessagesComponent
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes
      ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }