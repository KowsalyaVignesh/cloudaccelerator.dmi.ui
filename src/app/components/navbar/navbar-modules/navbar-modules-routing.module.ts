import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../navbar.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent, children: [
      { path: 'realm', loadChildren: () => import('../../folder/folder-module/folder.module').then(module => module.FolderModule) },
      { path: 'upload', loadChildren: () => import('../../file/file-module/file-module.module').then(module => module.FileModuleModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarModulesRoutingModule { }
