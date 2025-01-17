import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {}
