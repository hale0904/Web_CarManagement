import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from '~/app/shared/components/quanlysanpham/card/card.component';
import { ProductCardModel } from '~/app/core/interface/admin/quanlysanpham/quanlysanpham.interface';
import { ProductService } from '~/app/core/service/quanlysanpham.service';
import { SanPham } from '~/app/core/model/admin/quanlysanpham.model';

@Component({
  selector: 'app-quanlysanpham-admin',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './quanlysanpham.component.html',
  styleUrl: './quanlysanpham.component.css',
})
export class QuanLySanPhamAdmin implements OnInit {
  products: ProductCardModel[] = [];
  filteredProducts: ProductCardModel[] = [];

  isSearchVisible = false;

  private _searchText = '';
  get searchText(): string {
    return this._searchText;
  }
  set searchText(value: string) {
    this._searchText = value;
    this.filterProducts();
  }

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
      this.filteredProducts = this.products;
    });
  }

  toggleSearch(): void {
    this.isSearchVisible = !this.isSearchVisible;
  }

  closeSearch(): void {
    this.isSearchVisible = false;
  }

  filterProducts(): void {
    this.filteredProducts = this.productService.filterProductCards(this._searchText, this.products);
  }

}
