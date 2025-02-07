import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FolderListComponent } from './components/folder/folder-list/folder-list.component';
import { FolderFormComponent } from './components/folder/folder-form/folder-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileListComponent } from './components/file/file-list/file-list.component';
import { FileUploadComponent } from './components/file/file-upload/file-upload.component';
import { FileDetailComponent } from './components/file/file-detail/file-detail.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
