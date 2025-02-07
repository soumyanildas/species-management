import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from "../../../components/button/button.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from '../home/components/add-user/add-user.component';
@Component({
  selector: 'app-alert-configuration',
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, ButtonComponent, MatDialogModule],
  templateUrl: './alert-configuration.component.html',
  styleUrl: './alert-configuration.component.scss',
})
export class AlertConfigurationComponent {

  constructor(
    private readonly dialog: MatDialog
  ) { }

  openModal() {
    this.dialog.open(AddUserComponent, {
      height: 'auto',
      width: '500px',
    });
  }

}
