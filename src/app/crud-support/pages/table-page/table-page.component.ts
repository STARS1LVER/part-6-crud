import { Component } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent {
    // properties
    public dataForTable!: Observable<any>
    public isLoading: boolean = false

    constructor(
      private firestore: Firestore,){
        this.getDataForTable()
      }


    public getDataForTable(): void {

      this.isLoading = true;

      // * get reference to the collection users in firestore
      const collectionInstance = collection(this.firestore, 'helpers')

      // * suscribe to changes in the collection using collectionData
      collectionData( collectionInstance, {idField: 'id'} )
      .subscribe( value => {
        console.log(value)
      })

      setTimeout(()=>{
        // * assing the collection data to the property
        this.dataForTable = collectionData( collectionInstance, {idField: 'id'} )
        this.isLoading = false
      },1500)

    }

}
