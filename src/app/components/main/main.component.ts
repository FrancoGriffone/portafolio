import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { SmoothScrollService } from '../../service/smothScroll';
import { DialogContactoComponent } from '../partials/dialog-contacto/dialog-contacto.component';
import { DialogInfoComponent } from '../partials/dialog-info/dialog-info.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

  visible: boolean = false

  position: any = 'center';

  constructor(private smoothScrollService: SmoothScrollService,  private dialog: MatDialog) {}

  onScroll(elementId: string): void {
    this.smoothScrollService.scrollToElement(elementId);
    //COLOCAMOS EL TIMEOUT PARA QUE PERMITA EL MOVIMIENTO EN EL CASO QUE SEA CONTACTO
    setTimeout(() => {
      if(elementId == 'contacto'){
        this.showDialog(elementId)
      }
    }, 1000);
  }

  showDialog(item: string){
    if(item == 'contacto'){
      const dialogRef = this.dialog.open(DialogContactoComponent,{
        data : item,
        width: '80%'
      });
    } else {
      const dialogRef = this.dialog.open(DialogInfoComponent,{
        data : item,
        width: '80%'
      });
    }
  }
}
