import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product, Types } from '../../models/product.model';
import { DateFixPipe } from '../../pipes/date-fix.pipe';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges {

  @Input() product = new Product();
  @Output() onSubmitted = new EventEmitter();
  message: string = '';

  productForm: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private dateFix: DateFixPipe
  ) {
    this.initForm();
  }

  ngOnInit(): void {  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes && changes['product'] && this.product ) {
        this.updateForm(this.product);
      }
  }

  initForm() {
    this.productForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      createdDate: [new Date(), Validators.required],
      expireDate: [new Date(), Validators.required],
      proteins: [1.4, Validators.required],
      carbohydrates: [2.8, Validators.required],
      types: [Types.Groats, Validators.required],
      description: ['', Validators.required]
    });
  }

  fixDate(date: any) {
    let transformToDate = this.dateFix.transform(date);
    return this.datePipe.transform(transformToDate, 'yyyy-MM-dd');
  }

  updateForm(product: Product) {
    this.productForm.patchValue({
      ...product,
      createdDate:  this.fixDate(product.createdDate),
      expireDate: this.fixDate(product.expireDate)
    });
    this.message = 'The item was successfully updated';
  }

  get Types() {
    return Types;
  }

  showMessage() {
    if(this.message) {
      this.snackBar.open(this.message, 'Got it', {duration: 4000});
    }else {
      this.snackBar.open('The item was successfully added', 'Got it', {duration: 4000});
    }
  }

  submit() {
    const product: Partial<Product> = this.productForm.value;
    this.onSubmitted.emit(product);
  }
}
