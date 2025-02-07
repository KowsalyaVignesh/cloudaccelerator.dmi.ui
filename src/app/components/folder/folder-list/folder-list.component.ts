import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FolderFormComponent } from '../folder-form/folder-form.component';
import { FolderList } from '../folder-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrl: './folder-list.component.scss'
})
export class FolderListComponent {
  displayedColumns: string[] = ['name', 'edit', 'delete'];
  dataSource = new MatTableDataSource<FolderList>(ELEMENT_DATA);
  matDialogRef!: MatDialogRef<FolderFormComponent>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private matDialog: MatDialog,private route: Router,) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateFolder(action: string) {
    console.log("action",action);
    
  this.matDialogRef = this.matDialog.open(FolderFormComponent, {
      data:{name:action}
      // disableClose: true
    });
    this.matDialogRef.afterClosed().subscribe(result => {
      // if (result === true) {
      //   this.getCategory();
      // }

    });
  }

  fileList(){
    this.route.navigate(["/cloudaccelerator/upload"]);
  }
}



const ELEMENT_DATA: FolderList[] = [
  { name: 'Hydrogen', edit:'', delete: 'H' },
  { name: 'Helium', edit: '', delete: 'He' },
  { name: 'Lithium', edit:' 6.941', delete: 'Li' },
  { name: 'Beryllium', edit:' 9.0122', delete: 'Be' },
  { name: 'Boron', edit: '', delete: 'B' },
  { name: 'Carbon', edit: '12.0107', delete: 'C' },
  { name: 'Nitrogen', edit: '', delete: 'N' },

];
