import { elements } from './base';
export const getInput = () => elements.searchInput.value;


export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.resultsList.innerHTML = '';
};

const renderRecipe = recipe => {
    let imageUrl = `https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`;
    const markup = `
    <li>
                    <a class="results__link" href="#${recipe.id}">
                        <figure class="results__fig">
                            <img src="${imageUrl}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}...</h4>
                            <p class="results__author">${recipe.readyInMinutes}</p>
                        </div>
                    </a>
                </li>
    
    `;
    elements.resultsList.insertAdjacentHTML('beforeend',markup);

};
export const renderResults = (recipes) => {
    recipes.forEach(renderRecipe);
}
