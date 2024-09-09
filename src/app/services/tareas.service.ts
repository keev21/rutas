import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: 'pendiente' | 'completada';
}

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private readonly key = 'tareas';

  constructor() {}

  // Obtener todas las tareas desde Preferences
  public async obtenerTareas(): Promise<Tarea[]> {
    const { value } = await Preferences.get({ key: this.key });
    return value ? JSON.parse(value) : [];
  }

  // Guardar o actualizar una tarea
  async guardarTarea(tarea: Tarea) {
    const tareas = await this.obtenerTareas();
    const indice = tareas.findIndex(t => t.id === tarea.id);

    if (indice !== -1) {
      tareas[indice] = tarea; // Actualizar tarea existente
    } else {
      tarea.id = Date.now(); // Generar un ID único
      tareas.push(tarea);    // Añadir nueva tarea
    }

    await Preferences.set({
      key: this.key,
      value: JSON.stringify(tareas)
    });
  }

  // Obtener una tarea por ID
  async obtenerTareaPorId(id: number): Promise<Tarea | undefined> {
    const tareas = await this.obtenerTareas();
    return tareas.find(t => t.id === id);
  }

  // Eliminar una tarea por ID
  async eliminarTarea(id: number) {
    const tareas = await this.obtenerTareas();
    const tareasFiltradas = tareas.filter(t => t.id !== id);

    await Preferences.set({
      key: this.key,
      value: JSON.stringify(tareasFiltradas)
    });
  }
}
