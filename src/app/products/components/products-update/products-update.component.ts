import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  productForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    createdDate: [new Date(), Validators.required],
    expireDate: [new Date(), Validators.required],
    proteins: [50, Validators.required],
    carbohydrates: [50, Validators.required],
    types: [Types.Groats, Validators.required],
    description: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const productId = params['product_id'];
      this.getProductById(Number(productId));
    })
  }

  showMessage() {
    this.snackBar.open('The item was successfully updated', 'Got it', {duration: 4000});
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
    this.productForm.patchValue({
      ...product,
      createdDate: this.datePipe.transform(product.createdDate, 'yyyy-MM-dd'),
      expireDate: this.datePipe.transform(product.expireDate, 'yyyy-MM-dd')
    });
  }

  updateProduct() {
    const formValues = this.productForm.value;

    this.productsService.update(formValues).subscribe((result) => {
      
      if(result) {
        this.router.navigate(['../../all'], {relativeTo: this.activatedRoute});
      }
    })
  }

  get Types() {
    return Types;
  }

}
