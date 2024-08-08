import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { UserServiceService } from 'src/app/auth/services/userService.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  userData: any;

  constructor(private US: UserServiceService) { }

  ngOnInit(){
    this.loadUserData()
  }

  loadUserData(): void {
    this.US.getUsers().subscribe(data => {
      this.userData = data; // Asigna los datos del usuario a la propiedad
      console.log(this.userData); // Opcional: muestra los datos en la consola
    }, error => {
      console.error('Error al cargar los datos del usuario', error); // Maneja errores en caso de que ocurran
    });
  }

  countries: string[] = [
    'India',
    'America',
    'China',
    'Arab',
    'Dubai',
    'Japan',
    'Nepal',
    'England',
    'Canada',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];



  
  states: string[] = [
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

}
