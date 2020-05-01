import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angularx-social-login';
import { NgForm } from '@angular/forms';

import { AuthService as LocalAuthService } from '../../services/auth.service';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  @Output() loggedInEvt = new EventEmitter<boolean>();
  @Output() doRegisterEvt = new EventEmitter();
  @ViewChild("registerCustComponent") registerCustComponent: any;

  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faSignInAlt = faSignInAlt;

  customer: Customer = {} as Customer;

  constructor(private authService: AuthService, private authLocService: LocalAuthService) { }

  ngOnInit(): void {
  }

  signInGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signUp() {
    this.registerCustComponent.register(this.registerCustComponent.frmRegCus);
  }

  signInLocal(form: NgForm) {
    this.customer.email = form.control.value.email;
    this.customer.password = form.control.value.password;

    this.authLocService.signIn(this.customer).subscribe(res => {
      this.authLocService.authState.next(res.data);
      this.loggedInEvt.emit(true);
    }, err => {
      console.log(err);
    });
  }

  consumerRegistered(res: any) {
    console.log('In AuthComponent.consumerRegistered', res);
    this.loggedInEvt.emit(true);
  }

  doRegister() {
    this.doRegisterEvt.emit();
  }
}
