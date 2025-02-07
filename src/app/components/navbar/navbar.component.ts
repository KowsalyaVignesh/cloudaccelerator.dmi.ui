import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar-service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public showSideNav = false;
  menu: NavItem[] = [
   
    {
      displayName: 'Knowledge',
      iconName: 'lightbulb',
      children: [
        {
          displayName: 'Data source',
          iconName: 'cloud_done',
          route: '/cloudaccelerator/realm'
        },
        // {
        //   displayName: 'Todos',
        //   iconName: 'waves',
        //   route: '/todos'
        // }
      ]
    },
    // {
    //   displayName: 'Perfiles',
    //   iconName: 'group',
    //   children: [
    //     {
    //       displayName: 'Búsqueda Perfil',
    //       iconName: 'search',
    //       route: '/busquedaperfiles'
    //     }
    //   ]
    // }
  ];

  constructor(private route: Router, private sideNavService: NavbarService) { }

  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.showSideNav = !this.showSideNav
    });
  }

  public handleNavigation(input: string) {
    console.log("input", input);
    this.route.navigate([input]);
  }
}

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}