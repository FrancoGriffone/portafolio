import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-contacto',
  standalone: true,
  imports: [],
  templateUrl: './dialog-contacto.component.html',
  styleUrl: './dialog-contacto.component.scss'
})
export class DialogContactoComponent {

  constructor(@Inject(MAT_DIALOG_DATA) 
  public data: any, 
  public dialogRef: MatDialogRef<DialogContactoComponent>){}

  ngOnInit(): void {
  }

}
