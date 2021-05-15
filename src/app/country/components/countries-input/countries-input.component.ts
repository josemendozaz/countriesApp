/* Importaciones */
import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

/* Componente */
@Component({
	selector	: 'app-countries-input',
	templateUrl	: './countries-input.component.html',
	styleUrls	: ['./countries-input.component.css']
})

/* Clase */
export class CountriesInputComponent implements OnInit {

	// tslint:disable-next-line: no-output-on-prefix
	@Output() onEnter		: EventEmitter<string>	= new EventEmitter();
	// tslint:disable-next-line: no-output-on-prefix
	@Output() onDebounce	: EventEmitter<string>	= new EventEmitter();

	@Input() placeholder	: string				= '';

	/* Observable especial */
	debouncer				: Subject<string>	= new Subject();

	argument				: string = '';

	/* Se dispara una unica vez cuando el componente se inicializa */
	ngOnInit()				: void {
		// throw new Error('Method not implemented.');
		this.debouncer
		.pipe( debounceTime( 300 ) )
		.subscribe( value => {
			this.onDebounce.emit( value );
		});
	}

	search()				: void {
		this.onEnter.emit( this.argument );
	}

	keyPress( event: any )	: void {
		// const value	= event.target.value;
		// console.log( value );
		// console.log( this.argument );
		this.debouncer.next( this.argument );
	}

}
