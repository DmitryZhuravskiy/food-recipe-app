import { CHANGE_FOOD_TYPE, GET_RECIPES, APP_ID, APP_KEY } from './types';
import axios from 'axios';

export const onChange = (e) => {
    return {
        type: CHANGE_FOOD_TYPE,
        food: e.target.value
    }
};

export const onSubmit = (e, data) => {
    e.preventDefault();
    return {
        type: GET_RECIPES,
        recipes: data,
        food: ""
    }
};

export const getData = (e, food) => async dispatch => {
    e.preventDefault();
    const url = food !== '' ? `https://api.edamam.com/search?q=${ food }&app_id=${ APP_ID }&app_key=${ APP_KEY }` :
        `https://api.edamam.com/search?q=pizza&app_id=${ APP_ID }&app_key=${ APP_KEY }`;
    try {
        const res = await axios({
            baseURL: url,
            method: "GET"
        })
        dispatch(onSubmit(e, res.data.hits))
    } catch (err) {
        throw (err);
    }
}
