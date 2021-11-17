import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, cleanFood } from "./recipeSlice";
import Recipe from "../../components/Recipe";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const recipes = useSelector((state) => state.recipe.recipes);
  const isLoading = useSelector((state) => state.recipe.isLoading);
  const error = useSelector((state) => state.recipe.error);
  const dispatch = useDispatch();
  const food = useSelector((state) => state.recipe.food);

  const onChange = (e) => {
    dispatch(fetchUsers(e.target.value));
    console.log(food);
    console.log(recipes);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(cleanFood(e));
  };

  return (
    <div className="app">
      <h1>Food Searching App</h1>
      <form className="searching-form" onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search a recipe"
          onChange={onChange}
          value={food}
        />
        <input type="submit" value="Clean a recipe input" />
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe.recipe} key={recipe.recipe.url} />
        ))}
      </div>
    </div>
  );
};

export default App;

//{isLoading && <p>Подгружаем данные<p/>}
//{error && <Warning warning={error} />}
