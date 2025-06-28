import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component ({
    selector: 'app-btnDelete-admin',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './button-delete.component.html',
    styleUrl: './button-delete.component.css'
})

export class btnDeleteQLSP {
}