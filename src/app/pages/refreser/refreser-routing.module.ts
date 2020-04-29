import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefreserPage } from './refreser.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: RefreserPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefreserPageRoutingModule {}
