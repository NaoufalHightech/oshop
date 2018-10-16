import { ProductService } from './../../product.service';
import { Observable } from 'rxjs/Rx';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$: Observable<any[]>;

  constructor(private categoryService: CategoryService, private productService: ProductService) {
  }

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories()
  }

  save(product) {
    this.productService.create(product);
  }
}
