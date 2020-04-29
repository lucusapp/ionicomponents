import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefreserPageRoutingModule } from './refreser-routing.module';

import { RefreserPage } from './refreser.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefreserPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RefreserPage]
})
export class RefreserPageModule {}
