import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgessBarPage } from './progess-bar.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ProgessBarPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgessBarPageRoutingModule {}
