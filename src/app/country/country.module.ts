/* Modulos */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Componentes */
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { RouterModule } from '@angular/router';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountriesInputComponent } from './components/countries-input/countries-input.component';

/* Declaraciones / Importaciones / Exportaciones */
@NgModule({
	declarations	: [
		ByCapitalComponent,
		ByCountryComponent,
		ByRegionComponent,
		SeeCountryComponent,
  CountriesTableComponent,
  CountriesInputComponent
	],
	imports			: [
		CommonModule,
		FormsModule,
		RouterModule
	],
	exports			: [
		ByCapitalComponent,
		ByCountryComponent,
		ByRegionComponent,
		SeeCountryComponent
	]
})

/* Clase */
export class CountryModule { }
