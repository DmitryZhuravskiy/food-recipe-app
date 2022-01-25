import React, {useState, FC} from "react";
import RecipeDetails from "./RecipeDetails";
import { RecipesType } from '../types/types';

interface RecipeProps {
    recipe: RecipesType;
    onClick?: ()=>void;
}

const Recipe : FC<RecipeProps> = ({ recipe }) => {
    const [show, setShow] = useState(false);
    const { label, image, url, ingredients } = recipe.recipe;

    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target="_blank" rel="noopener noreferrer">
                URL
      </a>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    );
};

export default Recipe;