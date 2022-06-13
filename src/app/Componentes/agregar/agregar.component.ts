import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gym } from 'src/app/Entidad/Gym';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  gym: Gym = new Gym(); 

  ngOnInit(): void {
  }

  guardar() {
    this.service.add(this.gym).subscribe((res) => {
        console.log(res);
        alert("Se guardo");
        this.router.navigate(["listar"]);
    });
  }

}
