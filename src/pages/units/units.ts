import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController } from 'ionic-angular';

import { UnitModalPage } from '../../modals/unit-modal/unit-modal';
import { UnitsService } from '../../services/units.service';

@Component({
	selector: 'page-units',
	templateUrl: 'units.html'
})
export class UnitsPage {

	units: any;
	unitsArray = [] as number[];
	unit: any;
	clicked: boolean = false;
	type: string;
	stats: boolean = false;
	displayImage: true;
	move: number;
	wounds: number;
	save: number;
	bravery: number;
	totalWounds: number;

	images = [];

	constructor(
		public modalCtrl: ModalController,
		public navCtrl: NavController,
		public navParams: NavParams,
		private unitsSvc: UnitsService,
		private viewCtrl: ViewController,
	) { }

	ngOnInit() {
		this.unitsSvc.getUnitsJSon().subscribe(result => {
			for (const key of Object.keys(result)) {
				this.unitsArray.push(result[key]);
			}
		});
	}

	itemTapped(unit, type) {
		this.clicked = true;
		this.unit = unit;
		this.type = type;
		let modal = this.modalCtrl.create(UnitModalPage, {
			unit: this.unit,
			type: this.type,
		}, {},
		);
		modal.onDidDismiss((refresh) => {
			if (refresh) {
				console.log('inside units.ts onDidDismiss')
			}
		});
		modal.present();
	}

	cancel() {
		this.viewCtrl.dismiss();
	}

	dead(unit) {
		this.unit = unit;
		this.unit.dead = true;
		this.unitsSvc.update(this.unit.id, this.unit);
	}
}
