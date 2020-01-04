import axios from 'axios';
import {apiKey} from '../config';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		try {
			const result = await axios(
				`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${this.query}&number=30`
			);
			this.recipes = result.data.results;
			// console.log(this.recipes);
		} catch (error) {
			console.log('An error occured!');
			console.log(error);
		}
	}
}
