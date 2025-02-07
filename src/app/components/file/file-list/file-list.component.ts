import { Component, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FolderFormComponent } from '../../folder/folder-form/folder-form.component';
import { FileList } from '../file-interface';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss'
})
export class FileListComponent {
  displayedColumns: string[] = ['documentId','name', 'documentType', 'addedOn', 'status','actions'];
  dataSource = new MatTableDataSource<FileList>(ELEMENT_DATA);
  matDialogRef!: MatDialogRef<FolderFormComponent>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private matDialog: MatDialog, private route: Router,) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  updateFolder(action: string) {
  }

  fileList(){
  }
}

const ELEMENT_DATA: FileList[] = [
  {documentId:'123453dsj', name: 'Hydrogen', documentType: '', addedOn: 'Feb 6,2025,9:57:25 AM', status:'Failed',actions:'' },
  {documentId:'12345dsaf3dsj', name: 'Hydrogen', documentType: '', addedOn: 'Feb 6,2025,9:57:25 AM', status:'Failed',actions:'' },
  {documentId:'dfsa123453dsj', name: 'Hydrogen', documentType: '', addedOn: 'Feb 6,2025,9:57:25 AM', status:'Failed',actions:'' },
  {documentId:'123dsfa453dsj', name: 'Hydrogen', documentType: '', addedOn: 'Feb 6,2025,9:57:25 AM', status:'Failed',actions:'' },
  {documentId:'1sdaf23453dsj', name: 'Hydrogen', documentType: '', addedOn: 'Feb 6,2025,9:57:25 AM', status:'Failed',actions:'' },
  {documentId:'1dfsa23453dsj', name: 'Hydrogen', documentType: '', addedOn: 'Feb 6,2025,9:57:25 AM', status:'Failed',actions:'' },
  {documentId:'1234dfds53dsj', name: 'Hydrogen', documentType: '', addedOn: 'Feb 6,2025,9:57:25 AM', status:'Failed',actions:'' },

];