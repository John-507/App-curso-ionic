import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvinciaPageRoutingModule } from './provincia-routing.module';

import { ProvinciaPage } from './provincia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvinciaPageRoutingModule
  ],
  declarations: [ProvinciaPage]
})
export class ProvinciaPageModule {}
