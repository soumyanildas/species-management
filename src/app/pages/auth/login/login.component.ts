import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  loginForm!: FormGroup;
  isSubmit = false;

  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly toastrService: ToastrService,
    private readonly locationService: LocationService
  ) {
    this.supabaseService.retrieveSession();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  login() {
    this.isSubmit = true;
    if (!this.loginForm.valid) {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        }
      });
      this.isSubmit = false;
    } else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.supabaseService.signInWithPassword(email, password)
        .subscribe({
          next: (response) => {
            if (response.error) {
              this.toastrService.error(response.error.message);
            } else {
              this.router.navigate(['/dashboard']);
            }
            this.isSubmit = false;
          }, error: (error) => {
            this.toastrService.error(error?.message || 'Something went wrong.');
            this.isSubmit = true;
          }
        });
    }
  }

  saveDetails() {
    // save location details
  }

}
