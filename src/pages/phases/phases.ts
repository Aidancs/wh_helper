import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UnitService } from '../../services/unit.service';

@Component({
	selector: 'page-phases',
	templateUrl: 'phases.html'
})
export class PhasesPage {

	phases = ['Hero Phase', 'Movement Phase', 'Shooting Phase', 'Charge Phase', 'Combat Phase', 'Battleshock Phase'];

	constructor(
		public navCtrl: NavController,
		private unitSvc: UnitService,
	) { }

	ngOnInit() {

		try {
			this.unitSvc.getUnitJSon().subscribe(result => {
				for (var index = 0; index < result.length; ++index) {
					console.log(result[index], 'result')

				}
				// if (result.comms)
				// for (var index = 0; index < result.length; ++index) {
				// 	if (result[index].command_abilities !== 0) {
				// 		this.commandAbilitiesList.push(result[index].command_abilities);
				// 	}
				// 	for (var i = 0; i < result[index].abilities.length; ++i) {
				// 		if (result[index].abilities[i].phase === 'hero') {
				// 			this.heroList.push(result[index].abilities[i]);
				// 		} else if (result[index].abilities[i].phase === 'movement') {
				// 			this.movementList.push(result[index].abilities[i]);
				// 		} else if (result[index].abilities[i].phase === 'shooting') {
				// 			this.shootingList.push(result[index].abilities[i]);
				// 		} else if (result[index].abilities[i].phase === 'charge') {
				// 			this.chargeList.push(result[index].abilities[i]);
				// 		} else if (result[index].abilities[i].phase === 'combat') {
				// 			this.combatList.push(result[index].abilities[i]);
				// 		} else if (result[index].abilities[i].phase === 'battleshock') {
				// 			this.battleshockList.push(result[index].abilities[i]);
				// 		} else if (result[index].abilities[i].phase === 'shooting/combat') {
				// 			this.shootingList.push(result[index].abilities[i]);
				// 			this.combatList.push(result[index].abilities[i]);
				// 		}
				// 	}
				// }
			});

		} catch (e) {
			console.log("Profile" + e);
		}
	}
}
