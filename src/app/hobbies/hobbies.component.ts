import { Component, OnInit } from '@angular/core';
import { icons } from '../fa-images';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {


  icons = icons;

  constructor() { }

  ngOnInit(): void {
  }

}
