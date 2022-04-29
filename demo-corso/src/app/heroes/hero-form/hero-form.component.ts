import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent  {


  model = new Hero(1, "Dr. Salvatore", "Magia", "Salvatore Sorrentino");
  poteri = ["Magia", "Invisibilità", "Forza"];

  mySubmit(){
    alert('form submitted');
  }

}
