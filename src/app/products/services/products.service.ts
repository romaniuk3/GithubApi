import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, setDoc
} from '@angular/fire/firestore';
import {
  Storage,
  ref, uploadBytes, getDownloadURL
} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: Firestore,
              private storage: Storage
  ) { }

  public getAll() {
    const productsRef = collection(this.firestore, 'products');
    return collectionData(productsRef, {idField: 'id'}) as Observable<Product[]>;
  }

  public create(product: Product) {
    product = {...product, id: uuidv4()};
    const productRef  = collection(this.firestore, 'products');
    return addDoc(productRef, product);
  }

  public getById(id: string) {
    const productRef = doc(this.firestore, `products/${id}`);
    return docData(productRef, {idField: 'id'}) as Observable<Product>;
  }

  public update(product: Product) {
    const productRef = doc(this.firestore, `products/${product.id}`);
    return setDoc(productRef, product);
  }

  public delete(productId: string): Promise<any> {
    const productDocRef = doc(this.firestore, `products/${productId}`);
    return deleteDoc(productDocRef);
  }

  public uploadImage(file: File): Promise<any> {
    const fileName = `${file?.lastModified}`
    const storageRef = ref(this.storage, fileName);

    return uploadBytes(storageRef, file).then((snapshot) => {
      const fileRef = ref(this.storage, fileName);
      return getDownloadURL(fileRef);
    });
  }

}
