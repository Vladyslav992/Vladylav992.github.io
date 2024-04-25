import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrl: './contacts-form.component.scss'
})
export class ContactsFormComponent {
  name = '';
  surname = '';
  email = '';
  description = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(`Name: ${this.name}\nSurname: ${this.surname}\nEmail:
    ${this.email}\nDescription: ${this.description}`);
    }
  }
}
