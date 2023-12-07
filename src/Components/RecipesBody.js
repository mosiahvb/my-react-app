// The RecipesBody
import React from 'react';
import './RecipesBody';

function RecipesBody(){
  return (
    <div className="recipes-body-container">
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          <li> {/* Creating segments for ingredients*/}
            <input type="checkbox" id="ingredient1" />
            <label htmlFor="ingredient1">1 1/2 Cup Warm water</label>
          </li>
          <li>
            <input type="checkbox" id="ingredient2" />
            <label htmlFor="ingredient2">1 Cup active sourdough starter</label>
          </li>
          <li>
            <input type="checkbox" id="ingredient3" />
            <label htmlFor="ingredient3">1/2 Cup Sugar</label>
          </li>
          <li>
            <input type="checkbox" id="ingredient4" />
            <label htmlFor="ingredient4">1 stick of butter (melted)</label>
          </li>
          <li>
            <input type="checkbox" id="ingredient5" />
            <label htmlFor="ingredient5">1 tsp. Salt</label>
          </li><li>
            <input type="checkbox" id="ingredient6" />
            <label htmlFor="ingredient6">4-5 Cup all purpose flour</label>
          </li><li>
            <input type="checkbox" id="ingredient7" />
            <label htmlFor="ingredient7"> Egg wash = 1 egg + 1 Tbsp water</label>
          </li>
        </ul>
      </div>
      <div className="instructions">
        <h3>Sourdough Dinner Rolls</h3>
        <ol> {/* Text for the Constructions */}
          <li>Step 1: In a stand mixer, add ingredients, stir until together.</li>
          <li>Step 2: knead on Medium Speed (4) Until smooth creamy, and passes the windowpane test.</li>
          <li>Step 3: Place dou in a greased bowl And cover with lid. Allow to rise overnight (8-24 hrs.)</li>
          <li>Step 4: The next day punched oh divided into 16 equal roles.</li>
          <li>Step 5: Place into greased casserole dish, rise until doubled (1-2 hrs.) Preheat oven to 375.</li>
          <li>Step 6: Brush top with egg wash.</li>
          <li>Step 7: Bake for 25 minutes until golden brown.</li>
          <li>Step 8: Top with butter. Allowed to cool and enjoy!</li>
        </ol>
      </div>
    </div>
  );
};
// Exports information to be used outside of file.
export default RecipesBody;
