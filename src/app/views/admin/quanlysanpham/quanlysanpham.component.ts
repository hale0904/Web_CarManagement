import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from '~/app/shared/components/quanlysanpham/card/card.component';
import { ProductCardModel } from '~/app/core/interface/admin/quanlysanpham/quanlysanpham.interface';
import { ProductService } from '~/app/core/service/quanlysanpham.service';
import { SanPham } from '~/app/core/model/admin/quanlysanpham.model';

@Component({
  selector: 'app-quanlysanpham-admin',
  standalone: true,
  imports: [RouterModule, CommonModule, ProductCardComponent],
  templateUrl: './quanlysanpham.component.html',
  styleUrl: './quanlysanpham.component.css',
})
export class QuanLySanPhamAdmin implements OnInit {
  products: ProductCardModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: SanPham[]) => {
      this.products = data.map((sp) => ({
        linkItem: 'detailProduct',
        idCar: sp.id,
        title: sp.nameCar,
        imageUrl: sp.imgCar,
        company: sp.company,
        links: [
          { linkBtn: 'updateProduct', linkText: 'Cập nhật' },
          { linkBtn: 'deleteProduct', linkText: 'Xóa' },
        ],
      }));
    });
  }
}
