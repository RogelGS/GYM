import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './Servicios/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUDGYM';

  constructor(private router: Router) {}

  listar() {
    this.router.navigate(["listar"]);
  }

  agregar() {
    this.router.navigate(["agregar"])
  }
}
