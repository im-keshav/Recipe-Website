// API Integration for Recipe Details
// Using TheMealDB API (free and no API key required)

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Function to search recipes by name
async function searchRecipesByName(query) {
    try {
        const response = await fetch(`${API_BASE_URL}/search.php?s=${query}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
}

// Function to get recipe details by ID
async function getRecipeById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
        const data = await response.json();
        return data.meals ? data.meals[0] : null;
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        return null;
    }
}

// Function to get random recipe
async function getRandomRecipe() {
    try {
        const response = await fetch(`${API_BASE_URL}/random.php`);
        const data = await response.json();
        return data.meals ? data.meals[0] : null;
    } catch (error) {
        console.error('Error fetching random recipe:', error);
        return null;
    }
}

// Function to get recipes by category
async function getRecipesByCategory(category) {
    try {
        const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error('Error fetching recipes by category:', error);
        return [];
    }
}

// Function to get all categories
async function getAllCategories() {
    try {
        const response = await fetch(`${API_BASE_URL}/categories.php`);
        const data = await response.json();
        return data.categories || [];
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

// Function to format API recipe to match our app's format
function formatApiRecipe(apiRecipe) {
    if (!apiRecipe) return null;
    
    // Extract ingredients and measurements
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = apiRecipe[`strIngredient${i}`];
        const measure = apiRecipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push({
                ingredient: ingredient.trim(),
                measure: measure ? measure.trim() : ''
            });
        }
    }
    
    // Extract instructions
    const instructions = apiRecipe.strInstructions ? 
        apiRecipe.strInstructions.split('\n').filter(step => step.trim()) : [];
    
    return {
        id: apiRecipe.idMeal,
        title: apiRecipe.strMeal,
        category: apiRecipe.strCategory ? apiRecipe.strCategory.toLowerCase() : 'other',
        image: apiRecipe.strMealThumb,
        description: apiRecipe.strInstructions ? 
            apiRecipe.strInstructions.substring(0, 150) + '...' : 'No description available',
        time: '30 mins', // Default as API doesn't provide time
        difficulty: 'Medium', // Default as API doesn't provide difficulty
        ingredients: ingredients,
        instructions: instructions,
        source: apiRecipe.strSource || '',
        youtube: apiRecipe.strYoutube || ''
    };
}

// Export functions
window.recipeApi = {
    searchRecipesByName,
    getRecipeById,
    getRandomRecipe,
    getRecipesByCategory,
    getAllCategories,
    formatApiRecipe
}; 