import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileModuleRoutingModule } from './file-module-routing.module';
import { FileDetailComponent } from '../file-detail/file-detail.component';
import { FileListComponent } from '../file-list/file-list.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../modules/material/material.module';


@NgModule({
  declarations: [
    FileListComponent,
    FileUploadComponent,
    FileDetailComponent
  ],
  imports: [
    CommonModule,
    FileModuleRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class FileModuleModule { }
