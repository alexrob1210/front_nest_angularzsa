import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productos } from './components/producto/producto';
import { Categoria } from './components/categoria/categoria';



@NgModule({
  declarations: [
    Productos,
    Categoria
  ],
  imports: [
    CommonModule
  ]
})
export class InventarioModule { }
