import { Component, OnInit } from '@angular/core';
import { ClienteService } from './services/cliente.service';
import { ServicioService } from './services/servicio.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  public clientes!: any[];
  public servicios!: any[];
  public cols: string[] = ['_id', 'nombre', 'valor', 'descripcion', 'cliente'];

  constructor(private clienteService: ClienteService, private serviciosService: ServicioService) {

  }

  ngOnInit(): void {
    this.loadClientes();
    this.loadServices();
  }

  loadServices() {
    this.serviciosService.loadServicios().subscribe({
      next: (response) => {
        this.servicios = response;
      }
    })
  }



  loadClientes() {
    this.clienteService.loadClientes().subscribe({
      next: (response) => {
        this.clientes = response;
      }
    })
  }

  save(servicio: any) {
    this.serviciosService.addServicio(servicio).subscribe({
      next: (response) => {
        this.loadServices();
      }
    })
  }

}
