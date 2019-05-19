import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { PhaseModalPage } from '../../modals/phase-modal/phase-modal';
import { UnitsService } from '../../services/units.service';

@Component({
	selector: 'page-phases',
	templateUrl: 'phases.html'
})
export class PhasesPage {

	// phases = ['Start of Hero Phase', 'Hero Phase', 'Magic Phase', 'Movement Phase', 'Shooting Phase', 'Charge Phase', 'Start of Combat Phase', 'Combat Phase', 'End of Combat Phase', 'Battleshock Phase', 'Defense Phase', 'Enemy Hero', 'Enemy Combat', 'Enemy Battleshock'];

	phases = ['Hero Phase', 'Shooting Phase', 'Combat Phase', 'End of Combat Phase', 'Battleshock Phase', 'Enemy Hero', 'Enemy Combat'];

	start_of_hero_phase_list = [];
	hero_phase_list = [];
	end_of_hero_phase_list = [];
	magic_phase_list = [];
	start_of_movement_phase_list = [];
	movement_phase_list = [];
	end_of_movement_phase_list = [];
	start_of_shooting_phase_list = [];
	shooting_phase_list = [];
	end_of_shooting_phase_list = [];
	start_of_charge_phase_list = [];
	charge_phase_list = [];
	end_of_charge_phase_list = [];
	start_of_combat_phase_list = [];
	combat_phase_list = [];
	end_of_combat_phase_list = [];
	battleshock_phase_list = [];
	defense_phase_list = [];
	enemy_hero_phase_list = [];
	enemy_combat_phase_list = [];
	enemy_charge_phase_list = [];
	enemy_battleshock_phase_list = [];
	phaseList = [];
	phaseArray = [];
	dryads: any;

	constructor(
		private modalCtrl: ModalController,
		public navCtrl: NavController,
		private unitsSvc: UnitsService,
	) { }

	ngOnInit() {
		this.unitsSvc.getUnitsJSon().subscribe(result => {
			for (const key of Object.keys(result)) {
				// console.log(result[key].alive, 'result[key].alive');
				this.phaseArray.push(result[key].phases);
			}

			for (let i = 0; i < this.phaseArray.length; ++i) {
				for (let x = 0; x < this.phaseArray[i].length; ++x) {
					if (this.phaseArray[i][x].phase === 'start_of_hero_phase') {
						this.start_of_hero_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'hero_phase') {
						this.hero_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'end_of_hero_phase') {
						this.end_of_hero_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'magic_phase') {
						this.magic_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'start_of_movement_phase') {
						this.start_of_movement_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'movement_phase') {
						this.movement_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'end_of_movement_phase') {
						this.end_of_movement_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'shooting_phase') {
						this.shooting_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'start_of_charge_phase') {
						this.start_of_charge_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'charge_phase') {
						this.charge_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'end_of_charge_phase') {
						this.end_of_charge_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'start_of_combat_phase') {
						this.start_of_combat_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'combat_phase') {
						this.combat_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'end_of_combat_phase') {
						this.end_of_combat_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'battleshock_phase') {
						this.battleshock_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'defense_phase') {
						this.defense_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'enemy_hero_phase') {
						this.enemy_hero_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'enemy_combat_phase') {
						this.enemy_combat_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'enemy_charge_phase') {
						this.enemy_charge_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'enemy_battleshock_phase') {
						this.enemy_battleshock_phase_list.push(this.phaseArray[i][x]);
					}
				}
			}
		});
	}

	phaseTapped(phase) {
		let list = [];

		if (phase === 'Start of Hero Phase') {
			list = this.start_of_hero_phase_list;
		} else if (phase === 'Hero Phase') {
			list = this.hero_phase_list;
		} else if (phase === 'End of Hero Phase') {
			list = this.end_of_hero_phase_list;
		} else if (phase === 'Magic Phase') {
			list = this.magic_phase_list;
		} else if (phase === 'Start of Movement Phase') {
			list = this.start_of_movement_phase_list;
		} else if (phase === 'Movement Phase') {
			list = this.movement_phase_list;
		} else if (phase === 'End of Movement Phase') {
			list = this.end_of_movement_phase_list;
		} else if (phase === 'Shooting Phase') {
			list = this.shooting_phase_list;
		} else if (phase === 'Start of Charge Phase') {
			list = this.start_of_charge_phase_list;
		} else if (phase === 'Charge Phase') {
			list = this.charge_phase_list;
		} else if (phase === 'End of Charge Phase') {
			list = this.end_of_charge_phase_list;
		} else if (phase === 'Start of Combat Phase') {
			list = this.start_of_combat_phase_list;
		} else if (phase === 'Combat Phase') {
			list = this.combat_phase_list;
		} else if (phase === 'End of Combat Phase') {
			list = this.end_of_combat_phase_list;
		} else if (phase === 'Battleshock Phase') {
			list = this.battleshock_phase_list;
		} else if (phase === 'Defense Phase') {
			list = this.defense_phase_list;
		} else if (phase === 'Enemy Hero') {
			list = this.enemy_hero_phase_list;
		} else if (phase === 'Enemy Combat') {
			list = this.enemy_combat_phase_list;
		} else if (phase === 'Enemy Charge') {
			list = this.enemy_charge_phase_list;
		} else if (phase === 'Enemy Battleshock') {
			list = this.enemy_battleshock_phase_list;
		}

		let modal = this.modalCtrl.create(PhaseModalPage, {
			phase: list,
		}, {},
		);
		modal.onDidDismiss((refresh) => {
			if (refresh) {
				console.log('inside phases onDidDismiss')
			}
		});
		modal.present();
	}
}
