import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';

export const authGuard: CanActivateFn = (route, state) => {

  const supabaseService = inject(SupabaseService);
  const router = inject(Router);

  return supabaseService.retrieveSession().pipe(map((response) => {
    if (response?.data?.session) {
      if (state.url.includes('login')) {
        router.navigateByUrl('/dashboard/home');
      }
      return true;
    }
    if (state.url.includes('dashboard')) {
      router.navigateByUrl('/login');
      return false;
    }
    return true;
  }));
};
