import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  isSubmit = false;

  forgotPasswordForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly supabaseService: SupabaseService,
    private readonly toastrService: ToastrService
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  resetPassword() {
    this.isSubmit = true;
    if (!this.forgotPasswordForm.valid) {
      Object.keys(this.forgotPasswordForm.controls).forEach(field => {
        const control = this.forgotPasswordForm.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        }
      });
      this.isSubmit = false;
    } else {
      const email = this.forgotPasswordForm.value.email;
      this.supabaseService.sendResetPassword(email)
        .subscribe({
          next: () => {
            this.isSubmit = false;
            this.toastrService.success('Reset password email sent');
            this.forgotPasswordForm.reset();
          }, error: (error) => {
            this.isSubmit = false;
            this.toastrService.error(error.message ?? 'Something went wrong');
          }
        });
    }
  }

}
