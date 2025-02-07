import { Component } from '@angular/core';
import { NavbarService } from '../navbar/navbar-service/navbar.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  constructor(private sideNavService: NavbarService,
    // private authService: AuthenticationService
   ) {

  }

  public clickMenu():void {
    this.sideNavService.toggle();
  }

  public logout(){
    // this.authService.logout()
  }
}
