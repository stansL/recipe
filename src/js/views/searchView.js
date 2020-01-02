import { elements } from './base';
export const getInput = () => elements.searchInput.value;


export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.resultsList.innerHTML = '';
};

const limitRecipeTitle = (title,limit = 17) => {
    const newTitle = [];
    if(title.length > limit){
        title.split(/\W/).reduce((acc,curr) => {
            if(acc + curr.length <= limit){
                newTitle.push(curr);
            }
            return acc + curr.length;

        },0);
        // Return the results
        return newTitle.join(" ").concat('...');
    }
    return title;
}

const renderRecipe = recipe => {
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
    elements.resultsList.insertAdjacentHTML('beforeend',markup);

};
export const renderResults = (recipes) => {
    recipes.forEach(renderRecipe);
}
