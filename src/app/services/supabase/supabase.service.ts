import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

  /**
   * Login user with email and password
   *
   * @param email email of the user
   * @param password password of the user
   * @returns Observable
   */
  signInWithPassword(email: string, password: string) {
    return from(this.supabase.auth.signInWithPassword({
      email,
      password,
    }));
  }

  /**
   * Returns current session
   *
   * @returns Observable
   */
  retrieveSession() {
    return from(this.supabase.auth.getSession());
  }

  /**
   * Signs out user from current session
   *
   * @returns Observable
   */
  signOut() {
    return from(this.supabase.auth.signOut());
  }

  sendResetPassword(email: string) {
    return from(this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:4200/auth/reset-password', // TODO: Temporary
    }));
  }

  resetPassword(email: string, password: string) {
    return from(this.supabase.auth.updateUser({
      email,
      password
    }));
  }


}