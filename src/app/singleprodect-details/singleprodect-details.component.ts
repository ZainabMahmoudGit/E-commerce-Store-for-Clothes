
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singleprodect-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleprodect-details.component.html',
  styleUrl: './singleprodect-details.component.css'
})
export class SingleprodectDetailsComponent {
  productData:any
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: SharedService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    let productid = this.activatedRoute.snapshot.paramMap.get('productid');
    console.log(productid);
    this.productService.getSingleProduct(productid).subscribe((res) => {
      console.log(res);
      this.productData=res;
    });
  }
}
