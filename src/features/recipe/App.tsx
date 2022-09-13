import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setFood } from "./recipeSlice";
import Recipe from "../../components/Recipe";
import {v4 as uuidv4} from "uuid";

export type IngridientProps = {
  text: string,
  weight: number
}

export type RecipeProps = {
  label: string, 
  image: string, 
  url: string,
  ingredients: IngridientProps[]
}

export type RecipesProps = {
    recipe: {
      recipes: RecipeProps[],
      food: string,
      isLoading: boolean,
      error: string,
    }
}

const App = () => {
  const {recipes} = useSelector((state: RecipesProps) => state.recipe);
  const dispatch = useDispatch();
  const [food, getFood] = useState("");

  const onChangeInput = (e) => {
    getFood(e.target.value);
    dispatch(setFood(food));
  }
  useEffect(() => {
    dispatch(fetchUsers());
  }, [food]);
  
  const onSubmit = (e) => {
    e.preventDefault();
  } 

  return (
    <div className="app">
      <h1>Food Searching App</h1>
      <form className="searching-form" onSubmit={onSubmit}>
        <input type="text" autoComplete="off" placeholder="Search a recipe" onChange={(e) =>onChangeInput(e)} value={food} />
        <input type="submit" value="Get Me A Recipe" />
      </form>
      <div className="recipes">
        {
          recipes.length>0 && recipes.map( recipe => (
            <Recipe recipe={recipe} key={uuidv4()} />
          ))
        }
      </div>
    </div>
  );
};

export default App;

//{isLoading && <p>Подгружаем данные<p/>}
//{error && <Warning warning={error} />}