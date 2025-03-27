import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe, onDelete }) {
  if (!recipe) {
    return <p>Error: No recipes here.</p>;
  }

  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <p><strong>Calories:</strong> {recipe.calories}</p>
      <img src={recipe.image} alt={recipe.name} style={{ width: "200px" }} />
      <p><strong>Servings:</strong> {recipe.servings}</p>

      <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
        <button style={{ marginRight: "10px", padding: "5px" }}>
          🔍 See Details
        </button>
      </Link>

      <Link to={`/edit/${recipe.id}`} style={{ textDecoration: "none" }}>
        <button style={{ marginRight: "10px", padding: "5px", backgroundColor: "blue", color: "white" }}>
          ✏️ Edit
        </button>
      </Link>

      <button 
        onClick={() => onDelete(recipe.id)} 
        style={{ backgroundColor: "red", color: "white", padding: "5px", cursor: "pointer" }}
      >
        🗑️ Delete
      </button>
    </div>
  );
}

export default RecipeCard;
