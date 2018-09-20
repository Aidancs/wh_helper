import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-units',
	templateUrl: 'units.html'
})
export class UnitsPage {


	icons: string[];
	items: Array<{ name: string, activated: string }>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		// If we navigated to this page, we will have an item available as a nav param

		// Let's populate this page with some filler content for funzies
		this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
			'american-football', 'boat', 'bluetooth', 'build'];

		this.items = [];
		for (let i = 1; i < this.icons.length; i++) {
			this.items.push({
				name: 'Item ' + i,
				activated: 'This is item #' + i,
			});
		}
	}

	itemTapped(event, item) {
		// here is where when it's tapped it can be enabled or disabled
	}
}
