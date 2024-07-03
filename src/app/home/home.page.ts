import { Component } from '@angular/core';
import { BenachrichtigungsService } from '../benachrichtigungs.service';
import { ChangeDetectorRef } from "@angular/core";

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
   * Konstruktor für Dependency Injection.
   */
  constructor( public benachrichtigungsService: BenachrichtigungsService,
               public changeDetector          : ChangeDetectorRef ) {

      benachrichtigungsService.changeDetector = changeDetector;
  }

}
