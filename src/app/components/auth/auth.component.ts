import { Component, OnInit } from '@angular/core';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

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

}
