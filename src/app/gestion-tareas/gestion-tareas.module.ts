import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionTareasPageRoutingModule } from './gestion-tareas-routing.module';

import { GestionTareasPage } from './gestion-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionTareasPageRoutingModule
  ],
  declarations: [GestionTareasPage]
})
export class GestionTareasPageModule {}
