import {Injectable} from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore'
import {Observable} from "rxjs/Observable";

export interface Flow {
    id?: string;
    FlowName: string;
    FlowImgOrVid: string;
    FlowDescription: string;

}

export interface Stretch {
    id?: string;
    StretchName: string;
    StretchImgOrVid: string;
    StretchDescription: string;

}

export interface Warmup {
    id?: string;
    WarmupName: string;
    WarmupImgOrVid: string;
    WarmupDescription: string;

}

export interface Exercise {
    id?: string;
    ExerciseName: string;
    ExerciseImgOrVid: string;
    ExerciseDescription: string;

}


@Injectable()
export class DataProvider {

    cardsListRef: AngularFirestoreCollection<any>;
    cardsList: Observable<any[]>;

    flowListRef: AngularFirestoreCollection<any>;
    flowList: Observable<any[]>;

    exerciseListRef: AngularFirestoreCollection<any>;
    exerciseList: Observable<any[]>;

    stretchesListRef: AngularFirestoreCollection<any>;
    stretchesList: Observable<any[]>;

    warmupsListRef: AngularFirestoreCollection<any>;
    warmupsList: Observable<any[]>;

    constructor(private afs: AngularFirestore) {
        this.cardsListRef = this.afs.collection('Cards');
        this.cardsList = this.cardsListRef.valueChanges();


        this.flowListRef = this.afs.collection('Flows');
        // this.flowList = this.flowListRef.valueChanges();
        this.flowList = this.flowListRef.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as Flow;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        });

        this.exerciseListRef = this.afs.collection('Exercises');
        // this.exerciseList = this.exerciseListRef.valueChanges();
        this.exerciseList = this.exerciseListRef.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as Exercise;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        });

        this.stretchesListRef = this.afs.collection('Stretches');
        // this.stretchesList = this.stretchesListRef.valueChanges();
        this.stretchesList = this.stretchesListRef.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as Stretch;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        });

        this.warmupsListRef = this.afs.collection('Warmups');
        // this.warmupsList = this.swarmupssListRef.valueChanges();
        this.warmupsList = this.warmupsListRef.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as Warmup;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        });
    }


    addNewFlow(flowInfo): void {
        if (flowInfo) {
            this.flowListRef.add(flowInfo);
        }
    }

    deleteFlow(flowID): void {
        this.flowListRef.doc(flowID).delete();
    }

    updateFlowDescription(flowID, newDescription): void {
        this.flowListRef.doc(flowID).update({"FlowDescription": newDescription})
    }


    addNewExercise(exerciseInfo): void {
        if (exerciseInfo) {
            this.exerciseListRef.add(exerciseInfo);
        }
    }

    deleteExercise(exerciseID): void {
        this.exerciseListRef.doc(exerciseID).delete();
    }

    updateExerciseDescription(exerciseID, newDescription): void {
        this.exerciseListRef.doc(exerciseID).update({"ExerciseDescription": newDescription})
    }

    addNewStretch(stretchInfo): void {
        if (stretchInfo) {
            this.stretchesListRef.add(stretchInfo);
        }
    }

    deleteStretch(stretchID): void {
        this.stretchesListRef.doc(stretchID).delete();
    }

    updateStretchDescription(stretchID, newDescription): void {
        this.stretchesListRef.doc(stretchID).update({"StretchDescription": newDescription})
    }

    addNewWarmup(warmupInfo): void {
        if (warmupInfo) {
            this.warmupsListRef.add(warmupInfo);
        }
    }

    deleteWarmup(warmupID): void {
        this.warmupsListRef.doc(warmupID).delete();
    }

    updateWarmupDescription(warmupID, newDescription): void {
        this.warmupsListRef.doc(warmupID).update({"WarmupDescription": newDescription})
    }


}
