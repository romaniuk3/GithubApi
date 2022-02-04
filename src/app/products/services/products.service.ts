import { Injectable } from '@angular/core';
import { Nutrients, Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [];

  private productId: number = 1;

  constructor() {
    this.init();
  }

  public init() {
    const product1 = new Product({name: 'Bread', createdDate: new Date(), expireDate: new Date(), proteins: Nutrients.Proteins, carbohydrates: Nutrients.Carbohydrates, description: 'Healthy product'});
    const product2 = new Product({ name: 'Milk', createdDate: new Date(), expireDate: new Date(), proteins: Nutrients.Proteins, carbohydrates: Nutrients.Carbohydrates, description: 'Healthy product'});
    const product3 = new Product({name: 'Tea', createdDate: new Date(), expireDate: new Date(), proteins: Nutrients.Proteins, carbohydrates: Nutrients.Carbohydrates, description: 'Healthy product'});

    this.create(product1).subscribe();
    this.create(product2).subscribe();
    this.create(product3).subscribe();
  }

  public getAll() {
    return of(this.products);
  }

  public create(product: Product): Observable<Product | undefined> {
    product = {...product, id: this.productId};
    this.productId++;
    if(!product) {
      return of(undefined);
    }    
    this.products.push(product);
    return of(product);
  }

  public getById(productId: number): Observable<Product | undefined> {
    if(!productId || !this.products.length) {
      return of(undefined);
    }
    const selectedProduct = this.products.find((product: Product) => product.id === productId);
    return of(selectedProduct);
  }

  public update(product: Product): Observable<Product | undefined> {
    if(!product || !product.id) {
      return of(undefined);
    }

    const selectedProduct = this.products.findIndex((p: Product) => p.id === product.id);
    this.products[selectedProduct] = product;

    return of(product);
  }

  public delete(productId: number): Observable<boolean> {
    if(!productId) {
      return of(false);
    }
    this.products = this.products.filter((p: Product) => p.id !== productId);
    return of(true);
  }
}
