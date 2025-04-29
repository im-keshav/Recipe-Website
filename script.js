// Sample recipe data
const recipes = [
    {
        id: 1,
        title: "Classic Pancakes",
        category: "breakfast",
        image: "image/pancake.avif",
        description: "Fluffy and delicious pancakes perfect for breakfast.",
        time: "20 mins",
        difficulty: "Easy",
        ingredients: [
            { ingredient: "All-purpose flour", measure: "1 1/2 cups" },
            { ingredient: "Baking powder", measure: "3 1/2 teaspoons" },
            { ingredient: "Salt", measure: "1/4 teaspoon" },
            { ingredient: "Sugar", measure: "1 tablespoon" },
            { ingredient: "Milk", measure: "1 1/4 cups" },
            { ingredient: "Egg", measure: "1 large" },
            { ingredient: "Melted butter", measure: "3 tablespoons" },
            { ingredient: "Vanilla extract", measure: "1 teaspoon" }
        ],
        instructions: [
            "In a large bowl, sift together the flour, baking powder, salt and sugar.",
            "Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
            "Heat a lightly oiled griddle or frying pan over medium-high heat.",
            "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
            "Cook until bubbles form and the edges are dry, then flip and cook until browned on the other side."
        ]
    },
    {
        id: 2,
        title: "Chicken Caesar Salad",
        category: "lunch",
        image: "image/chicken-salad.avif",
        description: "A classic salad with grilled chicken and Caesar dressing.",
        time: "25 mins",
        difficulty: "Medium",
        ingredients: [
            { ingredient: "Chicken breast", measure: "2 pieces" },
            { ingredient: "Romaine lettuce", measure: "1 head" },
            { ingredient: "Parmesan cheese", measure: "1/2 cup, grated" },
            { ingredient: "Croutons", measure: "1 cup" },
            { ingredient: "Olive oil", measure: "2 tablespoons" },
            { ingredient: "Garlic", measure: "2 cloves, minced" },
            { ingredient: "Anchovy fillets", measure: "2-3 pieces" },
            { ingredient: "Dijon mustard", measure: "1 teaspoon" },
            { ingredient: "Lemon juice", measure: "1 tablespoon" },
            { ingredient: "Worcestershire sauce", measure: "1 teaspoon" },
            { ingredient: "Black pepper", measure: "1/4 teaspoon" },
            { ingredient: "Salt", measure: "To taste" }
        ],
        instructions: [
            "Season chicken breasts with salt and pepper, then grill until cooked through (about 6-8 minutes per side).",
            "Let the chicken rest for 5 minutes, then slice into strips.",
            "Wash and chop the romaine lettuce into bite-sized pieces.",
            "In a small bowl, whisk together olive oil, garlic, anchovies, mustard, lemon juice, Worcestershire sauce, salt, and pepper to make the dressing.",
            "In a large bowl, combine the lettuce, chicken, croutons, and dressing.",
            "Toss well to coat everything with the dressing.",
            "Top with grated Parmesan cheese and serve immediately."
        ]
    },
    {
        id: 3,
        title: "Spaghetti Carbonara",
        category: "dinner",
        image: "image/spaghetti.avif",
        description: "Creamy Italian pasta dish with pancetta and parmesan.",
        time: "30 mins",
        difficulty: "Medium",
        ingredients: [
            { ingredient: "Spaghetti", measure: "1 pound" },
            { ingredient: "Pancetta or bacon", measure: "8 ounces, diced" },
            { ingredient: "Garlic", measure: "2 cloves, minced" },
            { ingredient: "Eggs", measure: "4 large" },
            { ingredient: "Parmesan cheese", measure: "1 cup, grated" },
            { ingredient: "Black pepper", measure: "1 teaspoon, freshly ground" },
            { ingredient: "Salt", measure: "To taste" },
            { ingredient: "Olive oil", measure: "2 tablespoons" }
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti according to package instructions until al dente.",
            "Meanwhile, in a large skillet, heat olive oil over medium heat and cook pancetta until crispy, about 5-7 minutes.",
            "Add minced garlic to the pancetta and cook for 1 minute more.",
            "In a bowl, whisk together eggs, grated Parmesan, and black pepper.",
            "Drain the pasta, reserving 1/2 cup of pasta water.",
            "Working quickly, add the hot pasta to the skillet with pancetta and remove from heat.",
            "Pour the egg mixture over the pasta, stirring constantly to create a creamy sauce.",
            "If the sauce is too thick, add some of the reserved pasta water.",
            "Season with salt to taste and serve immediately with extra Parmesan and black pepper."
        ]
    },
    {
        id: 4,
        title: "Chocolate Cake",
        category: "dessert",
        image: "image/choco-cake.avif",
        description: "Rich and moist chocolate cake with chocolate ganache.",
        time: "60 mins",
        difficulty: "Hard",
        ingredients: [
            { ingredient: "All-purpose flour", measure: "2 cups" },
            { ingredient: "Cocoa powder", measure: "3/4 cup" },
            { ingredient: "Baking soda", measure: "1 1/2 teaspoons" },
            { ingredient: "Baking powder", measure: "1 1/2 teaspoons" },
            { ingredient: "Salt", measure: "1 teaspoon" },
            { ingredient: "Sugar", measure: "2 cups" },
            { ingredient: "Eggs", measure: "2 large" },
            { ingredient: "Milk", measure: "1 cup" },
            { ingredient: "Vegetable oil", measure: "1/2 cup" },
            { ingredient: "Vanilla extract", measure: "2 teaspoons" },
            { ingredient: "Boiling water", measure: "1 cup" },
            { ingredient: "Heavy cream", measure: "1 cup" },
            { ingredient: "Dark chocolate", measure: "8 ounces, chopped" }
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
            "In a large bowl, sift together flour, cocoa powder, baking soda, baking powder, and salt.",
            "Add sugar and mix well.",
            "In a separate bowl, beat eggs, milk, oil, and vanilla extract until well combined.",
            "Gradually add the wet ingredients to the dry ingredients, mixing until just combined.",
            "Stir in boiling water (batter will be thin).",
            "Pour batter into prepared pans and bake for 30-35 minutes, or until a toothpick inserted comes out clean.",
            "Cool in pans for 10 minutes, then remove from pans and cool completely on wire racks.",
            "For the ganache: Heat heavy cream in a saucepan until it just begins to simmer.",
            "Remove from heat and add chopped chocolate. Let stand for 5 minutes, then stir until smooth.",
            "Cool ganache until it reaches a spreadable consistency.",
            "Frost the cake with the ganache and serve."
        ]
    },
    // Indian Dishes
    {
        id: 5,
        title: "Butter Chicken",
        category: "dinner",
        image: "image/butter-chicken.webp",
        description: "Creamy, rich Indian curry with tender chicken pieces in a tomato-based sauce.",
        time: "45 mins",
        difficulty: "Medium",
        ingredients: [
            { ingredient: "Chicken thighs", measure: "1.5 pounds, cut into bite-sized pieces" },
            { ingredient: "Yogurt", measure: "1/2 cup" },
            { ingredient: "Ginger paste", measure: "1 tablespoon" },
            { ingredient: "Garlic paste", measure: "1 tablespoon" },
            { ingredient: "Garam masala", measure: "1 teaspoon" },
            { ingredient: "Turmeric powder", measure: "1/2 teaspoon" },
            { ingredient: "Salt", measure: "1 teaspoon" },
            { ingredient: "Butter", measure: "4 tablespoons" },
            { ingredient: "Onion", measure: "1 large, finely chopped" },
            { ingredient: "Tomato puree", measure: "1 cup" },
            { ingredient: "Heavy cream", measure: "1/2 cup" },
            { ingredient: "Kasuri methi", measure: "1 teaspoon (dried fenugreek leaves)" },
            { ingredient: "Sugar", measure: "1 teaspoon" },
            { ingredient: "Cilantro", measure: "For garnish" }
        ],
        instructions: [
            "Marinate the chicken with yogurt, ginger paste, garlic paste, garam masala, turmeric, and salt. Let it marinate for at least 30 minutes.",
            "Heat 2 tablespoons of butter in a large pan over medium heat.",
            "Add the marinated chicken and cook until it's lightly browned on all sides. Remove from the pan and set aside.",
            "In the same pan, add the remaining butter and sauté the onions until they're soft and golden.",
            "Add the tomato puree and cook for 5-7 minutes until the oil starts to separate.",
            "Add the cooked chicken back to the pan and simmer for 10-15 minutes until the chicken is cooked through.",
            "Stir in the heavy cream, kasuri methi, and sugar. Simmer for another 5 minutes.",
            "Garnish with cilantro and serve hot with naan or rice."
        ]
    },
    {
        id: 6,
        title: "Vegetable Biryani",
        category: "dinner",
        image: "image/veg-biryani.avif",
        description: "Aromatic rice dish with mixed vegetables and Indian spices.",
        time: "50 mins",
        difficulty: "Medium",
        ingredients: [
            { ingredient: "Basmati rice", measure: "2 cups" },
            { ingredient: "Mixed vegetables", measure: "3 cups (carrots, peas, beans, cauliflower)" },
            { ingredient: "Onion", measure: "2 large, sliced" },
            { ingredient: "Tomatoes", measure: "2 medium, chopped" },
            { ingredient: "Ginger paste", measure: "1 tablespoon" },
            { ingredient: "Garlic paste", measure: "1 tablespoon" },
            { ingredient: "Green chilies", measure: "2-3, slit" },
            { ingredient: "Biryani masala", measure: "2 tablespoons" },
            { ingredient: "Turmeric powder", measure: "1/2 teaspoon" },
            { ingredient: "Garam masala", measure: "1 teaspoon" },
            { ingredient: "Mint leaves", measure: "1/2 cup" },
            { ingredient: "Cilantro", measure: "1/2 cup" },
            { ingredient: "Ghee or oil", measure: "4 tablespoons" },
            { ingredient: "Salt", measure: "To taste" },
            { ingredient: "Saffron strands", measure: "A few (optional)" },
            { ingredient: "Milk", measure: "1/4 cup (for saffron)" }
        ],
        instructions: [
            "Wash and soak the basmati rice for 30 minutes, then drain.",
            "Heat ghee or oil in a large pan and sauté the onions until golden brown.",
            "Add ginger paste, garlic paste, and green chilies. Cook for 2 minutes.",
            "Add the vegetables and cook for 5-7 minutes until they're slightly tender.",
            "Add tomatoes, biryani masala, turmeric, and salt. Cook until the tomatoes are soft.",
            "In a separate pot, bring water to boil and cook the rice until it's 70% done. Drain the water.",
            "Layer the partially cooked rice over the vegetable mixture.",
            "Sprinkle garam masala, mint leaves, and cilantro over the rice.",
            "If using saffron, soak it in warm milk and drizzle over the rice.",
            "Cover the pot with a tight-fitting lid and cook on low heat for 20-25 minutes (dum cooking).",
            "Let it rest for 10 minutes before serving. Fluff with a fork and serve hot with raita."
        ]
    },
    {
        id: 7,
        title: "Palak Paneer",
        category: "lunch",
        image: "image/palak-panner.webp",
        description: "Creamy spinach curry with soft Indian cottage cheese cubes.",
        time: "35 mins",
        difficulty: "Easy",
        ingredients: [
            { ingredient: "Spinach", measure: "500g, washed and chopped" },
            { ingredient: "Paneer", measure: "200g, cubed" },
            { ingredient: "Onion", measure: "1 medium, chopped" },
            { ingredient: "Tomatoes", measure: "2 medium, chopped" },
            { ingredient: "Ginger", measure: "1-inch piece, chopped" },
            { ingredient: "Garlic", measure: "4-5 cloves, chopped" },
            { ingredient: "Green chilies", measure: "2, chopped" },
            { ingredient: "Cumin seeds", measure: "1 teaspoon" },
            { ingredient: "Turmeric powder", measure: "1/2 teaspoon" },
            { ingredient: "Garam masala", measure: "1 teaspoon" },
            { ingredient: "Heavy cream", measure: "2 tablespoons" },
            { ingredient: "Oil or ghee", measure: "2 tablespoons" },
            { ingredient: "Salt", measure: "To taste" }
        ],
        instructions: [
            "Blanch the spinach in boiling water for 2-3 minutes, then drain and cool.",
            "Grind the spinach, ginger, garlic, and green chilies to a smooth paste.",
            "Heat oil or ghee in a pan and add cumin seeds. When they start to crackle, add the chopped onions.",
            "Sauté the onions until they're golden brown, then add the chopped tomatoes.",
            "Cook until the tomatoes are soft, then add turmeric powder and salt.",
            "Add the spinach paste and cook for 5-7 minutes until the mixture thickens.",
            "Add garam masala and heavy cream, and simmer for 2-3 minutes.",
            "Gently fold in the paneer cubes and cook for another 2 minutes.",
            "Serve hot with naan or rice."
        ]
    },
    // South Indian Dishes
    {
        id: 8,
        title: "Masala Dosa",
        category: "breakfast",
        image: "image/dosa.webp",
        description: "Crispy rice crepe filled with spiced potato filling, served with chutneys.",
        time: "40 mins",
        difficulty: "Medium",
        ingredients: [
            { ingredient: "Rice", measure: "2 cups" },
            { ingredient: "Urad dal", measure: "1/2 cup" },
            { ingredient: "Fenugreek seeds", measure: "1/4 teaspoon" },
            { ingredient: "Salt", measure: "To taste" },
            { ingredient: "Potatoes", measure: "4 medium, boiled and mashed" },
            { ingredient: "Onion", measure: "1 large, finely chopped" },
            { ingredient: "Green chilies", measure: "2-3, chopped" },
            { ingredient: "Curry leaves", measure: "8-10 leaves" },
            { ingredient: "Mustard seeds", measure: "1/2 teaspoon" },
            { ingredient: "Turmeric powder", measure: "1/4 teaspoon" },
            { ingredient: "Oil", measure: "2 tablespoons" },
            { ingredient: "Coconut chutney", measure: "For serving" },
            { ingredient: "Sambar", measure: "For serving" }
        ],
        instructions: [
            "Soak rice and urad dal separately for 6-8 hours.",
            "Grind urad dal with fenugreek seeds to a smooth paste.",
            "Grind rice to a slightly coarse paste.",
            "Mix both pastes together, add salt, and let ferment overnight.",
            "For the potato filling: Heat oil in a pan and add mustard seeds.",
            "When they crackle, add curry leaves, green chilies, and onions.",
            "Sauté until onions are golden, then add turmeric powder and salt.",
            "Add the mashed potatoes and mix well. Cook for 2-3 minutes and set aside.",
            "To make dosa: Heat a non-stick pan and pour a ladleful of batter.",
            "Spread in a circular motion to make a thin crepe.",
            "Drizzle oil around the edges and cook until golden brown.",
            "Place potato filling on one half and fold the other half over it.",
            "Serve hot with coconut chutney and sambar."
        ]
    },
    {
        id: 9,
        title: "Idli Sambar",
        category: "breakfast",
        image: "image/idle.webp",
        description: "Soft steamed rice cakes served with lentil-based vegetable stew.",
        time: "30 mins",
        difficulty: "Easy",
        ingredients: [
            { ingredient: "Idli batter", measure: "4 cups" },
            { ingredient: "Toor dal", measure: "1/2 cup" },
            { ingredient: "Mixed vegetables", measure: "1 cup (carrots, beans, peas)" },
            { ingredient: "Onion", measure: "1 medium, chopped" },
            { ingredient: "Tomatoes", measure: "2 medium, chopped" },
            { ingredient: "Tamarind pulp", measure: "1 tablespoon" },
            { ingredient: "Sambar powder", measure: "2 tablespoons" },
            { ingredient: "Mustard seeds", measure: "1/2 teaspoon" },
            { ingredient: "Cumin seeds", measure: "1/2 teaspoon" },
            { ingredient: "Curry leaves", measure: "8-10 leaves" },
            { ingredient: "Asafoetida", measure: "A pinch" },
            { ingredient: "Oil", measure: "2 tablespoons" },
            { ingredient: "Salt", measure: "To taste" },
            { ingredient: "Coconut chutney", measure: "For serving" }
        ],
        instructions: [
            "For idli: Grease the idli molds with oil.",
            "Pour the idli batter into the molds and steam for 10-12 minutes until done.",
            "For sambar: Cook toor dal with turmeric powder until soft.",
            "Heat oil in a pan and add mustard seeds, cumin seeds, and curry leaves.",
            "When the seeds crackle, add onions and sauté until golden.",
            "Add tomatoes and cook until soft.",
            "Add the mixed vegetables and cook for 5-7 minutes.",
            "Add the cooked dal, tamarind pulp, sambar powder, and salt.",
            "Simmer for 10-15 minutes until the vegetables are tender.",
            "Serve hot idlis with sambar and coconut chutney."
        ]
    },
    {
        id: 10,
        title: "Rasam",
        category: "lunch",
        image: "image/rasam.webp",
        description: "Spicy and tangy South Indian soup made with tamarind and tomatoes.",
        time: "25 mins",
        difficulty: "Easy",
        ingredients: [
            { ingredient: "Tamarind", measure: "Small lemon-sized ball" },
            { ingredient: "Tomatoes", measure: "2 medium, chopped" },
            { ingredient: "Onion", measure: "1 medium, chopped" },
            { ingredient: "Garlic", measure: "4-5 cloves, crushed" },
            { ingredient: "Green chilies", measure: "2, slit" },
            { ingredient: "Curry leaves", measure: "8-10 leaves" },
            { ingredient: "Mustard seeds", measure: "1/2 teaspoon" },
            { ingredient: "Cumin seeds", measure: "1/2 teaspoon" },
            { ingredient: "Asafoetida", measure: "A pinch" },
            { ingredient: "Turmeric powder", measure: "1/4 teaspoon" },
            { ingredient: "Rasam powder", measure: "2 tablespoons" },
            { ingredient: "Oil", measure: "2 tablespoons" },
            { ingredient: "Salt", measure: "To taste" },
            { ingredient: "Cilantro", measure: "For garnish" }
        ],
        instructions: [
            "Soak tamarind in warm water for 15-20 minutes, then extract the pulp.",
            "Heat oil in a pan and add mustard seeds, cumin seeds, and curry leaves.",
            "When the seeds crackle, add onions and sauté until golden.",
            "Add garlic, green chilies, and tomatoes. Cook until tomatoes are soft.",
            "Add tamarind pulp, turmeric powder, rasam powder, and salt.",
            "Add 4 cups of water and bring to a boil.",
            "Simmer for 10-15 minutes until the flavors are well combined.",
            "Garnish with cilantro and serve hot with rice or as a soup."
        ]
    },
    {
        id: 11,
        title: "Upma",
        category: "breakfast",
        image: "image/upma.webp",
        description: "Savory semolina dish with vegetables and spices, popular breakfast item.",
        time: "20 mins",
        difficulty: "Easy",
        ingredients: [
            { ingredient: "Semolina (Rava)", measure: "1 cup" },
            { ingredient: "Onion", measure: "1 medium, finely chopped" },
            { ingredient: "Green chilies", measure: "2-3, chopped" },
            { ingredient: "Ginger", measure: "1-inch piece, grated" },
            { ingredient: "Curry leaves", measure: "8-10 leaves" },
            { ingredient: "Mustard seeds", measure: "1/2 teaspoon" },
            { ingredient: "Urad dal", measure: "1 teaspoon" },
            { ingredient: "Chana dal", measure: "1 teaspoon" },
            { ingredient: "Cashews", measure: "10-12, broken" },
            { ingredient: "Mixed vegetables", measure: "1/2 cup (carrots, peas, beans)" },
            { ingredient: "Oil", measure: "2 tablespoons" },
            { ingredient: "Salt", measure: "To taste" },
            { ingredient: "Cilantro", measure: "For garnish" },
            { ingredient: "Lemon juice", measure: "1 teaspoon" }
        ],
        instructions: [
            "Dry roast the semolina in a pan until it turns light golden and aromatic. Set aside.",
            "Heat oil in a pan and add mustard seeds, urad dal, chana dal, and cashews.",
            "When the dals turn golden, add curry leaves, green chilies, and ginger.",
            "Add onions and sauté until golden brown.",
            "Add the mixed vegetables and cook for 2-3 minutes.",
            "Add 2 1/2 cups of water and salt, and bring to a boil.",
            "Gradually add the roasted semolina, stirring continuously to avoid lumps.",
            "Cook on low heat for 3-4 minutes until the upma is done.",
            "Garnish with cilantro and drizzle with lemon juice before serving."
        ]
    },
    {
        id: 12,
        title: "Gulab Jamun",
        category: "dessert",
        image: "image/gulab-jamun.webp",
        description: "Sweet milk-based dessert balls soaked in sugar syrup.",
        time: "40 mins",
        difficulty: "Medium",
        ingredients: [
            { ingredient: "Milk powder", measure: "1 cup" },
            { ingredient: "All-purpose flour", measure: "1/4 cup" },
            { ingredient: "Ghee or butter", measure: "2 tablespoons, melted" },
            { ingredient: "Milk", measure: "1/4 cup" },
            { ingredient: "Baking soda", measure: "1/4 teaspoon" },
            { ingredient: "Sugar", measure: "2 cups" },
            { ingredient: "Water", measure: "2 cups" },
            { ingredient: "Cardamom powder", measure: "1/4 teaspoon" },
            { ingredient: "Rose water", measure: "1 teaspoon" },
            { ingredient: "Oil", measure: "For deep frying" }
        ],
        instructions: [
            "For the sugar syrup: In a pan, combine sugar and water. Bring to a boil and simmer until slightly thickened.",
            "Add cardamom powder and rose water to the syrup. Keep warm.",
            "For the jamun dough: Mix milk powder, flour, and baking soda in a bowl.",
            "Add melted ghee and gradually add milk to form a soft dough. Let it rest for 10 minutes.",
            "Shape the dough into small, smooth balls (about 1-inch diameter).",
            "Heat oil in a deep pan over medium heat.",
            "Fry the balls in batches until they turn golden brown, stirring gently.",
            "Drain on paper towels, then transfer to the warm sugar syrup.",
            "Let the jamuns soak in the syrup for at least 2 hours before serving.",
            "Serve warm or at room temperature."
        ]
    }
];

// DOM Elements
const recipesContainer = document.getElementById('recipesContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryButtons = document.querySelectorAll('.category-btn');
const recipeModal = document.getElementById('recipeModal');
const closeModal = document.querySelector('.close-modal');

// Modal Elements
const modalTitle = document.getElementById('modalTitle');
const modalTime = document.getElementById('modalTime');
const modalDifficulty = document.getElementById('modalDifficulty');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalIngredients = document.getElementById('modalIngredients');
const modalInstructions = document.getElementById('modalInstructions');
const modalSource = document.getElementById('modalSource');
const modalYoutube = document.getElementById('modalYoutube');

// Function to create recipe card
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-meta">
                <span>Time: ${recipe.time}</span>
                <span>Difficulty: ${recipe.difficulty}</span>
            </div>
        </div>
    `;
    
    // Add click event to show recipe details
    card.addEventListener('click', () => {
        showRecipeDetails(recipe);
    });
    
    return card;
}

// Function to display recipes
function displayRecipes(recipesToShow) {
    recipesContainer.innerHTML = '';
    
    if (recipesToShow.length === 0) {
        recipesContainer.innerHTML = '<p class="no-results">No recipes found. Try a different search or category.</p>';
        return;
    }
    
    recipesToShow.forEach(recipe => {
        recipesContainer.appendChild(createRecipeCard(recipe));
    });
}

// Function to filter recipes
function filterRecipes(category = 'all', searchTerm = '') {
    return recipes.filter(recipe => {
        let matchesCategory = false;
        
        if (category === 'all') {
            matchesCategory = true;
        } else if (category === 'indian') {
            // Filter for Indian and South Indian dishes
            matchesCategory = recipe.title.toLowerCase().includes('chicken') || 
                             recipe.title.toLowerCase().includes('biryani') || 
                             recipe.title.toLowerCase().includes('paneer') || 
                             recipe.title.toLowerCase().includes('dosa') || 
                             recipe.title.toLowerCase().includes('idli') || 
                             recipe.title.toLowerCase().includes('rasam') || 
                             recipe.title.toLowerCase().includes('upma') || 
                             recipe.title.toLowerCase().includes('gulab');
        } else {
            matchesCategory = recipe.category === category;
        }
        
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

// Function to show recipe details in modal
function showRecipeDetails(recipe) {
    // Set basic recipe details
    modalTitle.textContent = recipe.title;
    modalTime.textContent = `Time: ${recipe.time}`;
    modalDifficulty.textContent = `Difficulty: ${recipe.difficulty}`;
    modalImage.src = recipe.image;
    modalImage.alt = recipe.title;
    modalDescription.textContent = recipe.description;
    
    // Clear previous ingredients and instructions
    modalIngredients.innerHTML = '';
    modalInstructions.innerHTML = '';
    
    // If recipe has ingredients and instructions from API
    if (recipe.ingredients && recipe.ingredients.length > 0) {
        recipe.ingredients.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.measure} ${item.ingredient}`;
            modalIngredients.appendChild(li);
        });
    } else {
        // Add placeholder for local recipes
        const li = document.createElement('li');
        li.textContent = 'Ingredients not available for this recipe.';
        modalIngredients.appendChild(li);
    }
    
    if (recipe.instructions && recipe.instructions.length > 0) {
        recipe.instructions.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            modalInstructions.appendChild(li);
        });
    } else {
        // Add placeholder for local recipes
        const li = document.createElement('li');
        li.textContent = 'Instructions not available for this recipe.';
        modalInstructions.appendChild(li);
    }
    
    // Set source and YouTube links if available
    if (recipe.source) {
        modalSource.href = recipe.source;
        modalSource.style.display = 'inline-block';
    } else {
        modalSource.style.display = 'none';
    }
    
    if (recipe.youtube) {
        modalYoutube.href = recipe.youtube;
        modalYoutube.style.display = 'inline-block';
    } else {
        modalYoutube.style.display = 'none';
    }
    
    // Show the modal
    recipeModal.style.display = 'block';
}

// Function to search recipes using API
async function searchRecipesWithApi(query) {
    // Show loading indicator
    recipesContainer.innerHTML = '<div class="loading">Searching for recipes</div>';
    
    try {
        // Search for recipes using the API
        const apiRecipes = await window.recipeApi.searchRecipesByName(query);
        
        if (apiRecipes.length === 0) {
            recipesContainer.innerHTML = '<p class="no-results">No recipes found. Try a different search term.</p>';
            return;
        }
        
        // Format API recipes to match our app's format
        const formattedRecipes = apiRecipes.map(apiRecipe => window.recipeApi.formatApiRecipe(apiRecipe));
        
        // Display the formatted recipes
        displayApiRecipes(formattedRecipes);
    } catch (error) {
        console.error('Error searching recipes:', error);
        recipesContainer.innerHTML = '<p class="no-results">Error searching recipes. Please try again.</p>';
    }
}

// Function to display API recipes
function displayApiRecipes(apiRecipes) {
    recipesContainer.innerHTML = '';
    
    // Create a section for API results
    const apiResultsSection = document.createElement('div');
    apiResultsSection.className = 'api-results';
    
    const apiResultsTitle = document.createElement('h3');
    apiResultsTitle.textContent = 'Search Results';
    apiResultsSection.appendChild(apiResultsTitle);
    
    // Create a container for the recipe cards
    const apiRecipesContainer = document.createElement('div');
    apiRecipesContainer.className = 'recipes-container';
    
    // Add recipe cards
    apiRecipes.forEach(recipe => {
        apiRecipesContainer.appendChild(createRecipeCard(recipe));
    });
    
    apiResultsSection.appendChild(apiRecipesContainer);
    recipesContainer.appendChild(apiResultsSection);
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm === '') {
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        const filteredRecipes = filterRecipes(activeCategory);
        displayRecipes(filteredRecipes);
        return;
    }
    
    // Search using API
    searchRecipesWithApi(searchTerm);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm === '') {
            const activeCategory = document.querySelector('.category-btn.active').dataset.category;
            const filteredRecipes = filterRecipes(activeCategory);
            displayRecipes(filteredRecipes);
            return;
        }
        
        // Search using API
        searchRecipesWithApi(searchTerm);
    }
});

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.dataset.category;
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm === '') {
            const filteredRecipes = filterRecipes(category);
            displayRecipes(filteredRecipes);
        } else {
            // If there's a search term, search using API
            searchRecipesWithApi(searchTerm);
        }
    });
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
    recipeModal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        recipeModal.style.display = 'none';
    }
});

// Initial display
displayRecipes(recipes); 