import { Component } from "@angular/core";
import { Layout } from "@shared/layout/layout.component";

@Component ({
    selector: 'app-home-admin',
    standalone: true,
    imports: [Layout],
    templateUrl: './home-admin.component.html',
    styleUrl: './home-admin.component.scss'
})

export class HomeAdmin {}