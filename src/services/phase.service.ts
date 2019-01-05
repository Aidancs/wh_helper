import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { BaseHttpService } from './base-http.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class PhaseService extends BaseHttpService {
	data: [];

	constructor(private http: Http) {
		super();
	}

	getPhasesJSon(): any {
		return this.http.get('assets/data/units.json')
			.map(res => res.json())
			.pipe(tap(res => { this.data = res }));
	}
}
