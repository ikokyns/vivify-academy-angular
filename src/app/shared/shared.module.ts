import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactsService } from '../shared/services/contacts.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	FilterPipe
  ],
  providers: [
  	ContactsService
  ],
  exports: [
  	FilterPipe
  ]
})
export class SharedModule { }
