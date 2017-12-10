import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the WarmupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-warmups',
  templateUrl: 'warmups.html',
})
export class WarmupsPage {
  
  warmups:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dataService: DataProvider) {
  this.warmups = this.dataService.warmupsList;
  }

    addWarmup(): void {
        let prompt = this.alertCtrl.create({
            title: 'Add New Warm Up',
            message: "Insert Information for new Warmups list.",
            inputs: [
                {
                    name: 'WarmupName',
                    placeholder: 'Warm up Name'
                }, {
                    name: 'WarmupDescription',
                    placeholder: 'Warm Up Detail'
                }, {
                    name: 'WarmupImgOrVid',
                    placeholder: 'Img Url'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');

                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        this.dataService.addNewWarmup(data);

                    }
                }
            ]
        });
        prompt.present();
    }

    updateWarmupDescription(warmup): void {
        let prompt = this.alertCtrl.create({
            title: 'Edit Warm Up Details',
            message: "Add a new Warm Up details",
            inputs: [
                {
                    name: 'WarmupDescription',
                    value: warmup.WarmupDescription
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');

                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        this.dataService.updateWarmupDescription(warmup.id, data.WarmupDescription);

                    }
                }
            ]
        });
        prompt.present();
    }


    deleteWarmup(id): void {
        this.dataService.deleteWarmup(id)
    }
  

}
