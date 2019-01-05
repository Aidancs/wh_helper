import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { PhaseModalPage } from '../../modals/phase-modal/phase-modal';
import { AbilitiesService } from '../../services/abilities.service';
import { CommandAbilitiesService } from '../../services/command-abilities.service';
import { MagicService } from '../../services/magic.service';
import { MeleeWeaponsService } from '../../services/melee-weapons.service';
import { MissleWeaponsService } from '../../services/missle-weapons.service';
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
		private abilitiesSvc: AbilitiesService,
		private commandAbilitiesSvc: CommandAbilitiesService,
		private magicSvc: MagicService,
		private meleeWeaponsSvc: MeleeWeaponsService,
		private missleWeaponsSvc: MissleWeaponsService,
		private unitsSvc: UnitsService,
	) { }

	ngOnInit() {
		// this.abilitiesSvc.getAbilitiesJSon().subscribe(result => {
		// 	console.log(result, 'abilitiesList')
		// });
		// this.commandAbilitiesSvc.getCommandAbilitiesJSon().subscribe(result => {
		// 	console.log(result, 'commandAbilitiesList')
		// });
		// this.magicSvc.getMagicJSon().subscribe(result => {
		// 	console.log(result, 'magicList')
		// });
		// this.missleWeaponsSvc.getMissleWeaponsJSon().subscribe(result => {
		// 	console.log(result, 'missleWeaponsList')
		// });
		// this.meleeWeaponsSvc.getMeleeWeaponsJSon().subscribe(result => {
		// 	console.log(result, 'meleeWeaponsList')
		// });
		this.phasesSvc.getPhasesJSon().subscribe(result => {
			this.phaseList = result;

			this.unitsSvc.getUnitsJSon().subscribe(result => {
				this.units = result;
				console.log(result, 'units')
			});

			for (const key of Object.keys(this.phaseList)) {
				this.phaseArray = this.phaseList[key].phases;

				for (let i = 0; i < this.phaseArray.length; ++i) {
					if (this.phaseArray[i].phase === 'hero') {
						this.hero_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'movement') {
						this.movement_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'shooting') {
						this.shooting_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'charge') {
						this.charge_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'combat') {
						this.combat_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'battleshock') {
						this.battleshock_phase_list.push(this.phaseArray[i]);
					} else if (this.phaseArray[i].phase === 'shooting/combat') {
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
