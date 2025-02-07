import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FolderDialogData } from "../folder-interface";
@Component({
  selector: 'app-folder-form',
  templateUrl: './folder-form.component.html',
  styleUrl: './folder-form.component.scss'
})
export class FolderFormComponent {
  

  constructor(private formBuilder: FormBuilder, private route: Router,
    @Inject(MAT_DIALOG_DATA) public data: FolderDialogData
  ) { }

  ngOnInit(){
    console.log("data",this.data);
    
  }
  public folderForm = this.formBuilder.group({
    folderName: ['', Validators.required]
  });

  public onSubmit(): void {
  }
}

