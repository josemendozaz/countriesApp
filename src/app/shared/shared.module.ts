/* Modulos */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Componentes */
import { SidebarComponent } from './sidebar/sidebar.component';

/* Declaraciones / Importaciones / Exportaciones */
@NgModule({
	declarations	: [
		SidebarComponent
  	],
  	imports			: [
		CommonModule,
		RouterModule
	],
	exports			: [
		SidebarComponent
	]
})

/* Clase */
export class SharedModule { }
