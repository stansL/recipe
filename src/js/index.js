import axios from 'axios';

async function getResults(query) {

    const apiKey = 'dc4980a9b4564a97b831ea8e6ce3e6d1';
    try {
        const result = await axios(`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${query}&number=10`);
        const recipes = result.data.results;
        console.log(recipes);
    } catch (error) {
        console.log('An error occured!');
        console.log(error);
        
    }
    

    
}

getResults('pizza');