import { APP_ID, APP_KEY, CHANGE_FOOD_TYPE, GET_RECIPES } from '../actions/types';
import initialState from './initialState'

export default function recipesReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FOOD_TYPE:
            return {
                ...state,
                food: action.food,
                urlAdress: `https://api.edamam.com/search?q=${action.food}&app_id=${APP_ID}&app_key=${APP_KEY}`,
            };
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.recipes,
            };
        default:
            return state;
    }
}
