import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Help } from '../interfaces/help.interface';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(
    private router: Router,
    private firestore: Firestore  ) { }

  public async addDataTabla(help:Help): Promise<void>  {
    try {
      //  get a reference to the collection users in firestore
      const collectionInstance  = collection(this.firestore, 'helpers');

      //we call the method that will add us to the table
      await addDoc(collectionInstance,help)
      console.log('data has been added')
      //  go to route
      this.router.navigate(['/crud/table'])

    } catch (error) {
      console.log('there was an error', error)
    }
  }

  public async getDataForTable(id:string) {
    try {
      //  get reference to the specific document in the collection 'users'
      const docRef = doc(this.firestore, 'helpers', id)

      const docSnap = await getDoc(docRef)

      //  if there is no document, return null
      if(!docSnap){
        // console.log('document ')
        return null
      }

      if(docSnap.exists()){
        console.log('Document Data', docSnap.data())
        return {id: docSnap.id, ...docSnap.data()}

      } else {
        // console.log('Document not exist')
        return null;
      }

    } catch (error) {
      // console.log('Has a error', error)
      return null
    }
  }

  public async updateDataHelpForTable(id: string, help: any): Promise<void> {

    try {
      //  get reference to the specific document in the collection 'users'
      const docInstance = doc(this.firestore, 'helpers', id)
      //we call the method that will update us to the table
      await updateDoc(docInstance, help)
      console.log('data update')
      this.router.navigate(['/crud/table'])

    } catch (error) {
      // console.log('Has a error', error)
    }

  }

  public async deleteDataForTable(id: string){
    try {
      //  get reference to the specific document in the collection 'users'
      const docInstance = doc(this.firestore, 'helpers',id)
      //we call the method that will delete us to the table
      await deleteDoc(docInstance)
      this.router.navigate(['/crud/table'])

    } catch (error) {
      console.log('has a error', error)
    }
  }

}
