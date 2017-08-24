import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../../../shared/services/contacts.service';

@Component({
	selector: 'app-contact-details',
	templateUrl: './contact-details.component.html'
})

export class ContactDetailsComponent implements OnInit {

	private contact: any = {};

	constructor(private route:ActivatedRoute, private contactsService: ContactsService) { }

	ngOnInit() {
		this.route.params.subscribe(()=> {
			let id = parseInt(this.route.snapshot.paramMap.get('id'));
			this.contactsService.getContacts().subscribe((data: any[]) => this.contact = data.find(item => item['id'] == id));
		});
	}

}