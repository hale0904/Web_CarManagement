import { Injectable } from '@angular/core';
import { SanPham } from '../model/admin/quanlysanpham.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts(): Observable<SanPham[]> {
    const products: SanPham[] = [
      new SanPham(
        'Hyundai Creta',
        'https://cdn.honda.com.vn/automobiles/August2024/hzd1qemWl8vHJt5MMDZC.png',
        'Thiết kế thể thao',
        1000000000,
        'Hyundai'
      ),
      new SanPham(
        'KIA Sorento 2025',
        'https://trungthucauto.vn/wp-content/uploads/2024/02/trang-2-1024x578.png',
        'Thiết kế thể thao',
        1500000000,
        'KIA'
      ),
      new SanPham(
        'Hyundai Palisade',
        'https://otohonda.com.vn/wp-content/uploads/crv.png',
        'Thiết kế hiện đại',
        50000000,
        'Hyundai'
      ),
      new SanPham(
        'Hyundai SantaFe',
        'https://showroomxe.com.vn/wp-content/uploads/2023/02/gia-xe-honda-crv-2023-showroomxe-com-vn.webp',
        'Động cơ mạnh mẽ',
        2000000000,
        'Hyundai'
      ),
      new SanPham(
        'WILD',
        'https://tiki.vn/blog/wp-content/uploads/2023/07/xe-dien-vinfast-thumb-1.jpg',
        'Thiết kế thể thao',
        1500000,
        'Vinfast'
      ),
    ];

    return of(products);
  }
}
