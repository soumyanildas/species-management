import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../../../components/table/table.component";
import { CalendarInputComponent } from "../../../components/calendar-input/calendar-input.component";
import { SelectInputComponent } from "../../../components/select-input/select-input.component";
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, TableComponent, CalendarInputComponent, SelectInputComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
