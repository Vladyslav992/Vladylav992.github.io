import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {LoginRoutingModule} from './login-routing.module';
import {AuthenticationWindowComponent} from './components/authentication-window/authentication-window.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    AuthenticationWindowComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule {
}
