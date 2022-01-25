import React, {FC} from "react";
import { v4 as uuidv4 } from "uuid";
import { ingredientType } from '../types/types';

interface RecipeDetailsProps {
    ingredients: Array<ingredientType>;
}

const RecipeDetails: FC<RecipeDetailsProps> = ({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            <ul key={uuidv4()} className="ingredient-list">
                <li className="ingredient-text">{ingredient.text}</li>
                <li className="ingredient-weight">Weight - {ingredient.weight}</li>
            </ul>
        );
    });
};

export default RecipeDetails;