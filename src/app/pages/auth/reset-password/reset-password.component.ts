import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-reset-password',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  isSubmit = false;

  resetPasswordForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly supabaseService: SupabaseService,
    private readonly toastrService: ToastrService
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  resetPassword() {
    this.isSubmit = true;
    if (!this.resetPasswordForm.valid) {
      Object.keys(this.resetPasswordForm.controls).forEach(field => {
        const control = this.resetPasswordForm.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        }
      });
      this.isSubmit = false;
    } else {
      const params = new URLSearchParams(window.location.search);
      const accessToken = params.get('access_token');
      console.log('🚀 ~ ResetPasswordComponent ~ resetPassword ~ accessToken:', accessToken);
      if (!accessToken) {
        this.isSubmit = false;
        return;
      }
      const decoded: any = jwtDecode(accessToken);
      const password = this.resetPasswordForm.value.password;
      this.supabaseService.resetPassword(decoded.email, password)
        .subscribe({
          next: (response) => {
            console.log('🚀 ~ ResetPasswordComponent ~ resetPassword ~ response:', response);
            this.isSubmit = false;
            // this.toastrService.success('Reset password email sent');
            this.resetPasswordForm.reset();
            this.isSubmit = false;
          }, error: (error) => {
            this.isSubmit = false;
            this.toastrService.error(error.message ?? 'Something went wrong');
          }
        });
    }
  }
}

