export class FetchAlarielle {
	static type = '[Fetch] Alarielle';
	constructor(public payload:
		{
			id: number,
			name: string,
			stats: any[],
			abilities: any,
			command_ability?: any[],
			missile_weapons?: any[],
			melee_weapons: any[],
			magic?: any[],
			image: string,
			dead: boolean,
			fly: boolean,
		} =
		{
			id: null,
			name: null,
			stats: null,
			abilities: null,
			command_ability: null,
			missile_weapons: null,
			melee_weapons: null,
			magic: null,
			image: null,
			dead: null,
			fly: null,
		}) { }
}
