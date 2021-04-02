import React from "react";
import './App.css'; 
import Recipe from "./components/Recipe";
import { v4 as uuidv4 } from "uuid";
import { connect } from 'react-redux';
import { onChange, getData } from './actions/index'

const App = ({ food, recipes, urlAdress, onChange, getData}) => {

  return (
    <div className="app">
      <h1>Food Searching App</h1>
      <form className="searching-form" onSubmit={(e, food) => getData(e, food)}>
        <input type="text" autoComplete="off" placeholder="Search a recipe" onChange={(e) => onChange(e)} value={food} />
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

const mapStateToProps = state => {
  return {
    food: state.recipes.food,
    recipes: state.recipes.recipes,
    urlAdress: state.recipes.urlAdress,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(onChange(e)),
  getData: (e, food) => dispatch(getData(e, food))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
