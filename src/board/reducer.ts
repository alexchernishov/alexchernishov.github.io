import {Action} from "../store";

const initialState = {
    map: false,
    size: 0,
    connected: false,
    loading: false,
    lose: false,
    win: false,
}

const boardReducer =  function (state = initialState, action:Action) {
    switch (action.type) {
        case "SET_CONNECTED":
            return {
                ...state,
                connected: action.payload,
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload,
            };
        case "SET_LOSE":
            return {
                ...state,
                lose: action.payload,
            };
        case "SET_SIZE":
            return {
                ...state,
                size: action.payload,
            };
        case "SET_MAP":
            return {
                ...state,
                map: !!action.payload ,
            };
        case "SET_WIN":
            return {
                ...state,
                win: action.payload ,
            };
        default:
            return state;
    }
}
export default boardReducer;