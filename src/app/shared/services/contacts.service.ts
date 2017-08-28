import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model'

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }

  public getContacts() {
  	return this.http.get<any[]>('http://localhost:8000/contacts.php');
  }

  public addContact(contact: Contact){
  	return this.http.post('http://localhost:8000/contacts-add.php', {
  		firstName: contact.firstName,
  		lastName: contact.lastName,
  		email: contact.email
  	});
  }

}
