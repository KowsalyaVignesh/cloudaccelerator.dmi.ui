import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: 'cloudaccelerator', pathMatch: 'full' },
  { path: 'cloudaccelerator', loadChildren: () => import('./components/navbar/navbar-modules/navbar-modules.module').then(module => module.NavbarModulesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
