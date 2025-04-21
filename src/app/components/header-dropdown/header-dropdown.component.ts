import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';

@Component({
  selector: 'app-header-dropdown',
  imports: [CommonModule, RouterModule],
  templateUrl: './header-dropdown.component.html',
  styleUrl: './header-dropdown.component.scss',
})
export class HeaderDropdownComponent {
  showMenu = false;

  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly router: Router
  ) { }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  signOut() {
    this.supabaseService.signOut()
      .subscribe(() => {
        this.router.navigate(['/auth']);
      })
  }
}
