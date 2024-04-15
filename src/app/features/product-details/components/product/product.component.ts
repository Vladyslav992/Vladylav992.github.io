import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../../core/services/products/products.service';
import { Product } from '../../../../core/services/products/products.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    const productIdFromRoute = Number(
      this.route.snapshot.paramMap.get('productId')
    );

    this.product = this.productService.getProductById(productIdFromRoute);
  }

  getAverageRating(product: Product): number {
    let averageRating = 0;

    product.review.forEach((review) => {
      averageRating += review.rating;
    });
    averageRating = Math.ceil(averageRating / product.review.length);
    return averageRating;
  }
}
