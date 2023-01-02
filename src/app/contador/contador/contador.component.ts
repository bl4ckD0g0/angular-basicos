import {Component} from "@angular/core";

@Component({
  selector:'app-contador',
  template:'\n' +
    '\n' +
    '<h1>{{title}}</h1>\n' +
    '<h3>La base es <strong>{{base}}</strong></h3>\n' +
    '\n' +
    '<button (click)="sumar(base);"> + {{base}} </button>\n' +
    '\n' +
    '<span> {{numero}} </span>\n' +
    '\n' +
    '<button (click)="sumar(-base);"> - {{base}} </button>\n  '
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  sumar(valor: number) {this.numero += valor;}
}
