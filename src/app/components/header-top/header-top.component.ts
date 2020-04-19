import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import {
  faPlusCircle,
  faUser
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.sass']
})
export class HeaderTopComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  faUser = faUser;

  public user: SocialUser;
  public loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
