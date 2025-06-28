import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderAdmin } from "./header-a/header-a.component";
import { SidebarAdmin } from "./sidebar-a/sidebar-a.component";

@Component ({
    selector: 'app-layout',
    standalone: true,
    imports: [HeaderAdmin, SidebarAdmin, RouterOutlet],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css'
})

export class Layout {}