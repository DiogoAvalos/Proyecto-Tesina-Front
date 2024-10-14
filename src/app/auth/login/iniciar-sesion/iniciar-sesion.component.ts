import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SweetAlertService } from '../../services/sweetAlertService.service';
import { LoginService } from '../../services/login.service';
import { catchError, of, tap } from 'rxjs';
import { Token } from '../../interfaces/usuario';
import { LocalStorageService } from '../../services/localStorageService.service';

@Component({
  standalone: true,
  imports: [CommonModule, MatModule, RouterModule, ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.scss'
})

export class CoverSigninComponent implements OnInit {
  FB = inject(FormBuilder)
  SA = inject(SweetAlertService)
  LG = inject(LoginService)
  RT = inject(Router)
  LS = inject(LocalStorageService)

  hide: any
  form: FormGroup

  constructor(private router: Router) {}

  ngOnInit(){
    this.form = this.FB.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  login() {
    if (this.form.invalid) {
      this.SA.InfoAlert('¡Ingrese nombre usuario y/o contraseña!')
      return
    }else{
      this.LG.Login(this.form.value).pipe(
        tap((response: Token) => {
          if(response && response.access_token){
            localStorage.setItem('access_token', response.access_token)
            localStorage.setItem('user', JSON.stringify(response.user))
            const { nombres, apellidos } = response.user
            this.SA.SuccessAlert(`BIENVENIDO ${nombres} ${apellidos}`)
            this.RT.navigate(['dashboard/e-commerce'])
          }
        }),
        catchError((e) => {
          this.SA.ErrorAlert(e.error.detail)
          return of(null)
        })
      ).subscribe()
    }
  }

  redireccionarContra(){
    this.router.navigate(['auth/cover-forgot-password'])
  }
}
