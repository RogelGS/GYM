import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gym } from 'src/app/Entidad/Gym';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  gym: Gym[];
  constructor(private router: Router, private servicio: ServiceService) { }

  ngOnInit(): void {
    this.servicio.getList().subscribe((res) => {
        this.gym = res;
    });
  }

  editar(gym: Gym) {
    localStorage.setItem("id", gym.id.toString());
    this.router.navigate(["editar"]);
  }

  eliminar(gym: Gym) {
    localStorage.setItem("id", gym.id.toString());
    this.router.navigate(["eliminar"]);
  }
}
