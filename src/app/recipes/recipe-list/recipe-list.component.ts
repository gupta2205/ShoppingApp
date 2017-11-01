import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Rajma Rice', 'Red kidney beans with rice full of taste','https://i.ytimg.com/vi/3h9eW9V04O8/maxresdefault.jpg'),
    new Recipe('Rajma Rice', 'Red kidney beans with rice full of taste','https://i.ytimg.com/vi/3h9eW9V04O8/maxresdefault.jpg' )
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
