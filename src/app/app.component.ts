import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { BenachrichtigungsService } from './benachrichtigungs.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private menuController: MenuController,
              private platform: Platform,
              private benachrichtigungsService: BenachrichtigungsService) {

    this.platform.ready().then(async () => {

      await this.benachrichtigungsService.registrieren();
    });
  }


  /**
   * Event-Handler-Methode, um Menü an linker Seite zu schließen.
   */
  public menuSchliessen() {

    this.menuController.close();
  }
}
