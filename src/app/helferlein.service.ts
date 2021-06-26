import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

/**
 * Diese Service-Klasse enthält Hilfsmethoden, die von mehreren Klassen der App
 * benötigt werden.
 */
@Injectable({
  providedIn: 'root'
})
export class HelferleinService {

  constructor(public toastController: ToastController) { }

  /**
   * Hilfsmethode zum Anzeigen einer Nachricht in einem Toast-Objekt.
   *
   * @param nachricht Text, der in Toast-Objekt angezeigt wird.
   */
   public async zeigeToast(nachricht: string)  {

      const toast = await this.toastController.create({
        message: nachricht,
        duration: 2000
      });

      await toast.present();
  }  
}
