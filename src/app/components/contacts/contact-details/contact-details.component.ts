import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contacts } from '../contacts';

@Component({
	selector: 'app-contact-details',
	templateUrl: './contact-details.component.html'
})

export class ContactDetailsComponent implements OnInit {

	private contact: any;

	constructor(private route:ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(()=> {
			let id = parseInt(this.route.snapshot.paramMap.get('id'));
			this.contact = contacts.find(item => item['id'] == id);
		})
	}

}