import { Component } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Contact } from '../../shared/models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html'
})
export class ContactsComponent {

  private contacts: any = [];
  private filter: string = '';
  private newContact: Contact = new Contact();

  constructor(private contactsService: ContactsService) {
    contactsService.getContacts().subscribe(data => {
      this.contacts = data;
    },
    (err: HttpErrorResponse) => {
      alert(`Backend returned code ${err.status} with message: ${err.error}`);
    });
  }

  remove(contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

  addContact(newContact: Contact) {
    this.contactsService.addContact( newContact ).
    subscribe(
      contact => {
       this.contacts.push(contact);
       this.newContact = new Contact();
      }
     );
  }

}
