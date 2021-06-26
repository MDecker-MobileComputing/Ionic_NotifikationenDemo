import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UeberPageRoutingModule } from './ueber-routing.module';

import { UeberPage } from './ueber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UeberPageRoutingModule
  ],
  declarations: [UeberPage]
})
export class UeberPageModule {}
