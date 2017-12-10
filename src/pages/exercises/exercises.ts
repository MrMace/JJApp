import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the ExercisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html',
})
export class ExercisesPage {
  exercises:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dataService: DataProvider) {
 
    this.exercises = this.dataService.exerciseList;
    
  }


    addExercise(): void {
        let prompt = this.alertCtrl.create({
            title: 'Add New Exercises',
            message: "Insert Information for new Exercises list.",
            inputs: [
                {
                    name: 'ExerciseName',
                    placeholder: 'Exercise Name'
                }, {
                    name: 'ExerciseDescription',
                    placeholder: 'Exercise Detail'
                }, {
                    name: 'ExerciseImgOrVid',
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
                        this.dataService.addNewExercise(data);

                    }
                }
            ]
        });
        prompt.present();
    }

    updateExerciseDescription(exercise): void {
        let prompt = this.alertCtrl.create({
            title: 'Edit Exercise Details',
            message: "Add a new Exercise details",
            inputs: [
                {
                    name: 'ExerciseDescription',
                    value: exercise.ExerciseDescription
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
                        this.dataService.updateExerciseDescription(exercise.id, data.ExerciseDescription);

                    }
                }
            ]
        });
        prompt.present();
    }


    deleteExercise(id): void {
        this.dataService.deleteExercise(id)
    }

}
