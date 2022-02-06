import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Types } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {

  productForm = this.fb.group({
    name: ['', Validators.required],
    createdDate: [new Date(), Validators.required],
    expireDate: [new Date(), Validators.required],
    proteins: [1.4, Validators.required],
    carbohydrates: [2.8, Validators.required],
    types: [Types.Groats, Validators.required],
    description: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder, 
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  get Types() {
    return Types;
  }

  showMessage() {
    this.snackBar.open('The item was successfully added', 'Got it', {duration: 4000});
  }

  createProduct() {
    let newProduct = this.productForm.value;
    this.productsService.create(newProduct).subscribe((result) => {
      if(result) {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    })
  }
}
