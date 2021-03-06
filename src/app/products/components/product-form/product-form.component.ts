import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product, Types } from '../../models/product.model';
import { DateFixPipe } from '../../pipes/date-fix.pipe';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges {

  @Input() product = new Product();
  @Output() onSubmitted = new EventEmitter();
  message: string = '';
  file?: File;
  isUpload: boolean = false;

  productForm: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private dateFix: DateFixPipe,
    private productsService: ProductsService
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
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }
  fixDate(date: any) {
    let formattedDate = this.dateFix.transform(date);
    return this.datePipe.transform(formattedDate, 'yyyy-MM-dd');
  }

  updateForm(product: Product) {
    this.productForm.patchValue({
      ...product,
      image: '',
      createdDate: this.fixDate(product.createdDate),
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

  setFile($event: any) {
    this.file = $event.target.files[0];
  }


  submit() {
    let product: Partial<Product>;
    if(this.file) {
      this.productsService.uploadImage(this.file).then((url) => {
        this.productForm.value.image = url;
        product = this.productForm.value;
        this.onSubmitted.emit(product);
      });
    } else {
      console.log('Upload file please');
    }
  }
}
