import { CHANGE_FOOD_TYPE, GET_RECIPES} from './types';
import Axios from 'axios';

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
        foor: ""
    }
};

export const getData = async (e, urlAdress) => {
    e.preventDefault();
    return (dispatch) => {
        return Axios.get(urlAdress)
            .then(response => {
                dispatch(onSubmit(e, response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};