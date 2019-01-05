import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { tap } from 'rxjs/operators';

import { BaseHttpService } from './base-http.service';

@Injectable()
export class UnitService extends BaseHttpService {
	units = [];

	constructor(private http: Http) {
		super();
	}

	getUnitJSon(): any {
		return this.http.get('assets/data/units.json')
			.map(res => res.json())
			.pipe(tap(res => { this.units = res }));
	}

	update(id, updates) {
		const d = Object.assign({}, this.units[id - 1], updates);
		this.units[id - 1] = d;
		return this.units;
	}
}
