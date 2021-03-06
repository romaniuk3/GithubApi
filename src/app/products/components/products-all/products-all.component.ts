import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.scss']
})
export class ProductsAllComponent implements OnInit {

  products: Product[] = [];
  showLoading: boolean = true;

  constructor(private productsService: ProductsService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAll().subscribe((res: Product[]) => {
      this.products = res;
      this.showLoading = false;
    });
  }

  deleteProduct(product: Product) {
    const deleteModalRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        productId: product.id
      }
    });

    deleteModalRef.afterClosed().subscribe((result) => {
      if (result){
        this.productsService.delete(result).then(() => {
          this.getProducts();
        });
      }
    });
  }
}