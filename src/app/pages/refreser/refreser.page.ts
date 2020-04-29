import { Component, OnInit } from '@angular/core';
import { CompileTemplateMetadata } from '@angular/compiler';

@Component({
  selector: 'app-refreser',
  templateUrl: './refreser.page.html',
  styleUrls: ['./refreser.page.scss'],
})
export class RefreserPage implements OnInit {

  items:any []=[];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event){
    setTimeout(()=>{
      this.items = Array(40);
     event.target.complete()
    },1500);
  }
}
