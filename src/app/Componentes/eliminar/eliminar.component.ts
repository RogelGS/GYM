import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gym } from 'src/app/Entidad/Gym';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  gym: Gym = new Gym();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    let id = localStorage.getItem("id");
    this.gym.id =+ Number(id);
    this.service.find(this.gym).subscribe(res => {
      this.gym = res;
    });
  }

  eliminar() {
    this.service.delete(this.gym).subscribe(res => {
      alert("se elimino");
      this.router.navigate(["listar"]);
    });
  }
}
