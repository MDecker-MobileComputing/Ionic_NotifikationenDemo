import { Component } from '@angular/core';
import { BenachrichtigungsService } from '../benachrichtigungs.service';


/**
 * Hauptseite, zeigt Liste der empfangenen Nachrichten an.
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * Konstruktor für Dependency Injection
   */
  constructor(private benachrichtigungsService: BenachrichtigungsService) {}

}
