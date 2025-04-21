import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { authGuard } from './auth.guard';
import { AuthService } from '../../services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../../environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        RouterTestingModule
      ],
      providers: [
        AuthService
      ]
    });
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  const mockRoute = {} as ActivatedRouteSnapshot;

  describe('authGuard', () => {
    it('should navigate to login when not authenticated and accessing dashboard', () => {
      const state = {
        url: '/dashboard'
      } as RouterStateSnapshot;
      jest.spyOn(authService, 'authState').mockReturnValue(of(null));
      const spy = jest.spyOn(router, 'navigateByUrl');
      (executeGuard(mockRoute, state) as Observable<boolean>).subscribe(() => {
        expect(spy).toHaveBeenCalledWith('/login');
      })
    });

    it('should navigate to login when not authenticated and accessing login', () => {
      const state = {
        url: '/login'
      } as RouterStateSnapshot;
      jest.spyOn(authService, 'authState').mockReturnValue(of(null));
      const spy = jest.spyOn(router, 'navigateByUrl');
      (executeGuard(mockRoute, state) as Observable<boolean>).subscribe(() => {
        expect(executeGuard).toBeTruthy();
      })
    });

    it('should navigate to dashboard when authenticated and accessing login', () => {
      const state = {
        url: '/login'
      } as RouterStateSnapshot;
      const mockUser = {
        uid: 'wZgSMOHmUybFBdE1x4AHl11EU603',
        email: 'soumyanil666@gmail.com',
        emailVerified: false,
        isAnonymous: false,
        providerData: [
          {
            providerId: 'password',
            uid: 'soumyanil666@gmail.com',
            displayName: null,
            email: 'soumyanil666@gmail.com',
            phoneNumber: null,
            photoURL: null,
          },
        ],
        createdAt: '1692632807731',
        lastLoginAt: '1694088817561',
        apiKey: 'AIzaSyDK23NkuTKt_BmtdAM9Fdg8e_9IJz9bxb4',
        appName: '[DEFAULT]',
      };
      jest.spyOn(authService, 'authState').mockReturnValue(of(mockUser));
      const spy = jest.spyOn(router, 'navigateByUrl');
      (executeGuard(mockRoute, state) as Observable<boolean>).subscribe(() => {
        expect(spy).toHaveBeenCalledWith('/dashboard');
      })
    });

    it('should navigate to dashboard when authenticated and accessing dashboard', () => {
      const state = {
        url: '/dashboard'
      } as RouterStateSnapshot;
      const mockUser = {
        uid: 'wZgSMOHmUybFBdE1x4AHl11EU603',
        email: 'soumyanil666@gmail.com',
        emailVerified: false,
        isAnonymous: false,
        providerData: [
          {
            providerId: 'password',
            uid: 'soumyanil666@gmail.com',
            displayName: null,
            email: 'soumyanil666@gmail.com',
            phoneNumber: null,
            photoURL: null,
          },
        ],
        createdAt: '1692632807731',
        lastLoginAt: '1694088817561',
        apiKey: 'AIzaSyDK23NkuTKt_BmtdAM9Fdg8e_9IJz9bxb4',
        appName: '[DEFAULT]',
      };
      jest.spyOn(authService, 'authState').mockReturnValue(of(mockUser));
      const spy = jest.spyOn(router, 'navigateByUrl');
      (executeGuard(mockRoute, state) as Observable<boolean>).subscribe(() => {
        expect(executeGuard).toBeTruthy();
      })
    });
  });

});
