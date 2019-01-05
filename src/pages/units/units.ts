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
	alarielle: boolean;
	tla: boolean;
	durthu: boolean;
	treelord: boolean;
	drycha: boolean;

	images = ['alarielle.jpg', 'tla.jpg', 'durthu.jpeg', 'treelord.jpg', 'drycha.jpeg', 'hunters.jpeg', 'branchwraith.jpeg', 'branchwych.jpeg', 'dryads.jpeg', 'tree_revenants.jpeg', 'spite_revenants.jpeg'];

	constructor(
		public modalCtrl: ModalController,
		public navCtrl: NavController,
		public navParams: NavParams,
		private unitsSvc: UnitsService,
		private viewCtrl: ViewController,
	) { }

	ngOnInit() {
		try {
			this.unitsSvc.getUnitsJSon().subscribe(result => {
				this.units = result;
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
		this.unitsSvc.update(this.unit.id, this.unit);
	}

	openStats(unit) {
		this.reset();
		console.log(unit.id, 'unit')
		this.stats = !this.stats;
		if (unit.id === 1) {
			this.alarielle = true;
		} else if (unit.id === 2) {
			this.tla = true;
		} else if (unit.id === 3) {
			this.durthu = true;
		} else if (unit.id === 4) {
			this.treelord = true;
		} else if (unit.id === 5) {
			this.drycha = true;
		}
	}

	reset() {
		this.alarielle = false;
		this.tla = false;
		this.durthu = false;
		this.treelord = false;
		this.drycha = false;
	}
}
