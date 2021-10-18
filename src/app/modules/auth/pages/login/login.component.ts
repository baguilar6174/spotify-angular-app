import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  
  public error: boolean = false;
  public errorMsg: string;

  formLogin: FormGroup = new FormGroup({});
  public listObservers$: Array<Subscription> = []

  constructor(
    private authService: AuthService,
  ){}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('test@test.com', [Validators.required, Validators.email]),
      password: new FormControl('123456', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  sendLogin(): void {
    const observer$ = this.authService.login(this.formLogin.value).subscribe(r => {
      if (!r.data) {
        // console.log(r);
      }else{
        this.formLogin.reset();
      }
    });
    this.listObservers$ = [observer$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }
}
