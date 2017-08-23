import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html'
})
export class ContactsComponent {

  private contacts: any[];

  constructor() {
    this.contacts = [
      {
        firstName: 'John',
        lastName:  'Doe',
        email:     'john@example.com'
      },
      {
        firstName: 'Daniel',
        lastName:  'Ros',
        email:     'daniel@example.com'
      },
      {
        firstName: 'Martin',
        lastName:  'Hess',
        email:     'martin@example.com'
      },
      {
        firstName: 'John',
        lastName:  'Deere',
        email:     'john.deere@example.com'
      },
    ];
  }

  remove(contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

}
