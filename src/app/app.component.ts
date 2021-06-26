import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private menuController: MenuController) {}

  /**
   * Event-Handler-Methode, um Menü an linker Seite zu schließen.
   */
  menuSchliessen() {
    
    this.menuController.close();
  }  
}
