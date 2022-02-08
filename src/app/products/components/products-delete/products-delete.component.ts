import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.scss']
})
export class ProductsDeleteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
    private productsService: ProductsService, private router: Router,
    public dialog: MatDialog) { }

  testFunc() {
    console.log('Test');
  }

  deleteElement() {

  }
  
  openDialog() {
    this.dialog.open(DeleteDialogComponent);
  }

  ngOnInit(): void {
    // Delete later !!! 

    // let answer = confirm('Are you sure you want to delete this product?');
    // if(answer) {
    //   this.activatedRoute.params.subscribe((params) => {
    //     const selectedId = params['product_id'];
    //     this.productsService.delete(Number(selectedId)).subscribe((result) => {
    //       if(!result) {
    //         return;
    //       }
    //       this.router.navigate(['../../all'], {relativeTo: this.activatedRoute});
    //     })
    //   })
    // }else {
    //   this.router.navigate(['../../all'], {relativeTo: this.activatedRoute});
    // }
  }

}
