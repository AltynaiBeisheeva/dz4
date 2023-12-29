import {legacy_createStore as createStore} from "redux";

const initialState = {
    count:10,

};

 export const countReducer = (state = initialState,action)=>{
    switch (action.type){
        case "INCREASE_COUNTER":
            return {...state,count: state.count+1}
        case "DECREASE_COUNTER":
            return state
        default:
            return state

    }
}

const increaseCounter = () =>{
    return {type: "INCREASE_COUNTER"}}


