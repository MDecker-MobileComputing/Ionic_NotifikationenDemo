import { Component, OnInit } from '@angular/core';
import { FCM } from '@capacitor-community/fcm';
import { Clipboard } from '@capacitor/clipboard';
import { HelferleinService } from '../helferlein.service';
import { PushNotifications } from '@capacitor/push-notifications';

/**
 * Plugin für Zugriff auf Clipboard: https://capacitorjs.com/docs/apis/clipboard
 */
@Component({
  selector: 'app-ueber',
  templateUrl: './ueber.page.html',
  styleUrls: ['./ueber.page.scss'],
})
export class UeberPage implements OnInit {

  /** Member-Variable mit Token wird an UI-Element gebunden. */
  public fcmToken: string = "";

  /** Member-Variable mit Berechtigungsstatus wird an UI-Element gebunden. */
  public berechtigungsStatus: String = "<unbekannt>";

  /**
   * Konstruktor für Dependency Injection.
   */
  constructor(private helferlein: HelferleinService) { }              

  /**
   * Lifecycle-Methode, liest Token (wenn vorhanden) aus und schreibt
   * es in die Member-Variable.
   */
  ngOnInit() {

    FCM.getToken()
      .then((antwort) => { this.fcmToken = antwort.token })
      .catch((fehler) => { this.fcmToken = "Fehler bei Abfrage Token: " + fehler });

    PushNotifications.checkPermissions()
                    .then( (ergebnis) => {this.berechtigungsStatus = ergebnis.receive;} );                     
  }


  /**
   * Event-Handler-Methode für Button "In Zwischenablage kopieren".
   * Für Zugriff auf Zwischenablage mit Ionic siehe auch
   * https://www.remotestack.io/ionic-copy-to-clipboard-integration-tutorial/
   */
  public async onZwischenablageButton() {

    await Clipboard.write({string: this.fcmToken});          
    await this.helferlein.zeigeToast("Text wurde in die Zwischenablage kopiert.");
  }

}
