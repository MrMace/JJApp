import { Component } from '@angular/core';
import {App, IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',




})
export class HomePage {



  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public menu:MenuController      ,public dataService: DataProvider) {
menu.enable(true);

  }

  ionViewDidLoad() {

  }

  goToExercises(){
    this.navCtrl.push('ExercisesPage');
  }

  goToFlows(){
    this.navCtrl.push('FlowsPage');
  }

    goToStretches(){
        this.navCtrl.push('StretchesPage');
    }

    goToWarmups(){
        this.navCtrl.push('WarmupsPage');
    }

}
