import { Routes } from '@angular/router';

import { Home } from '@views/home/home.component';
import { Login } from './authentication/login/login.component';
import { AuthGuard } from '@core/guard/auth.guard';
import { QuanLySanPhamAdmin } from './views/admin/quanlysanpham/quanlysanpham.component';
import { QuanLyKhachHangAdmin } from './views/admin/quanlykhachhang/quanlykhachhang.component';
import { DeviceGuard } from '@core/guard/device.guard';
import { HomeAdmin } from './views/admin/home-admin/home-admin.component';
import { Layout } from './shared/layout/layout.component';

export const routes: Routes = [
    { path: '', component: Home, title: 'Car' },
    { path: 'auth/login', component: Login, title: 'Đăng nhập' },
    
    //Route of Admin
    {
        path: 'admin',
        component: Layout,
        canActivate: [AuthGuard, DeviceGuard], 
        title: 'Trang chủ Admin',
        children: [
            { path: '', component: HomeAdmin, title: 'Trang chủ admin'},
            { path: 'products', component: QuanLySanPhamAdmin, title: 'Quản lý sản phẩm'},
            { path: 'customers', component: QuanLyKhachHangAdmin, title: 'Quản lý khách hàng'}
        ]
    }
];
