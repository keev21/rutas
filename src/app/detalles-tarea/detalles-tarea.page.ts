import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasService, Tarea } from '../services/tareas.service';

@Component({
  selector: 'app-detalles-tarea',
  templateUrl: './detalles-tarea.page.html',
  styleUrls: ['./detalles-tarea.page.scss'],
})
export class DetallesTareaPage implements OnInit {
  tarea: Tarea | undefined;

  constructor(private route: ActivatedRoute, private tareasService: TareasService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarTarea(id);
  }

  async cargarTarea(id: number) {
    this.tarea = await this.tareasService.obtenerTareaPorId(id);
  }
}