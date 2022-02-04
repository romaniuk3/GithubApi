import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.scss']
})
export class ProductsDeleteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
    private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const selectedId = params['product_id'];
      this.productsService.delete(Number(selectedId)).subscribe((result) => {
        if(!result) {
          return;
        }
        this.router.navigate(['../../all'], {relativeTo: this.activatedRoute});
      })
    })
  }

}
