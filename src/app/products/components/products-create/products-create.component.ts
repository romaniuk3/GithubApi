import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Types } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  get Types() {
    return Types;
  }


  createProduct(product: Product) {
    this.productsService.create(product).then(() => this.router.navigate(['../'], {relativeTo: this.activatedRoute}));
  }
}
