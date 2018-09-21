import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { BaseHttpService } from './base-http.service';

@Injectable()
export class UnitService extends BaseHttpService {

	constructor(private http: Http) {
		super();
	}

	getUnitJSon(): any {
		return this.http.get('assets/data/units.json').map(res => res.json());
	}
}
