import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {


  @Output() onSave = new EventEmitter<any>();
  @Input() clientes!: any[];
  clientesCurrent: any[] = [];

  servicio: any;

  selectedClient: any;

  group!: FormGroup;
  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.clientes) {
      this.clientes.forEach(cliente => {
        this.clientesCurrent.push({ _id: cliente._id, cedula: cliente.cedula, nombre: cliente.nombre, apellido: cliente.apellido, ciudad: cliente.ciudad, cliente: `${cliente.cedula} ${cliente.nombre} ${cliente.apellido}` });
      });
    }
  }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm() {

    this.group = new FormGroup({
      _id: new FormControl(this.servicio?._id),
      nombre: new FormControl(this.servicio?.nombre, Validators.required),
      ciudad: new FormControl(this.servicio?.ciudad, Validators.required),
      valor: new FormControl(this.servicio?.valor, Validators.required),
      descripcion: new FormControl(this.servicio?.descripcion, Validators.required),
      cliente: new FormControl(this.selectedClient?.cedula, Validators.required)
    });
  }


  save() {
    this.onSave.emit(this.group.getRawValue())
    this.group.reset();
  }
}
