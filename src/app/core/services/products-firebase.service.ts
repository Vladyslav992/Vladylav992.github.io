import {Injectable} from '@angular/core';
import {ProductsService} from "@app/core/services/products/products.service";
import {collection, doc, setDoc} from "firebase/firestore";
import {db} from "../../../firebase.config";
import {collectionData, docData} from 'rxfire/firestore';
import {Product} from "@app/shared/interfaces/products.interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductsFirebaseService {
  constructor(private productService: ProductsService) {
  }

  addProductToFirebase(product: Product) {
    const productRef = doc(db, 'bikes', product.id.toString());
    setDoc(productRef, product, {merge: true});
  }

  getProductsFromFirebase(): Observable<Product[]> {
    const collectionRef = collection(db, 'bikes');
    return collectionData(collectionRef) as Observable<Product[]>
  }

  getProductByIdFromFirebase(id: number): Observable<Product> {
    const productRef = doc(db, 'bikes', id.toString());
    return docData(productRef) as Observable<Product>;
  }

}
