import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['hero01','hero02'];
  borrarHeroe() {
    console.log("Borrando Héroe...")
    this.heroes.pop();
  }
}
