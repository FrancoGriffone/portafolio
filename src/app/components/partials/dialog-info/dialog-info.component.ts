import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-info',
  standalone: true,
  imports: [],
  templateUrl: './dialog-info.component.html',
  styleUrl: './dialog-info.component.scss'
})
export class DialogInfoComponent {

  constructor(@Inject(MAT_DIALOG_DATA) 
  public data: any, 
  public dialogRef: MatDialogRef<DialogInfoComponent>){}

  ngOnInit(): void {
  }

}
