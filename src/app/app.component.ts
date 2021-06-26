import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { PushNotifications } from '@capacitor/push-notifications';
import { HelferleinService } from './helferlein.service';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private menuController: MenuController,
              private platform: Platform,
              private helferlein: HelferleinService) {

    if (Capacitor.getPlatform() === "web") {

      this.helferlein.zeigeToast("Notifikationen stehen für Ausführung als Web-App nicht zur Verfügung.");
      return;
    }

    this.platform.ready().then(async () => {

      await PushNotifications.requestPermissions();
      await PushNotifications.register();
      await this.helferlein.zeigeToast("App hat sich für Push-Notifikationen registriert.");
    });

  }

  /**
   * Event-Handler-Methode, um Menü an linker Seite zu schließen.
   */
  menuSchliessen() {
    
    this.menuController.close();
  }  
}
