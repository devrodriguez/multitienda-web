import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  @Output() registered = new EventEmitter<boolean>();
  @ViewChild("registerCust") registerCust: any;

  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faSignInAlt = faSignInAlt;

  public user: SocialUser;
  public loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signInGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signIn() {
    this.registerCust.register(this.registerCust.frmRegCus);
  }

  consumerRegistered(res: any) {
    console.log('In AuthComponent.consumerRegistered', res);
    this.registered.emit(true);
  }
}
