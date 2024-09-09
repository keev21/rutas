import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' 
  },
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'gestion-tareas', 
    loadChildren: () => import('./gestion-tareas/gestion-tareas.module').then(m => m.GestionTareasPageModule)
  },
  {
    path: 'gestion-tareas/:id', 
    loadChildren: () => import('./gestion-tareas/gestion-tareas.module').then(m => m.GestionTareasPageModule)
  },
  {
    path: 'detalles-tarea/:id', 
    loadChildren: () => import('./detalles-tarea/detalles-tarea.module').then(m => m.DetallesTareaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
