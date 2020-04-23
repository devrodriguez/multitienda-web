import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild("mdLogin") mdLogin: ElementRef;
  @ViewChild("mdRegister") mdRegister: ElementRef;

  faPlusCircle = faPlusCircle;
  faUser = faUser;

  prevPublic: boolean = false;

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

      if (this.prevPublic) {
        this.openPublicar(this.mdLogin, this.mdRegister)
      }
    });
  }

  openModal(mdLogin) {
    this.modalService.open(mdLogin, { centered: true })
  }

  openPublicar(mdLogin, mdRegister) {
    this.prevPublic = true;
    if (this.loggedIn) {
      this.modalService.open(mdRegister, { centered: true })
    } else {
      this.modalService.open(mdLogin, { centered: true })
    }
  }

  signOut(): void {
    this.authService.signOut();
  }
}
