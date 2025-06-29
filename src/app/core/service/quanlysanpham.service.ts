import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SanPham } from '../model/admin/quanlysanpham.model';
import { ProductCardModel } from '../interface/admin/quanlysanpham/quanlysanpham.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts(): Observable<SanPham[]> {
    const products: SanPham[] = [
      new SanPham(
        'C001',
        'Hyundai Creta',
        'https://cdn.honda.com.vn/automobiles/August2024/hzd1qemWl8vHJt5MMDZC.png',
        'Công nghệ tiên tiến, hiện đại kết hợp giữa hệ thống truyền động và khối động cơ mạnh mẽ cùng hộp số tự động/hộp số ly hợp kép 8 cấp mang lại cảm giác vận hành êm ái, bền bỉ. Hyundai Creat còn được trang bị gói công nghệ an toàn chủ động tiên tiến Hyundai SMARTSENSE với nhiều cải tiến vượt trội giúp bạn luôn an tâm khi cầm lái.',
        1000000000,
        'Hyundai'
      ),
      new SanPham(
        'C002',
        'KIA Sorento 2025',
        'https://trungthucauto.vn/wp-content/uploads/2024/02/trang-2-1024x578.png',
        'Thiết kế thể thao',
        1500000000,
        'KIA'
      ),
      new SanPham(
        'C003',
        'Hyundai Palisade',
        'https://otohonda.com.vn/wp-content/uploads/crv.png',
        'Thiết kế hiện đại',
        50000000,
        'Hyundai'
      ),
      new SanPham(
        'C004',
        'Hyundai SantaFe',
        'https://showroomxe.com.vn/wp-content/uploads/2023/02/gia-xe-honda-crv-2023-showroomxe-com-vn.webp',
        'Động cơ mạnh mẽ',
        2000000000,
        'Hyundai'
      ),
    ];

    return of(products);
  }

  filterProductCards(query: string, list: ProductCardModel[]): ProductCardModel[] {
    const q = query.trim().toLowerCase();
    if (!q) return list;

    return list.filter(p =>
      p.idCar.toLowerCase().includes(q) ||
      p.title.toLowerCase().includes(q) ||
      p.company.toLowerCase().includes(q)
    );
  }
}