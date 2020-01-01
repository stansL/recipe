import axios from 'axios';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		const apiKey = 'dc4980a9b4564a97b831ea8e6ce3e6d1';
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
