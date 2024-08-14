import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { UserService } from 'src/app/auth/services/userService.service';
import { Observable } from 'rxjs';
import { Pais, TipoDoc } from 'src/app/auth/interfaces/ficheros';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertService } from 'src/app/auth/services/sweetAlertService.service';
import { FicheroSevice } from 'src/app/auth/services/ficheroSevice.service';
import { LocalStorageService } from 'src/app/auth/services/localStorageService.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  SA = inject(SweetAlertService);
  FB = inject(FormBuilder);
  FS = inject(FicheroSevice);
  LS = inject(LocalStorageService)

  nombresUser: string
  apellidosUser: string
  paisUser: string
  departamentoUser: string
  pais$: Observable<Pais[]>
  paises: Pais[] = []
  tipoDoc$: Observable<TipoDoc[]>
  tipoDoc: TipoDoc[] = []
  form: FormGroup
  nombreBtn: string = 'REGISTRAR';
  nombreTitulo: string = 'Registrar Usuario';

  constructor(private US: UserService) { }

  ngOnInit() {
    this.pais$ = this.FS.getPais();
    this.pais$.subscribe(data => {
      this.paises = data
      this.loadUserData()
    });
    this.tipoDoc$ = this.FS.getTipoDoc()
    this.tipoDoc$.subscribe(data => {
      this.tipoDoc = data;
    });
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
      rol: [null, Validators.required],
      activo: [true]
    })
  }

  loadUserData() {
    const user = this.LS.getItem<any>('user')
    if(user){
      this.apellidosUser = user.apellidos
      this.nombresUser = user.nombres
      const pais = this.paises.find(p => p.id === user.pais_id)
      this.departamentoUser = user.departamento
      this.paisUser = pais ? pais.nombre : ''
      console.log(pais)
      this.form.patchValue({
        username: user.username,
        nombres: user.nombres,
        apellidos: user.apellidos,
        email: user.correo,
        birthdate: user.birthdate,
        clave: user.clave,
        tipodoc: user.tipodoc,
        numdoc: user.numdoc,
        pais_id: user.pais_id,
        departamento: user.departamento,
        distrito: user.distrito,
        genero: user.genero,
        telefono: user.telefono,
        rol: user.rol,
        activo: user.activo
      })
    }
  }
}
