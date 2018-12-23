import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { BaseHttpService } from '../../services/base-http.service';

import { FetchAlarielle } from './alarielle.actions';

export class AlarielleStateModel {
	id: number;
	name: string;
	stats: any[];
	abilities: any[];
	command_ability?: any[];
	missile_weapons?: any[];
	melee_weapons: any[];
	magic?: any[];
	image: string;
	dead: boolean;
	fly: boolean;
}

@State<AlarielleStateModel>({
	name: 'AlarielleState',
})
export class AlarielleState {

	@Selector() static killUnit(state: AlarielleStateModel): boolean {
		return;
	}

	@Selector() static getStats(state: AlarielleStateModel): any[] {
		return;
	}

	@Selector() static getAbilities(state: AlarielleStateModel): any[] {
		return;
	}

	@Selector() static getCommandAbilities(state: AlarielleStateModel): any[] {
		return;
	}

	@Selector() static getMissleWeapons(state: AlarielleStateModel): any[] {
		return;
	}

	@Selector() static getMeleeWeapons(state: AlarielleStateModel): any[] {
		return;
	}

	@Selector() static getMagic(state: AlarielleStateModel): any[] {
		return;
	}

	constructor(private http: Http) { }

	@Action(FetchAlarielle)
	fetchAlarielle(ctx: StateContext<AlarielleStateModel>, action: FetchAlarielle) {
		this.http.get('assets/data/units.json').map(res => res.json());
	}
}
