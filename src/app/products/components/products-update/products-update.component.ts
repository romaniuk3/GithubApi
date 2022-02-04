import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutrients, Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.scss']
})
export class ProductsUpdateComponent implements OnInit {

  productForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    createdDate: [new Date(), Validators.required],
    expireDate: [new Date(), Validators.required],
    nutrients: [Nutrients.Carbohydrates, Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const productId = params['product_id'];
      console.log(productId);
      this.getProductById(Number(productId));
    })
  }

  getProductById(productId: number) {
    this.productsService.getById(productId)
      .subscribe((product) => {
        if(!product) {
          return;
        }

        this.updateForm(product);
      })
  }

  updateForm(product: Product) {
    console.log(product)
  }

}
