import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatModule } from 'src/app/appModules/mat.module';
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  standalone: true,
  imports: [CommonModule, MatModule, SharedModule]
})

export class RegistrarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
