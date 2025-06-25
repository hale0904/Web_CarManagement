import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component ({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})

export class Home {
    headers = [
        { linkUrl: '/login', linkText: 'Đăng nhập'}
    ]
    
    footers = [
        {   
            nameShop: 'AUTO SHOP', 
            hotline: '📞 Hotline: 2274801030022',
            email: '✉️ Email: contactAutoShop@gmail.com',
            descrip: '⏰ Giờ làm việc: 08:00 - 20:00 (Thứ 2 - CN)',
            location: '45 Nguyễn Khắc Nhu, Quận 1, Thành phố Hồ Chí Minh ',
            year: '© 2023 AUTOSHOP VN. All rights reserved',
            license: 'Giấy phép kinh doanh số 0123456789 do Sở KHĐT TP.HCM cấp ngày 01/01/2023'
        }
    ]
}