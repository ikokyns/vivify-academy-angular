import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';

@Component({
	selector: '[contactRow]',
	templateUrl: 'contact-row.component.html'
})

export class ContactRowComponent {

	//@Input() contactRow: Contact;
	@Input()
	set contactRow(contact: Contact) {
		this.contact = contact;
	}
	@Input() index: number;
	@Output() onEdit = new EventEmitter<Contact>();
	@Output() onRemove = new EventEmitter<Contact>();

	private contact: Contact;
	private oldIndex: number;

	constructor() { }

	ngOnChanges(changes: {[index: string]: SimpleChange}){
		if(changes.index.previousValue) {
			this.oldIndex = changes.index.previousValue;
		}
	}

	edit(contact: Contact){
		this.onEdit.emit(contact);
	}

	remove(contact: Contact){
		this.onRemove.emit(contact);
	}

}