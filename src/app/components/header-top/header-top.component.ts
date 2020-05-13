import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
// Fontawsome
import {
  faPlusCircle,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { AuthService as LocalAuthService } from '../../services/auth.service';

// Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.sass']
})
export class HeaderTopComponent implements OnInit {

  @ViewChild('mdLogin') mdLogin: ElementRef;
  @ViewChild('mdRegister') mdRegister: ElementRef;

  faPlusCircle = faPlusCircle;
  faUser = faUser;

  prevPublic = false;
  navOpen = false;

  public user: SocialUser = {} as SocialUser;
  public loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private locAuthService: LocalAuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.loggedIn = (user != null);

      if (this.loggedIn) {
        this.user = user;
        this.modalService.dismissAll();
      }

      if (this.prevPublic) {
        this.openPublicar(this.mdLogin, this.mdRegister);
      }
    });

    this.locAuthService.authState.subscribe(user => {
      this.loggedIn = (user != null);

      if (this.loggedIn) {
        const customer = (user as Customer);
        this.user.name = customer.name;
        sessionStorage.setItem('session', JSON.stringify(customer));
      }
    }, err => {
      console.log(err);
    });
  }

  openModal(mdLogin) {
    this.modalService.dismissAll();
    this.modalService.open(mdLogin, { centered: true })
  }

  openPublicar(mdLogin, mdRegister) {
    this.prevPublic = true;
    if (this.loggedIn) {
      this.modalService.open(mdRegister, { centered: true });
    } else {
      this.modalService.open(mdLogin, { centered: true });
    }
  }

  signOut(): void {
    this.authService.signOut();
    this.locAuthService.signOut();
    this.navOpen = false;
  }

  customerLogged(evt: any) {
    this.modalService.dismissAll();
  }

  customerRegistered(evt: any) {
    this.modalService.dismissAll();
  }

  toggleNavbar() {
    this.navOpen = !this.navOpen;
  }
}
