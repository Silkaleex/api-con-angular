import { Component } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'apiangular';
  public componentApi: any = [];
  constructor(private RestService: RestService) {}
  ngOnInit(): void {
    this.cargarContenido();
  }
  public cargarContenido() {
    this.RestService.get(
      'https://jsonplaceholder.typicode.com/users'
    ).subscribe((respuesta) => {
      this.componentApi = respuesta;
    });
  }
}
