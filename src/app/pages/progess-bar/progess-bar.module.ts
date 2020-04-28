import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgessBarPageRoutingModule } from './progess-bar-routing.module';

import { ProgessBarPage } from './progess-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgessBarPageRoutingModule
  ],
  declarations: [ProgessBarPage]
})
export class ProgessBarPageModule {}
