import { Injectable } from '@angular/core';

import { PushNotifications, PushNotificationSchema, ActionPerformed } from '@capacitor/push-notifications';
import { HelferleinService } from './helferlein.service';
import { Capacitor } from '@capacitor/core';
import { Benachrichtigung } from './benachrichtigung';

/**
 * Diese Service-Klasse kapselt die Logik für den Empfang von Push-Notifikationen
 * vom "Firebase Cloud Messaging (FCM)".
 *
 * Für die Definition von Event-Handlern für Empfang von Vordergrund-Nachrichten oder
 * Klick auf Hintergrund-Nachrichten siehe
 * https://enappd.com/blog/firebase-push-notification-in-ionic-react-capacitor/111/
 */
@Injectable({
  providedIn: 'root'
})
export class BenachrichtigungsService {

  /** Array aller empfangenen Benachrichtigungen, wird auf UI in Liste dargestellt. */
  public nachrichtenArray: Benachrichtigung[] = [];

  /**
   * Konstruktor für Dependency Injection.
   */
  constructor(private helferlein: HelferleinService) { }

  /**
   * Registriert die App für den Empfang von Push-Nachrichten.
   */
  public async registrieren() {

      if (Capacitor.getPlatform() === "web") {

        this.helferlein.zeigeToast("Notifikationen stehen für Ausführung als Web-App nicht zur Verfügung.");
        return;
      }

      await PushNotifications.requestPermissions();
      await PushNotifications.register();
      await this.helferlein.zeigeToast("App hat sich für Push-Notifikationen registriert.");

      await this.eventHandlerFuerVordergrundBenachrichtigungenRegistrieren();
      await this.eventHandlerFuerKlickAufHintergrundBenachrichtigungRegistrieren();
  }

  /**
   * Event-Handler für den Empfang von Push-Nachrichten definieren, wenn die App zu diesem
   * Zeitpunkt im **Vordergrund** ist.
   */
   private async eventHandlerFuerVordergrundBenachrichtigungenRegistrieren() {

      await PushNotifications.addListener(
                                "pushNotificationReceived",
                                async (benachrichtigung: PushNotificationSchema) => {

                                    this.helferlein.zeigeToast(`Push-Nachricht mit Titel "${benachrichtigung.title}" empfangen: ${benachrichtigung.body}`);

                                    const b = new Benachrichtigung( benachrichtigung.title,                                                                 
                                                                    benachrichtigung.body,
                                                                    false // imHintergrundEmpfangen
                                                                  ); 
                                    this.nachrichtenArray.push(b);
                                }
                              );
      console.log("Event-Handler für >pushNotificationReceived< definiert.");
  }

  /**
   * Event-Handler für Klick auf eine Benachrichtigung registrieren, die empfangen wurde,
   * während die App geschlossen oder im Hintergrund war.
   */
  private async eventHandlerFuerKlickAufHintergrundBenachrichtigungRegistrieren() {

      await PushNotifications.addListener(
        "pushNotificationActionPerformed",
        async (benachrichtigung: ActionPerformed) => {

            this.helferlein.zeigeToast("Auf Push-Nachricht geklickt, die empfangen wurde, während die App nicht im Vordergrund war.");

            const notification = benachrichtigung.notification;
            const b = new Benachrichtigung( notification.title, 
                                            notification.body,
                                            true // imHintergrundEmpfangen
            ); 
            this.nachrichtenArray.push(b);
        }
      );
      console.log("Event-Handler für >pushNotificationActionPerformed< definiert.");
  }

}
