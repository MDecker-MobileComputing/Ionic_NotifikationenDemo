import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { BenachrichtigungsService } from './benachrichtigungs.service';
//import { Benachrichtigung } from './benachrichtigung';

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

      // Folgenden Code-Block für Test mit "ionic serve" einkommentieren
      /*
      const b1 = new Benachrichtigung( "Test-Titel 1", "Test-Body 1", "Wert für eigenes Attribut", false);
      const b2 = new Benachrichtigung( "Test-Titel 2", "Test-Body 2", "", true);
      benachrichtigungsService.nachrichtenArray.push(b1);
      benachrichtigungsService.nachrichtenArray.push(b2);
      */
    });
  }


  /**
   * Event-Handler-Methode, um Menü an linker Seite zu schließen.
   */
  public menuSchliessen() {

    this.menuController.close();
  }
}
