import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { PhaseModalPage } from '../../modals/phase-modal/phase-modal';
import { PhasesService } from '../../services/phases.service';
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
	units = [];

	constructor(
		private modalCtrl: ModalController,
		public navCtrl: NavController,
		private phasesSvc: PhasesService,
		private unitsSvc: UnitsService,
	) { }

	ngOnInit() {
		this.unitsSvc.getUnitsJSon().subscribe(result => {
			this.units = result;
		});
		this.phasesSvc.getPhasesJSon().subscribe(result => {
			this.phaseList = result;

			for (const key of Object.keys(this.phaseList)) {
				this.phaseArray = this.phaseList[key].phases;

				for (let i = 0; i < this.phaseArray.length; ++i) {
					if (this.phaseArray[i].phase === 'Hero') {
						this.hero_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'Movement') {
						this.movement_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'Shooting') {
						this.shooting_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'Charge') {
						this.charge_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'Combat') {
						this.combat_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'Battleshock') {
						this.battleshock_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'Shooting/Combat') {
						this.shooting_phase_list.push(this.phaseArray[i]);
						this.combat_phase_list.push(this.phaseArray[i]);
					}
				}
			}
		});
	}

	phaseTapped(phase) {
		console.log(phase, 'phase')
		console.log(this.units, 'this.units')
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
				console.log('inside onDidDismiss')
			}
		});
		modal.present();
	}
}
