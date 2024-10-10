import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover-forgot-password',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './cover-forgot-password.component.html',
  styleUrl: './cover-forgot-password.component.scss'
})
export class CoverForgotPasswordComponent {

  constructor(private router: Router){ }

  iniciarSesionRouter(){
    this.router.navigate(['auth/cover-signin'])
  }
}
