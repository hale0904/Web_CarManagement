import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component ({
    selector: 'app-header-a',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header-a.component.html',
    styleUrl: './header-a.component.css'
})

export class HeaderAdmin {
    headers = [
        { linkUrl: 'auth/login', linkText: 'Admin'}
    ]
}