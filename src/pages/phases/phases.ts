import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { PhaseModalPage } from '../../modals/phase-modal/phase-modal';
import { PhaseService } from '../../services/phases.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
	selector: 'page-phases',
	templateUrl: 'phases.html'
})
export class PhasesPage {

	phases = ['Hero Phase', 'Movement Phase', 'Shooting Phase', 'Charge Phase', 'Combat Phase', 'Battleshock Phase'];

	hero_phase_list = [];
	movement_phase_list = [];
	shooting_phase_list = [];
	charge_phase_list = [];
	combat_phase_list = [];
	battleshock_phase_list = [];
	phaseList = [];

	constructor(
		private modalCtrl: ModalController,
		public navCtrl: NavController,
		private phaseSvc: PhaseService,
	) { }

	ngOnInit() {
		this.phaseSvc.getPhasesJSon().subscribe(result => {
			// console.log(result[0].phase[0], 'result[0].phase[0]');

			// for (let i = 0; i < result.length; ++i) {
			// 	if (result[0].phase[0], 'result[0].phase[0]' === ) {

			// 	}
			// }

			this.phaseList = result;

			for (var prop in this.phaseList) {
				console.log(prop, 'prop')

			}
			// for (var key in this.phaseList) {
			// 	if (this.phaseList.hasOwnProperty(key)) {
			// 		console.log(key + " -> " + this.phaseList[key]);
			// 	}
			// }
			// console.log(this.phaseList, 'phaseList')
			// for (let i = 0; i < this.phaseList.length; ++i) {
			// 	console.log(this.phaseList[i].phase, 'blurg')
			// 	if (this.phaseList[i].phase === 'hero') {
			// 		this.hero_phase_list.push(this.phaseList[i]);
			// 	} else if (this.phaseList[i].phase === 'movement') {
			// 		this.movement_phase_list.push(this.phaseList[i]);
			// 	} else if (this.phaseList[i].phase === 'shooting') {
			// 		this.shooting_phase_list.push(this.phaseList[i]);
			// 	} else if (this.phaseList[i].phase === 'charge') {
			// 		this.charge_phase_list.push(this.phaseList[i]);
			// 	} else if (this.phaseList[i].phase === 'combat') {
			// 		this.combat_phase_list.push(this.phaseList[i]);
			// 	} else if (this.phaseList[i].phase === 'battleshock') {
			// 		this.battleshock_phase_list.push(this.phaseList[i]);
			// 	} else if (this.phaseList[i].phase === 'shooting/combat') {
			// 		this.shooting_phase_list.push(this.phaseList[i]);
			// 		this.combat_phase_list.push(this.phaseList[i]);
			// 	}
			// }
		});
	}

	phaseTapped(phase) {
		let list = [];
		let phase_name: string;

		if (phase === 'Hero Phase') {
			list = this.hero_phase_list;
			phase_name = 'hero';
		} else if (phase === 'Movement Phase') {
			list = this.movement_phase_list;
			phase_name = 'movement';
		} else if (phase === 'Shooting Phase') {
			list = this.shooting_phase_list;
			phase_name = 'shooting';
		} else if (phase === 'Charge Phase') {
			list = this.charge_phase_list;
			phase_name = 'charge';
		} else if (phase === 'Combat Phase') {
			list = this.combat_phase_list;
			phase_name = 'combat';
		} else if (phase === 'Battleshock Phase') {
			list = this.battleshock_phase_list;
			phase_name = 'battleshock';
		}

		let modal = this.modalCtrl.create(PhaseModalPage, {
			phase: list,
			phase_name: phase_name
		}, {},
		);
		modal.onDidDismiss((refresh) => {
			if (refresh) {
				console.log('inside onDidDismiss')
			}
		});
		modal.present();
	}
}
