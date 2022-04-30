import {Action} from "../store";

const initialState = {
    items: [],
}

const rowReducer =  function (state = initialState, action:Action) {
    switch (action.type) {
        case "SET_MAP":
            return {
                ...state,
                items: action.payload ?   action.payload
                    .split('\n')
                    .filter((item:string)=>item.length>0)
                    .map((item:string)=>item.split('').filter((item:string)=>item.length>0) )
                    :[]
            };
        default:
            return state;
    }
}
export default rowReducer;