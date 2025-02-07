import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public sideNavToggleSubject = new BehaviorSubject<any>(null);


  public toggle() {
    return this.sideNavToggleSubject.next(null);
  }
}
