import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { tap } from 'rxjs/operators';

import { BaseHttpService } from './base-http.service';

@Injectable()
export class UnitsService extends BaseHttpService {
	units = [];

	constructor(private http: Http) {
		super();
	}

	getUnitsJSon(): any {
		// return this.http.get('assets/data/units.json')
		return this.http.get('assets/data/slaanesh-units.json')
		// return this.http.get('assets/data/nighthaunt.json')
			.map(res => res.json())
			.pipe(tap(res => { this.units = res }));
	}

	update(id, updates) {
		const d = Object.assign({}, this.units[id - 1], updates);
		this.units[id - 1] = d;
		return this.units;
	}

	killed(id): boolean {
		console.log(this.units[id].alive, 'this.units[id].alive');

		return this.units[id].alive = false;
	}
}
