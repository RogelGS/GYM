import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gym } from '../Entidad/Gym';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:7000/APIGYM/";

  getList() {
    return this.http.get<Gym[]>(this.url+"LISTAR");
  }

  add(gym: Gym) {
    return this.http.post<Gym>(this.url+"GUARDAR", gym);
  }

  edith(gym: Gym) {
    return this.http.post<Gym>(this.url+"EDITAR", gym);
  }
  
  delete(gym: Gym) {
    return this.http.post<Gym>(this.url+"ELIMINAR", gym);
  }

  find(gym: Gym) {
    return this.http.post<Gym>(this.url+"BUSCAR", gym);
  }
}
