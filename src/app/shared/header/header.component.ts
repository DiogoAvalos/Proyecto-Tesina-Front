import { Component, inject, OnInit } from '@angular/core';
import { AppIcon } from './app-icon';
import { SidebarService } from './../sidebar/sidebar.service'
import { SweetAlertService } from 'src/app/auth/services/sweetAlertService.service';
import { Router } from '@angular/router';
import { UserToken } from 'src/app/auth/interfaces/usuario';
import { LocalStorageService } from 'src/app/auth/services/localStorageService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  SA = inject(SweetAlertService)
  LS = inject(LocalStorageService)

  nombres: any
  apellidos: any
  correo: any
  username: any

  profileImage: string | ArrayBuffer = ''
  thumbnailImage: string | ArrayBuffer = 'https://placehold.co/110x110'

  constructor( public sidebarservice: SidebarService, private router: Router ) {}

  theme_name = 'dark_mode'

  darkMode() {
    if(this.theme_name == 'light_mode' ) {
      document.querySelector("html").classList.replace('dark_mode' , 'light_mode')
      this.theme_name = 'dark_mode'
      
    } else if(this.theme_name == 'dark_mode' ) {
      document.querySelector("html").classList.replace('light_mode' , 'dark_mode')
      this.theme_name = 'light_mode'

    }
     return this.theme_name
  }

  getSideBarSate() {
    return this.sidebarservice.getSidebarState()
  }
  
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState())
  }

  appIcon: AppIcon[] = [
    { src: 'assets/images/app/google-drive.png', name: 'Drive' },
    { src: 'assets/images/app/outlook.png', name: 'Outlook' },
    { src: 'assets/images/app/google-calendar.png', name: 'Calendar' },
    { src: 'assets/images/app/spotify.png', name: 'Spotify' },
    { src: 'assets/images/app/youtube.png', name: 'YouTube' },
    { src: 'assets/images/app/google.png', name: 'News' },
  ]

  ngOnInit() {
    const user = localStorage.getItem('user')
    if(user){
      try {
        const parsedUser: UserToken = JSON.parse(user)
        this.nombres = `${parsedUser.nombres} ${parsedUser.apellidos}`
        this.correo = parsedUser.correo
        this.username = parsedUser.username
      } catch (error) {
        console.error('Error ->', error)
      }
    }
    this.loadUserImage()
  }

  //* Cerrar Sesión
  async logout(){
    const confirmar = await this.SA.ConfirmAlert("¿Cerrar sesión?")
    if(confirmar.isConfirmed){
      this.LS.clear()
      this.SA.SuccessAlert("¡Sesión cerrada correctamente!")
      this.router.navigate(['/auth/cover-signin'])
    }
  }

  //* Cargar imagen desde la base de datos
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement
    if (input.files && input.files[0]) {
      const file = input.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        const base64Image = (reader.result as string).split(',')[1]
        const base64ImageWithPrefix = `data:image/jpeg;base64,${base64Image}`
        this.profileImage = base64ImageWithPrefix
        this.thumbnailImage = base64ImageWithPrefix
      }
      reader.readAsDataURL(file)
    }
  }

  loadUserImage() {
    const user = this.LS.getItem<any>('user')
    if(user && user.imagen_base64){
      this.profileImage = user.imagen_base64
      this.thumbnailImage = user.imagen_base64
    }
  }
}
