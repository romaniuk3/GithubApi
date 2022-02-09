import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Types } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.scss']
})
export class ProductsUpdateComponent implements OnInit {

  product!: Product;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const productId = params['product_id'];
      this.getProductById(productId);
    })
  }

  showMessage() {
    this.snackBar.open('The item was successfully updated', 'Got it', {duration: 4000});
  }

  getProductById(productId: string) {
    this.productsService.getById(productId)
      .subscribe((product) => {
        if(!product) {
          return;
        }

        this.product = product;
      })
  }

  updateProduct(product: Product) {
    this.productsService.update(product).then(() => {
      this.router.navigate(['../../all'], {relativeTo: this.activatedRoute});
    });
  }

  get Types() {
    return Types;
  }

}