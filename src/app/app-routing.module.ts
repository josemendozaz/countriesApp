/* Modulos */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Componentes */
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { SeeCountryComponent } from './country/pages/see-country/see-country.component';

/* Rutas */
const routes: Routes = [
	{
		path		: '',
		component	: ByCountryComponent,
		pathMatch	: 'full'
	},
	{
		path		: 'region',
		component	: ByRegionComponent,
	},
	{
		path		: 'capital',
		component	: ByCapitalComponent,
	},
	{
		path		: 'country/:countryCode',
		component	: SeeCountryComponent,
	},
	{
		path		: '**',
		redirectTo	: '',
		// component	: 404Component,
	}
];

/* Declaraciones / Importaciones / Exportaciones */
@NgModule({
	imports	: [
		RouterModule.forRoot( routes )
	],
	exports	: [
		RouterModule
	]
})

/* Clase */
export class AppRoutingModule {}
