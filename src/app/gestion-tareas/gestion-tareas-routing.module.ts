import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionTareasPage } from './gestion-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: GestionTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionTareasPageRoutingModule {}
