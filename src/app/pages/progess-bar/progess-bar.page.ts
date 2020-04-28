import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess-bar',
  templateUrl: './progess-bar.page.html',
  styleUrls: ['./progess-bar.page.scss'],
})
export class ProgessBarPage implements OnInit {
  porcentaje = 0.05;

  constructor() { }

  ngOnInit() {
  }
  cambioRango(event){
    console.log(event)
    this.porcentaje= event.datail.value/100
  }
}
