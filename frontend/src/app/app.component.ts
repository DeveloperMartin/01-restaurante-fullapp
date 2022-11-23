import { Component } from '@angular/core';
import { MostradorService } from './services/mostrador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private mostradorService: MostradorService) {}

  getFood(){
    this.mostradorService.getFood().subscribe((data) => {
      console.log(data);
    });
  }

  getDrink(){
    this.mostradorService.getDrink().subscribe((data) => {
      console.log(data);
    });
  }


}
