import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { BaseHttpService } from './base-http.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class PhasesService extends BaseHttpService {
	data: any;

	constructor(private http: Http) {
		super();
	}

	getPhasesJSon(): any {
		return this.http.get('assets/data/phases.json')
			.map(res => res.json())
			.pipe(tap(res => { this.data = res }));
	}
}
