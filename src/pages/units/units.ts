import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController } from 'ionic-angular';

import { UnitModalPage } from '../../modals/unit-modal/unit-modal';
import { UnitService } from '../../services/unit.service';

@Component({
	selector: 'page-units',
	templateUrl: 'units.html'
})
export class UnitsPage {

	units: any;
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

	images = ['alarielle.jpg', 'tla.jpg', 'durthu.jpeg', 'treelord.jpg', 'drycha.jpeg', 'hunters.jpeg', 'branchwraith.jpeg', 'branchwych.jpeg', 'dryads.jpeg', 'tree_revenants.jpeg', 'spite_revenants.jpeg'];

	constructor(
		public modalCtrl: ModalController,
		public navCtrl: NavController,
		public navParams: NavParams,
		private unitSvc: UnitService,
		private viewCtrl: ViewController,
	) { }

	ngOnInit() {
		try {
			this.unitSvc.getUnitJSon().subscribe(result => {
				this.units = result;
				console.log(this.units, 'this.units in UnitsPage')
			});

		} catch (e) {
			console.log("Profile" + e);
		}
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
				console.log('inside onDidDismiss')
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
	}

	openStats() {
		this.stats = !this.stats;
	}
}
