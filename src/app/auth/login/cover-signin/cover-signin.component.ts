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
  selector: 'app-cover-signin',
  standalone: true,
  imports: [CommonModule, MatModule, RouterModule, ReactiveFormsModule],
  templateUrl: './cover-signin.component.html',
  styleUrl: './cover-signin.component.scss'
})

export class CoverSigninComponent implements OnInit {
  FB = inject(FormBuilder)
  SA = inject(SweetAlertService)
  LG = inject(LoginService)
  RT = inject(Router)
  LS = inject(LocalStorageService)

  hide: any
  form: FormGroup

  ngOnInit(){
    this.form = this.FB.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  login() {
    if (this.form.invalid) {
      this.SA.ErrorAlert('¡Ingrese nombre usuario y/o contraseña!')
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
          } else {
            this.SA.ErrorAlert('¡Nombre de usuario y/o contraseña incorrectos!')
          }
        }),
        catchError(() => {
          this.SA.ErrorAlert('¡Nombre de usuario y/o contraseña incorrectos!')
          return of(null)
        })
      ).subscribe()
    }
  }
}
