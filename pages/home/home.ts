import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  activity: number;
  cbc: number;
  weight: number;
  duration: number;
  cbcMessage: string;

  constructor(public navCtrl: NavController) {}


  calculateCBC(){
    this.cbc = this.weight/ (this.activity* 3.5*this.weight/200);
    this.cbc = parseFloat(this.cbc.toFixed(3));
    
    if (this.cbc< 3.0) {
      this.cbcMessage = "Light";
    } else if (this.cbc >= 18.5 && this.cbc <3.0-6.0) { 
    this.cbcMessage = "Moderate";
    } else if (this.cbc>= 25 && this.cbc >6.0){
      this.cbcMessage = "Vigorous";      }
}
}