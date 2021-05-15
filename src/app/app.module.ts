/* Modulos */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'


/* Componentes */
import { AppComponent } from './app.component';
import { CountryModule } from './country/country.module';
import { SharedModule } from './shared/shared.module';

/* Declaraciones / Importaciones / Exportaciones */
@NgModule({
	declarations	: [
		AppComponent
	],
	imports			: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		CountryModule,
		SharedModule
	],
	providers		: [],
	bootstrap		: [AppComponent]
})

/* Clase */
export class AppModule { }
