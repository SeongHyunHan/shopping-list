import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/easy-dinner-recipes-1676057761.jpeg")
  ];

  constructor() {}

  ngOnInit() {

  }

}
