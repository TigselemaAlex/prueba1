import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private URL = "/api/servicios/"
  constructor(private http: HttpClient) { }


  loadServicios(): Observable<any> {
    return this.http.get(this.URL);
  }
  addServicio(servicio: any): Observable<any> {
    return this.http.post(this.URL, servicio);
  }

}
