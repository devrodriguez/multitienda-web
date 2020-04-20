import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
// Fontawsome
import {
  faPlusCircle,
  faUser
} from '@fortawesome/free-solid-svg-icons';

// Bootstrap
import { NgbModal,  } from '@ng-bootstrap/ng-Bootstrap';

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

  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);

      if (this.loggedIn) {
        this.modalService.dismissAll();
      }
    });
  }

  openModal(content) {
    this.modalService.open(content, { centered: true })
  }

  signOut(): void {
    this.authService.signOut();
  }
}
