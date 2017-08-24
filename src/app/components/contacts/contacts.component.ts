import { Component } from '@angular/core';
import { contacts } from './contacts'

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html'
})
export class ContactsComponent {

  private contacts: any[];
  private filter: string = '';

  constructor() {
    this.contacts = contacts;
  }

  remove(contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

}
