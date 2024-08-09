document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the API
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => {
            // Access the recipes from the data
            const recipes = data.recipes;
            const recipesContainer = document.getElementById('recipes-container');

            // Check if recipes exist
            if (recipes && recipes.length > 0) {
                // Loop through the recipes and add them to the container
                recipes.forEach(recipe => {
                    const card = document.createElement('div');
                    card.classList.add('recipe-card');

                    // Create and append image
                    const img = document.createElement('img');
                    img.src = recipe.image || 'https://via.placeholder.com/200x120'; // Fallback image if none exists
                    img.alt = recipe.name;
                    card.appendChild(img);

                    // Create and append title
                    const title = document.createElement('h3');
                    title.textContent = recipe.name;
                    card.appendChild(title);

                    // Create and append description
                    const description = document.createElement('p');
                    description.textContent = recipe.description || 'No description available';
                    card.appendChild(description);

                    // Append card to the container
                    recipesContainer.appendChild(card);
                });
            } else {
                recipesContainer.innerHTML = '<p>No recipes found</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const recipesContainer = document.getElementById('recipes-container');
            recipesContainer.innerHTML = '<p>Error fetching recipes</p>';
        });
});
