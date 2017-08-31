import { Component } from '@angular/core';
import { PageTitleService } from '../../shared/services/page-title.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {

	private contact: any = {};

  constructor(private pageTitleService: PageTitleService) { }

	ngOnInit() {
		this.pageTitleService.setTitle("Message");
	}
}
