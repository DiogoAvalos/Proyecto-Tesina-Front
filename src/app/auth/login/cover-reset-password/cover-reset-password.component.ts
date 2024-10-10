import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover-reset-password',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './cover-reset-password.component.html',
  styleUrl: './cover-reset-password.component.scss'
})
export class CoverResetPasswordComponent {


  constructor(private router: Router){ }

  iniciarSesionRouter(){
    this.router.navigate(['auth/cover-signin'])
  }
}
