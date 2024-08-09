import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { UserService } from 'src/app/auth/services/userService.service';
import { Observable } from 'rxjs';
import { Pais, TipoDoc } from 'src/app/auth/interfaces/ficheros';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertService } from 'src/app/auth/services/sweetAlertService.service';
import { FicheroSevice } from 'src/app/auth/services/ficheroSevice.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  SA = inject(SweetAlertService)
  FB = inject(FormBuilder)
  FS = inject(FicheroSevice)

  pais$: Observable<Pais[]>
  paises: any[]
  tipoDoc$: Observable<TipoDoc[]>
  tipoDoc: any[]
  form: FormGroup
  nombreBtn: string = 'REGISTRAR'
  nombreTitulo: string = 'Registrar Usuario'
  dataUsuarios: any

  constructor(private US: UserService) { }

  ngOnInit(){
    this.pais$ = this.FS.getPais();
    this.pais$.subscribe(data => {
      this.paises = data
    })
    this.tipoDoc$ = this.FS.getTipoDoc()
    this.tipoDoc$.subscribe(data => {
      this.tipoDoc = data
    })
    this.form = this.FB.group({
      username: [null, Validators.required],
      nombres: [null, Validators.required],
      apellidos: [null, Validators.required],
      email: [null, Validators.required],
      birthdate: [null, Validators.required],
      clave: [null, Validators.required],
      tipodoc: [null, Validators.required],
      numdoc: [null, Validators.required],
      pais_id: [null],
      departamento: [null],
      distrito: [null],
      genero: [null, Validators.required],
      telefono: [null],
      //*fecha_creacion: moment().format(),
      rol: [null, Validators.required],
      activo: [true]
    })
  }
}
