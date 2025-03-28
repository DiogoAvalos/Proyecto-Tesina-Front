import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-venta',
  templateUrl: './registro-venta.component.html',
  styleUrls: ['./registro-venta.component.css']
})
export class RegistroVentaComponent {
  @Input() form: FormGroup;

  items = [
    { descripcion: 'INSTRUMENTAL' },
    { descripcion: 'KIT DE ROPA' },
    { descripcion: 'EQUIPO DE LIMPIEZA' },
    { descripcion: 'EQUIPO EPIDURAL' },
    { descripcion: 'OTROS' }
  ];

  images: any = {};
  activeMenuIndex: number | null = null;
  activeMenuType: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      instrumental_indic: this.fb.control(null),
      kit_indic: this.fb.control(null),
      equipo_indic: this.fb.control(null),
      epidural_indic: this.fb.control(null),
      otros_indic: this.fb.control(null)
    });
  }

  /**
   * Detecta si el usuario está en Android o iOS.
   */
  isMobile(): boolean {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  }

  /**
   * Maneja la selección de imagen dependiendo del dispositivo.
   */
  handleImageSelection(index: number, type: string) {
    if (this.isMobile()) {
      this.openCamera(index, type);
    } else {
      this.openFilePicker(index, type);
    }
  }

  /**
   * Abre la cámara en dispositivos móviles.
   */
  openCamera(index: number, type: string) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    input.onchange = (event: any) => this.processFile(event, index, type);
    input.click();
  }

  /**
   * Abre el gestor de archivos en computadoras de escritorio.
   */
  openFilePicker(index: number, type: string) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => this.processFile(event, index, type);
    input.click();
  }

  /**
   * Procesa la imagen seleccionada y la almacena en el formulario.
   */
  processFile(event: Event, index: number, type: string) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const fileName = file.name;
      this.form.patchValue({ [`${this.items[index].descripcion.toLowerCase().replace(/\s/g, '_')}_${type}`]: fileName });

      const reader = new FileReader();
      reader.onload = () => (this.images[index] = { ...this.images[index], [type]: reader.result });
      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number, type: string) {
    this.images[index][type] = null;
    this.closeMenu();
  }

  closeMenu() {
    this.activeMenuIndex = null;
    this.activeMenuType = null;
  }

  toggleMenu(index: number, type: string) {
    this.activeMenuIndex = this.activeMenuIndex === index && this.activeMenuType === type ? null : index;
    this.activeMenuType = type;
  }
}
