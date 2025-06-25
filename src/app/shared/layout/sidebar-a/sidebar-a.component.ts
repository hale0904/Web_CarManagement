import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component ({
    selector: 'app-sidebar-a',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './sidebar-a.component.html',
    styleUrl: './sidebar-a.component.scss'
})

export class SidebarAdmin {
    sidebars = [
        {
            title: 'DANH SÁCH CHỨC NĂNG',
            items: [
            { link: 'products', linkText: 'Quản lý sản phẩm' },
            { link: 'customers', linkText: 'Quản lý khách hàng' },
            { link: 'orders', linkText: 'Quản lý đơn hàng' },
            { link: 'staffs', linkText: 'Quản lý nhân viên' },
            { link: 'statistics', linkText: 'Thống kê' }
            ]
        },
    ];

}