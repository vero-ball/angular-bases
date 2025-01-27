import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10;

  increaseBy(valor: number):void {
    this.counter+= valor;
  }
  reset():void {
    this.counter = 10;
  }
}
