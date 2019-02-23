import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { PhaseModalPage } from '../../modals/phase-modal/phase-modal';
import { UnitsService } from '../../services/units.service';

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
				this.phaseArray.push(result[key].phases);
			}

			for (let i = 0; i < this.phaseArray.length; ++i) {
				for (let x = 0; x < this.phaseArray[i].length; ++x) {
					if (this.phaseArray[i][x].phase === 'hero') {
						this.hero_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'movement') {
						this.movement_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'shooting') {
						this.shooting_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'charge') {
						this.charge_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'combat') {
						this.combat_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'battleshock') {
						this.battleshock_phase_list.push(this.phaseArray[i][x]);
					} else if (this.phaseArray[i][x].phase === 'shooting/combat') {
						this.shooting_phase_list.push(this.phaseArray[i][x]);
						this.combat_phase_list.push(this.phaseArray[i][x]);
					}
				}
			}
		});
	}

	phaseTapped(phase) {
		let list = [];

		if (phase === 'Hero Phase') {
			list = this.hero_phase_list;
		} else if (phase === 'Movement Phase') {
			list = this.movement_phase_list;
		} else if (phase === 'Shooting Phase') {
			list = this.shooting_phase_list;
		} else if (phase === 'Charge Phase') {
			list = this.charge_phase_list;
		} else if (phase === 'Combat Phase') {
			list = this.combat_phase_list;
		} else if (phase === 'Battleshock Phase') {
			list = this.battleshock_phase_list;
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
