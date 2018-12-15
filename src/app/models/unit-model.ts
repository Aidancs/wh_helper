export class UnitModel {

	constructor(
		public id: number,
		public name: string,
		public stats: any[],
		public abilties: any[],
		public command_abilites: any[],
		public missle_weapons: any[],
		public melee_weapons: any[],
		public image: string,
	) { }

	getStats() {
		return this.stats ? this.stats : null;
	}

	getName() {
		return this.name ? this.name : null;
	}

	getAbilites() {
		return this.abilties ? this.abilties : null;
	}

	getCommandAbilites() {
		return this.command_abilites ? this.command_abilites : null;
	}

	getMissleWeapons() {
		return this.missle_weapons ? this.missle_weapons : null;
	}

	getMeleeWeapons() {
		return this.melee_weapons ? this.melee_weapons : null;
	}

	getImage() {
		return this.image ? this.image : '';
	}
}
