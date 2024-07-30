import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SmoothScrollService } from '../../service/smothScroll';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  visible: boolean = false

  position: string = 'center';

  constructor(private smoothScrollService: SmoothScrollService) {}

  onScroll(elementId: string): void {
    this.smoothScrollService.scrollToElement(elementId);
  }

  showDialog(posicion: string, item: string){
    this.position = posicion;
    this.visible = true
  }
}
