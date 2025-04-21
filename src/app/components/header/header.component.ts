import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderDropdownComponent } from "../header-dropdown/header-dropdown.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, HeaderDropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
}
