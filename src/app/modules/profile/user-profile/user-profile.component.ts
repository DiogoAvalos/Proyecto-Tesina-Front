import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { UserService } from 'src/app/auth/services/userService.service';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/auth/interfaces/ficheros';
import { FormBuilder } from '@angular/forms';
import { SweetAlertService } from 'src/app/auth/services/sweetAlertService.service';
import { FicheroSevice } from 'src/app/auth/services/ficheroSevice.service';
import { LocalStorageService } from 'src/app/auth/services/localStorageService.service';
import { HttpClient } from '@angular/common/http';

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
  LS = inject(LocalStorageService);
  US = inject(UserService);

  nombresUser: string;
  apellidosUser: string;
  paisUser: string;
  departamentoUser: string;
  pais$: Observable<Pais[]>;
  paises: Pais[] = [];
  profileImage: string | ArrayBuffer = 'assets/images/gallery/profile-cover.png';
  thumbnailImage: string | ArrayBuffer = 'https://placehold.co/110x110';

  constructor() { }

  ngOnInit() {
    this.pais$ = this.FS.getPais();
    this.pais$.subscribe(data => {
      this.paises = data;
      this.loadUserData();
    })
    this.loadUserImage()
  }

  loadUserData() {
    const user = this.LS.getItem<any>('user');
    if (user) {
      this.apellidosUser = user.apellidos;
      this.nombresUser = user.nombres;
      const pais = this.paises.find(p => p.id === user.pais_id);
      this.departamentoUser = user.departamento;
      this.paisUser = pais ? pais.nombre : '';

      // Si existe imagen en base64, la formateamos para mostrarla
      this.thumbnailImage = user.imagen_base64 ? `data:image/jpeg;base64,${user.imagen_base64}` : 'https://placehold.co/110x110';
      this.profileImage = this.thumbnailImage; // Usa la misma imagen de perfil
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = (reader.result as string).split(',')[1];
        this.profileImage = `${base64Image}`;
        this.thumbnailImage = this.profileImage;
        this.saveImageToDatabase(this.profileImage);
      };
      reader.readAsDataURL(file);
    }
  }

  saveImageToDatabase(base64Image: string) {
    const user = this.LS.getItem<any>('user');
    if (user) {
      this.US.putUserImagen(user.id, base64Image).subscribe({
        next: (response) => {
          console.log('Imagen actualizada con éxito', response);
          user.imagen_base64 = base64Image;
          this.LS.setItem('user', user);
        },
        error: (error) => {
          console.error('Error al actualizar la imagen', error);
        }
      });
    }
  }

  loadUserImage() {
    const user = this.LS.getItem<any>('user');
    if (user && user.imagen_base64) {
      this.profileImage = user.imagen_base64;
      this.thumbnailImage = user.imagen_base64;
    }
  }
}