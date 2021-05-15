/* Importaciones */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../service/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';


/* Componente */
@Component({
	selector	: 'app-see-country',
	templateUrl	: './see-country.component.html',
	styleUrls	: ['./see-country.component.css']
})

/* Clase */
export class SeeCountryComponent implements OnInit {

	country!: Country;

	constructor( private activatedRoute: ActivatedRoute, private countryService: CountryService ) { }

	ngOnInit(): void {

		this.activatedRoute.params
		.pipe(
			switchMap( (params) =>
				this.countryService.searchCountrybyCode( params.countryCode )
			),
			tap( console.log )
		)
		.subscribe( country  => this.country = country );


		// this.activatedRoute.params
		// // .subscribe( params => {
		// .subscribe( ({ countryCode }) => {
		// 	console.log( countryCode );

		// 	this.countryService.searchCountrybyCode( countryCode )
		// 	.subscribe( (countryData) => {
		// 		// this.countries	= countries;
		// 		console.log( countryData );
		// 	}, (error) => {
		// 		console.log('error');
		// 		console.log(error);
		// 		// this.isError	= true;
		// 		// this.countries	= [];
		// 	});



		// });
	}

}
