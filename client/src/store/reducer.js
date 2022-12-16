import * as actionTypes from '../actions/actionTypes.js'
const initialState = {
    products:[],
    counter:0
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.INCREMENT:
            return{
                ...state,
                counter: state.counter +1
            }
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter: state.counter -1
            }
        case actionTypes.ADD_FETCHED_PRODUCTS:
            return{
                ...state,
                products: state.products.concat(action.payload)
            }
        default:
            return state
    }

}

export default reducer