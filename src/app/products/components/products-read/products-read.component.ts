import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.scss']
})
export class ProductsReadComponent implements OnInit {

  product?: Product;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const productId = params['product_id'];
      this.getProductById(Number(productId));
    })
  }

  getProductById(productId: number) {
    this.productsService.getById(productId).subscribe((product) => {
      if(!product) {
        return;
      }
      this.product = product;
    });    
  }
}