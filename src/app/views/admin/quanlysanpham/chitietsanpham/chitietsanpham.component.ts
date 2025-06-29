import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

import { SanPham } from "~/app/core/model/admin/quanlysanpham.model";
import { ProductService } from "~/app/core/service/quanlysanpham.service";

@Component ({
    selector: 'app-chitietsanpham-admin',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './chitietsanpham.component.html',
    styleUrl: './chitietsanpham.component.css'
})

export class ChiTietSanPhamAdmin implements OnInit{
    sanpham?: SanPham;

    constructor (
        private route: ActivatedRoute,
        private productService: ProductService
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.productService.getProducts().subscribe((products) => {
                this.sanpham = products.find((p) => p.id === id);
            });
        }
    }
}