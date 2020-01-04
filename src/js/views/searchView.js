import { elements } from './base';
export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
	elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.resultsList.innerHTML = '';
    elements.resultsPages.innerHTML = '';
    
};

const limitRecipeTitle = (title, limit = 17) => {
	const newTitle = [];
	if (title.length > limit) {
		title.split(/\W/).reduce((acc, curr) => {
			if (acc + curr.length <= limit) {
				newTitle.push(curr);
			}
			return acc + curr.length;
		}, 0);
		// Return the results
		return newTitle.join(' ').concat('...');
	}
	return title;
};

const renderRecipe = (recipe) => {
	let imageUrl = `https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`;
	const markup = `
    <li>
                    <a class="results__link" href="#${recipe.id}">
                        <figure class="results__fig">
                            <img src="${imageUrl}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                            <p class="results__author">${recipe.readyInMinutes}</p>
                        </div>
                    </a>
                </li>
    
    `;
	elements.resultsList.insertAdjacentHTML('beforeend', markup);
};

const createButton = (page, type) => `
        <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
            </svg>
        </button>
`;
const renderButtons = (page, resultsCount, resultsPerPage) => {
	let pages = Math.ceil(resultsCount / resultsPerPage);
	let button;
	if (page === 1 && pages > 1) {
		// Display next page button
		button = createButton(page, 'next');
	} else if (page < pages) {
		// Display previous and next page button
		button = `
            ${createButton(page, 'prev')}      
            ${createButton(page, 'next')}  
        `;
	} else if (page === pages && pages > 1) {
		// Display previous page button
		button = createButton(page, 'prev');
	}
	elements.resultsPages.insertAdjacentHTML('beforeend', button);
};

export const renderResults = (recipes, page = 1, resultsPerPage = 10) => {
	let start = (page - 1) * resultsPerPage,
		end = page * resultsPerPage;
	recipes.slice(start, end).forEach(renderRecipe);
	renderButtons(page, recipes.length, resultsPerPage);
};
