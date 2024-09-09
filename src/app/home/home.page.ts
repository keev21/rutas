import { Component, OnInit } from '@angular/core';
import { TareasService, Tarea } from '../services/tareas.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tareas: Tarea[] = [];
  tareasFiltradas: Tarea[] = [];

  constructor(private tareasService: TareasService, private navCtrl: NavController) {}

  ngOnInit() {
    this.cargarTareas();
  }

  async cargarTareas() {
    this.tareas = await this.tareasService.obtenerTareas();
  }

  agregarTarea() {
    this.navCtrl.navigateForward('/gestion-tareas');
  }

  editarTarea(id: number) {
    this.navCtrl.navigateForward(`/gestion-tareas/${id}`);
  }

  verTarea(id: number) {
    this.navCtrl.navigateForward(`/detalles-tarea/${id}`);
  }

  async eliminarTarea(id: number) {
    await this.tareasService.eliminarTarea(id);
    this.cargarTareas();
  }
}