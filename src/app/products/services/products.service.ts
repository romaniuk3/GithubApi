import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [];

  constructor() {
    this.init();
  }

  public init() {
    const product1 = new Product({id: 1, name: 'Bread'});
    const product2 = new Product({id: 2, name: 'Tea'});
    const product3 = new Product({id: 3, name: 'Meat'});

    this.create(product1).subscribe();
    this.create(product2).subscribe();
    this.create(product3).subscribe();
  }

  public getAll() {
    return of(this.products);
  }

  public create(product: Product): Observable<Product> {
    if(!product) {
      return product || undefined;
    }    
    this.products.push(product);
    return of(product)
  }

  public getById(productId: number): Observable<Product | undefined> {
    // if(!productId || !this.products.length) {
    //   return undefined;
    // }
    const selectedProduct = this.products.find((product: Product) => product.id === productId);
    return of(selectedProduct);
  }

  public update(product: Product): Observable<Product | undefined> {
    // if(!product || !product.id) {
    //   return undefined;
    // }
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
