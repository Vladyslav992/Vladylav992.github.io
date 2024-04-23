import {Component} from '@angular/core';

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

  onSubmit() {
    console.log(this.name, this.surname, this.email, this.description);
  }
}
