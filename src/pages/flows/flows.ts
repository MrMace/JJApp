import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the FlowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-flows',
    templateUrl: 'flows.html',
})
export class FlowsPage {
    flows: any;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public dataService: DataProvider) {
        this.flows = this.dataService.flowList;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FlowsPage');
    }

    addFlow(): void {
        let prompt = this.alertCtrl.create({
            title: 'Add New Flow',
            message: "Insert Information for new Flow list.",
            inputs: [
                {
                    name: 'FlowName',
                    placeholder: 'Flow Name'
                }, {
                    name: 'FlowDescription',
                    placeholder: 'Flow Detail'
                }, {
                    name: 'FlowImgOrVid',
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
                        this.dataService.addNewFlow(data);

                    }
                }
            ]
        });
        prompt.present();
    }

    updateFlowDescription(flow): void {
        let prompt = this.alertCtrl.create({
            title: 'Edit Flow Details',
            message: "Add a new Flow details",
            inputs: [
                {
                    name: 'FlowDescription',
                    value: flow.FlowDescription
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
                        this.dataService.updateFlowDescription(flow.id, data.FlowDescription);

                    }
                }
            ]
        });
        prompt.present();
    }


    deleteFlow(id): void {
        this.dataService.deleteFlow(id)
    }
}
