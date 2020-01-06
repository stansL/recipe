import axios from 'axios';
import { apiKey } from '../config';

export default class Recipe {
	constructor(recipeId) {
		this.recipeId = recipeId;
	}

	async getRecipe() {
		try {
			const result = await axios(
				`https://api.spoonacular.com/recipes/${this.recipeId}/information?apiKey=${apiKey}&includeNutrition=true`
			);
			this.recipe = result.data;
			this.title = this.recipe.title;
			this.image = this.recipe.image;
			this.url = this.recipe.sourceUrl;
			this.cookingTime = this.recipe.readyInMinutes;
			this.servings = this.recipe.servings;
			this.ingredients = this.recipe.extendedIngredients;
			// console.log(this.recipe);
		} catch (error) {
			console.log('An error occured!');
			console.log(error);
		}
	} 

	parseIngredients() {
		this.ingredients = this.ingredients.map(ingredient => {
			ingredient = ingredient.lowerCase();

		});
	}

}
