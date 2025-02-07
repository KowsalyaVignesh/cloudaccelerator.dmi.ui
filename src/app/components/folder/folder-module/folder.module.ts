import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FolderRoutingModule } from './folder-routing.module';
import { FolderFormComponent } from '../folder-form/folder-form.component';
import { FolderListComponent } from '../folder-list/folder-list.component';
import { MaterialModule } from '../../../modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FolderListComponent,
    FolderFormComponent
  ],
  imports: [
    CommonModule,
    FolderRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class FolderModule { }
