/* Modulos */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Componentes */
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Declaraciones / Importaciones / Exportaciones */
@NgModule({
	declarations	: [
		SidebarComponent,
  		FooterComponent,
	    NavbarComponent
  	],
  	imports			: [
		CommonModule,
		RouterModule
	],
	exports			: [
		SidebarComponent,
		FooterComponent,
		NavbarComponent
	]
})

/* Clase */
export class SharedModule { }
