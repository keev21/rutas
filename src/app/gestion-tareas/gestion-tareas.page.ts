import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { TareasService, Tarea } from '../services/tareas.service';

@Component({
  selector: 'app-gestion-tareas',
  templateUrl: './gestion-tareas.page.html',
  styleUrls: ['./gestion-tareas.page.scss'],
})
export class GestionTareasPage implements OnInit {
  tarea: Tarea = {
    id: 0,
    titulo: '',
    descripcion: '',
    estado: 'pendiente'
  };

  constructor(
    private route: ActivatedRoute,
    private tareasService: TareasService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtener el parámetro 'id'
    if (id) {
      this.cargarTarea(parseInt(id, 10)); // Convertir el id a número y cargar la tarea
    }
  }

  // Cargar una tarea existente si estamos en modo edición
  async cargarTarea(id: number) {
    const tarea = await this.tareasService.obtenerTareaPorId(id);
    if (tarea) {
      this.tarea = tarea; // Asignar los datos de la tarea a los campos del formulario
    }
  }

  // Guardar tarea (nueva o editada)
  async guardarTarea() {
    await this.tareasService.guardarTarea(this.tarea);
    this.mostrarToast('Tarea guardada con éxito');
    this.navCtrl.navigateBack('/home');
  }

  // Mostrar un toast de confirmación o error
  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
