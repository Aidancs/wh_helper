import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { BaseHttpService } from './base-http.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class MagicService extends BaseHttpService {
	data: any;

	constructor(private http: Http) {
		super();
	}

	getMagicJSon(): any {
		return this.http.get('assets/data/magic.json')
			.map(res => res.json())
			.pipe(tap(res => { this.data = res }));
	}
}
