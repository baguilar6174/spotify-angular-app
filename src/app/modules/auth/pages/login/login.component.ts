import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthService,
  ) 
  // private cookie: CookieService,
  // private router: Router
  {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  sendLogin(): void {
    this.authService
      .login(this.formLogin.value)
      //TODO: 200 <400
      .subscribe(
        (responseOk) => {
          //TODO: Cuando el usuario credenciales Correctas ✔✔
          console.log('Session iniciada correcta', responseOk);
          // const { tokenSession, data } = responseOk;
          // this.cookie.set('token', tokenSession, 4, '/'); //TODO:📌📌📌📌
          // this.router.navigate(['/', 'tracks']);
        },
        (err) => {
          //TODO error 400>=
          this.errorSession = true;
          console.log('⚠⚠⚠⚠Ocurrio error con tu email o password');
        }
      );
  }
}
