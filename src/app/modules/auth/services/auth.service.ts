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

  public currentUser: BehaviorSubject<IApiUserAuthenticated>;
  // public userData: Observable<IApiUserAuthenticated>;
  public nameUserLS = 'currentUser';
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {}

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
    return this.httpClient.post<IApiUserAuthenticated>(API_ROUTES.AUTH.LOGIN, data)
      .pipe(
        map((r) => {
          response.msg = 'Success login';
          response.error = false;
          response.data = r;
          this.setUserToLocalStorage(response.data);
          this.currentUser.next(r);
          if (!response.error) {
            this.router.navigate([INTERNAL_PATHS.USER_DEFAULT]);
          }
          return response;
        }),
        catchError((e) => {
          // console.log(e);
          response.msg = e.error.message;
          return of(response);
        })
      );
  }

  /**
   * Logout method
   */
    logout() {
      localStorage.removeItem(this.nameUserLS);
      this.currentUser.next(null);
      this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
    }
  
    private setUserToLocalStorage(user: IApiUserAuthenticated) {
      localStorage.setItem(this.nameUserLS, JSON.stringify(user));
    }
}
