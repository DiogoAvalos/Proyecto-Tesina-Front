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

  toggleSearch: boolean = false

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

  openSearch() {
    this.toggleSearch = true
  }

  searchClose() {
    this.toggleSearch = false
  }

  appIcon: AppIcon[] = [
    { src: 'assets/images/app/apple.png', name: 'Apple' },
    { src: 'assets/images/app/behance.png', name: 'Behance' },
    { src: 'assets/images/app/slack.png', name: 'Slack' },
    { src: 'assets/images/app/bootstrap.png', name: 'Bootstrap' },
    { src: 'assets/images/app/google-drive.png', name: 'Drive' },
    { src: 'assets/images/app/outlook.png', name: 'Outlook' },
    { src: 'assets/images/app/github.png', name: 'GitHub' },
    { src: 'assets/images/app/stack-overflow.png', name: 'Overflow' },
    { src: 'assets/images/app/figma.png', name: 'Figma' },
    { src: 'assets/images/app/twitter.png', name: 'Twitter' },
    { src: 'assets/images/app/google-calendar.png', name: 'Calendar' },
    { src: 'assets/images/app/spotify.png', name: 'Spotify' },
    { src: 'assets/images/app/google-photos.png', name: 'Photos' },
    { src: 'assets/images/app/pinterest.png', name: 'Pinterest' },
    { src: 'assets/images/app/linkedin.png', name: 'linkedin' },
    { src: 'assets/images/app/dribble.png', name: 'Dribbble' },
    { src: 'assets/images/app/youtube.png', name: 'YouTube' },
    { src: 'assets/images/app/google.png', name: 'News' },
    { src: 'assets/images/app/envato.png', name: 'Envato' },
    { src: 'assets/images/app/safari.png', name: 'Safari' },


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
        console.error('Error al parsear los datos del usuario:', error)
      }
    }
    this.loadUserImage()
  }

  async logout(){
    const confirmar = await this.SA.ConfirmAlert("¿Cerrar sesión?")
    if(confirmar.isConfirmed){
      this.LS.clear()
      this.SA.SuccessAlert("¡Sesión cerrada correctamente!")
      this.router.navigate(['/auth/cover-signin'])
    }
  }

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
