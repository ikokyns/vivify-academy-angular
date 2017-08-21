import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html'
})
export class ContactsComponent {

  private contact = {
    firstName: 'John',
    lastName:  'Doe',
    email:     'john@example.com'
  };

  constructor() { }

}
