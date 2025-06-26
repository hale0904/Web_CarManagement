import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class DeviceGuard implements CanActivate {
    constructor (private router: Router) {}

    canActivate(): boolean {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            alert('Trang này không hỗ trợ trên thiết bị di động.');
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}