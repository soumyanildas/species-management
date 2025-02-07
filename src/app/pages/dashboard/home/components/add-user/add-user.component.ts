import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogContent } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from "../../../../../components/button/button.component";

@Component({
  selector: 'app-add-user',
  imports: [CommonModule, MatDialogContent, MatSelectModule, MatFormFieldModule, ButtonComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent { }
