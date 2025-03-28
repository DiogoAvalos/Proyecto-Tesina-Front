import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro-venta',
  templateUrl: './registro-venta.component.html',
  styleUrls: ['./registro-venta.component.css']
})

export class RegistroVentaComponent {
  @Input() area: string = '';

  items = [
    { descripcion: 'INSTRUMENTAL' },
    { descripcion: 'KIT DE ROPA' },
    { descripcion: 'EQUIPO DE LIMPIEZA' },
    { descripcion: 'EQUIPO EPIDURAL' },
    { descripcion: 'OTROS' }
  ];

  images: any = {};
  currentIndex: number | null = null;
  currentType: string = '';

  openCamera(index: number, type: string) {
    this.currentIndex = index;
    this.currentType = type;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment'; // Para la cámara trasera, usa 'user' para la frontal

    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          if (this.currentIndex !== null) {
            if (!this.images[this.currentIndex]) this.images[this.currentIndex] = {};
            this.images[this.currentIndex][this.currentType] = reader.result as string;
          }
        };
        reader.readAsDataURL(file);
      }
    };

    input.click();
  }

  removeImage(index: number, type: string) {
    if (this.images[index] && this.images[index][type]) {
      delete this.images[index][type];
    }
  }
}