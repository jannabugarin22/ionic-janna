import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls:["home.css"]
})

export class HomePage {
  activity: string;
  cbc: number;
  MET: number;
  weight: number;
  duration: number;
  cbcMessage: string;

  constructor(public navCtrl: NavController) {}


  calculateCBC(){
  
    
    if (this.activity== "a") {
      this.MET = 2.2;
    } else if (this.activity== "b") { 
    this.MET = 2.5;
  } else if (this.activity== "c") { 
    this.MET = 4.5;
  } else if (this.activity== "d"){ 
    this.MET = 6;
  } else if (this.activity== "e") { 
    this.MET = 11.5 ;
  } else if (this.activity== "f") { 
    this.MET = 8;
  }
  this.cbc = (this.MET* 3.5*this.weight/200)* this.duration;
  this.cbc = parseFloat(this.cbc.toFixed(3));
  }
}