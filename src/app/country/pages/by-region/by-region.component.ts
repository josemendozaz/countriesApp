/* Importaciones */
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../service/country.service';

/* Componente */
@Component({
	selector	: 'app-by-region',
	templateUrl	: './by-region.component.html',
	styleUrls	: ['./by-region.component.css']
})

/* Clase */
export class ByRegionComponent implements OnInit {

	regions			: string[]	= ['africa', 'americas', 'asia', 'europe', 'oceania'];
	regionActive	: string	= '';
	isError			: boolean	= false;
	countries		: Country[]	= [];

	constructor( private countryService: CountryService ) { }

	ngOnInit()							: void {
	}

	getActiveClassCss( region: string )	: string {
		return ( region === this.regionActive ) ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1';
	}

	activateRegion( region: string )	: void {
		if ( region === this.regionActive ) { return; }
		this.regionActive = region;
		this.countryService.searchRegion( region )
		.subscribe( (countries) => {
			this.countries	= countries;
			console.log( this.countries );
		}, (error) => {
			console.log('error');
			console.log(error);
			this.isError	= true;
			this.countries	= [];
		});
	}

}
