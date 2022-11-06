import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  // @Output() recipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];
  recipeSubs: Subscription;
  //   new Recipe('A test', 'simple test desc', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/lentil_and_chickpea_31510_16x9.jpg'),
  //   new Recipe('Another test recipe', 'simple test desc', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/lentil_and_chickpea_31510_16x9.jpg')
  // ];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeSubs = this.recipeService.recipeSelected.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeAdded(event: Recipe){
  //   this.recipe.emit(event);
  // }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
      this.recipeSubs.unsubscribe();
  }
}
