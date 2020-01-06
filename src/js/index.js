import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader, elementStrings } from './views/base';
/**
 * Global State of the App
 *  - Search Object
 *  - Current Recipe Object
 *  - Shopping List Object
 *  - Like Recipes
 */
const state = {};
const controlSearch = async () => {
	console.log('Activated the control search');
	// 1. Get the query from the view
	const query = searchView.getInput(); //TODO
	console.log(query);
	// 2. create new search object
	if (query) {
		state.search = new Search(query);
	}
	// 3. Prepare UI for results
	searchView.clearResults(); //clear the previous results
	renderLoader(elements.results);

	try {
		// 4. Search for recipes
		await state.search.getResults();
		// 5. Clear search query
		searchView.clearInput(); //clear the search input
		clearLoader();

		// 6. Render results to the UI
		searchView.renderResults(state.search.recipes);

	} catch (error) {
		console.log('Error while fetching recipes!');
		clearLoader();
	}

	// 4. Search for recipes
	await state.search.getResults();
	// 5. Clear search query
	searchView.clearInput(); //clear the search input
	clearLoader();

	// 6. Render results to the UI
	searchView.renderResults(state.search.recipes);
};

elements.searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	controlSearch();
});

// const search = new Search('pizza');
// console.log(search);

elements.resultsPages.addEventListener('click', (e) => {
	// console.log(`A button was clicked! at ${e.target}`);
	const btn = e.target.closest(`.${elementStrings.btnInline}`);
	if (btn) {
		const gotoPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.recipes, gotoPage);

	}
});


/**
 * RECIPE Controller
 */
// state.recipe = new Recipe(801710);
// state.recipe.getRecipe();
// console.log(state.recipe);

const controlRecipe = async () => {
	// Get the ID from the url
	const id = window.location.hash.slice(1);
	console.log(id);
	if (id) {
		// prepare UI for recipe changes

		// create new recipe object
		state.recipe = new Recipe(id);
		try {
			// Get recipe data
			await state.recipe.getRecipe();

			// Render the REcipe
			console.log(state.recipe);

		} catch (erro) {
			alert('Error processing recipe!!');
		}



	}
}

['hashCange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
