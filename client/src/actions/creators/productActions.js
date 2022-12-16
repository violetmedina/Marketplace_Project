import actionTypes from '../actionTypes';

export const add_fetched_products = (data) => {
    return {
        type: actionTypes.ADD_FETCHED_PRODUCTS ,
        payload: data

    }
}