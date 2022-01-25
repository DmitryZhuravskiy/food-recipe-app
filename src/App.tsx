import React, {useState } from "react";
import './App.css'; 
import Axios from "axios";
import Recipe from "./components/Recipe";
import Warning from "./components/Warning"
import {v4 as uuidv4} from "uuid";

const APP_ID = "2e98ff78";
const APP_KEY = "5a141752ab6965459e484a19007b0f94";

const App = () => {
  const [food, getFood] = useState<string>("");
  const [recipes, getRecipes] = useState<Array<any>>([]);
  const [warning, setWarning] = useState<string>("");
  const url = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const onChange = (e:  React.ChangeEvent<HTMLInputElement> ) => {
    getFood(e.target.value);
  }

  const getData = async () => {
    if (food !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setWarning("No food with such name");
      }
      getRecipes(result.data.hits);
      getFood("");
      setWarning("");
    } else {
      setWarning("Please fill the form");
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="app">
      {warning!=="" && <Warning warning={warning} />}
      <h1>Food Searching App</h1>
      <form className="searching-form" onSubmit={onSubmit}>
        <input type="text" autoComplete="off" placeholder="Search a recipe" onChange={onChange} value={food} />
        <input type="submit" value="Get Me A Recipe" />
      </form>
      <div className="recipes">
        {
          recipes!==[] && recipes.map( recipe => (
            <Recipe recipe={recipe} key={uuidv4()} />
          ))
        }
      </div>
    </div>
  )
}

export default App;
