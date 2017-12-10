import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the StretchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stretches',
  templateUrl: 'stretches.html',
})
export class StretchesPage {
  stretches:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dataService: DataProvider) {
  this.stretches = this.dataService.stretchesList;
  }

    addStretch(): void {
        let prompt = this.alertCtrl.create({
            title: 'Add New Stretches',
            message: "Insert Information for new Stretches list.",
            inputs: [
                {
                    name: 'StretchName',
                    placeholder: 'Stretch Name'
                }, {
                    name: 'StretchDescription',
                    placeholder: 'Stretch Detail'
                }, {
                    name: 'StretchImgOrVid',
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
                        this.dataService.addNewStretch(data);

                    }
                }
            ]
        });
        prompt.present();
    }

    updateStretchDescription(stretch): void {
        let prompt = this.alertCtrl.create({
            title: 'Edit Stretch Details',
            message: "Add a new Stretch details",
            inputs: [
                {
                    name: 'StretchDescription',
                    value: stretch.StretchDescription
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
                        this.dataService.updateStretchDescription(stretch.id, data.StretchDescription);

                    }
                }
            ]
        });
        prompt.present();
    }


    deleteStretch(id): void {
        this.dataService.deleteStretch(id)
    }

}
