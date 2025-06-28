import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component ({
    selector: 'app-btnUpdate-admin',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './button-update.component.html',
    styleUrl: './button-update.component.css'
})

export class btnUpdateQLSP {
}