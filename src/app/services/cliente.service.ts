import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL: string = "/api/clientes/";

  constructor(private http: HttpClient) { }

  loadClientes(): Observable<any> {
    return this.http.get(this.URL);
  }
}
