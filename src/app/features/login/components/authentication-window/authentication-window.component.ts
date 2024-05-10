import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AuthenticationService} from "@app/core/services/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-authentication-window',
  templateUrl: './authentication-window.component.html',
  styleUrl: './authentication-window.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        transform: 'scale(1) translate(-50%, -50%)',
      })),
      state('closed', style({
        opacity: 0,
        transform: 'scale(0)  translate(-50%, -50%)',
      })),
      transition('open <=> closed', [
        animate('1s')
      ]),
    ]),
  ]
})
export class AuthenticationWindowComponent implements OnInit {
  authForm: FormGroup;
  activeTab: string = 'logIn';
  @Input() isOpen: boolean;
  @Output() isOpenChange = new EventEmitter<boolean>();

  constructor(private authService: AuthenticationService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  logIn() {
    this.authService.logIn(this.authForm.value.email, this.authForm.value.password);
  }

  singUp() {
    this.authService.signUp(this.authForm.value.email, this.authForm.value.password);
  }

  logInWithGoogle() {
    this.authService.logInWithGoogle();
  }

  toggleTab(tabName: 'logIn' | 'singUp') {
    this.activeTab = tabName;
  }

  closeWindow() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }

}
