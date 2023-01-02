import {Component} from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
  nombre: string = 'Max';
  edad: number = 25;

  obtenerNombre(): string{
    return `${ this.nombre } - ${ this.edad}`;
  }

}
