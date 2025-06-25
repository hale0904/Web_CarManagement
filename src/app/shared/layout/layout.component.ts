import { Component } from "@angular/core";
import { HeaderAdmin } from "./header-a/header-a.component";

@Component ({
    selector: 'app-layout',
    standalone: true,
    imports: [HeaderAdmin],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})

export class Layout {}