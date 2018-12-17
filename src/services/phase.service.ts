import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { BaseHttpService } from './base-http.service';

@Injectable()
export class PhaseService extends BaseHttpService {

	constructor(private http: Http) {
		super();
	}

	getPhasesJSon(): any {
		return this.http.get('assets/data/phase.json').map(res => res.json());
	}
}
