import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Component, Input } from "@angular/core";
import { ProductCardModel } from "~/app/core/interface/admin/quanlysanpham/quanlysanpham.interface";

@Component ({
    selector: 'app-product-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})

export class ProductCardComponent  {
    @Input() product!: ProductCardModel;
}