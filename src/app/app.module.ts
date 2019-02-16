import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { PhasesPage } from '../pages/phases/phases';
import { UnitsPage } from '../pages/units/units';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// services
import { PhasesService } from '../services/phases.service';
import { UnitsService } from '../services/units.service';

import { PhaseModalPage } from '../modals/phase-modal/phase-modal';
import { UnitModalPage } from '../modals/unit-modal/unit-modal';

@NgModule({
	declarations: [
		MyApp,
		PhasesPage,
		UnitsPage,
		PhaseModalPage,
		UnitModalPage,
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		PhasesPage,
		UnitsPage,
		PhaseModalPage,
		UnitModalPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		PhasesService,
		UnitsService,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
