import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;
  public ingridients: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingridient: Ingredient[]){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingridients = ingridient;
  }
}
