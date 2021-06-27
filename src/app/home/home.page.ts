import { Component } from '@angular/core';
import { BenachrichtigungsService } from '../benachrichtigungs.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private benachrichtigungsService: BenachrichtigungsService) {}

}
