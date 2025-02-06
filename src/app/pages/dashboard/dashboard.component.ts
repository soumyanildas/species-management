import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent { }
