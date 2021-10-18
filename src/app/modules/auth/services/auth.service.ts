import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ERRORS_CONST } from '@data/constants/errors/errors.const';
import { API_ROUTES } from '@data/constants/routes/api.routes';
import { INTERNAL_PATHS, INTERNAL_ROUTES } from '@data/constants/routes/internal.routes';
import { IApiUserAuthenticated } from '@data/interfaces/api/iuser.metadata';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public nameUserLS = 'currentUser';
  login$: Observable<any> = of();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {}

  get getUser(): IApiUserAuthenticated {
    return JSON.parse(localStorage.getItem(this.nameUserLS));
  }

  /**
   * Login method
   * @param data
   * @returns
   */
  login(
    data: { email: string; password: string }): Observable<{
    error: boolean;
    msg: string;
    data: any;
  }> {
    const response = { error: true, msg: ERRORS_CONST.LOGIN.ERROR, data: null };
    return this.login$ = new Observable(o => {
      const user: IApiUserAuthenticated = {
        name: data.email.split('@')[0],
        email: data.email,
        accessToken: data.email+Math.floor(Math.random() * 100) + 1,
      };
      response.msg = 'Success login';
      response.error = false;
      response.data = user;
      this.setUserToLocalStorage(response.data);
      if (!response.error) {
        this.router.navigate([INTERNAL_PATHS.USER_DEFAULT]);
      }
      o.next([response]);
    });
  }

  /**
   * Logout method
   */
    logout() {
      localStorage.removeItem(this.nameUserLS);
      this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
    }
  
    private setUserToLocalStorage(user: IApiUserAuthenticated) {
      localStorage.setItem(this.nameUserLS, JSON.stringify(user));
    }
}
