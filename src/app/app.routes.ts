import { Routes } from '@angular/router';

import { Home } from '@views/home/home.component';
import { Login } from './authentication/login/login.component';
import { HomeAdmin } from '@views/admin/home-admin/home-admin.component';
import { AuthGuard } from '@core/guard/auth.guard';

export const routes: Routes = [
    { path: '', component: Home, title: 'Car' },
    { path: 'auth/login', component: Login, title: 'Đăng nhập' },
    
    //Route of Admin
    { path: 'admin', component: HomeAdmin, canActivate: [AuthGuard], title: 'Trang chủ Admin'}

];
