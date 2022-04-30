import {Action} from "../store";

const initialState = {
    map: false,
    connected: false,
}


export interface RootState {
    board: {
        map:boolean|object,
        connected:boolean,
    }
}

export default function (state = initialState, action:Action) {
    switch (action.type) {
        case "SET_CONNECTED":
            return {
                ...state,
                connected: action.payload,
            };
        case "SET_MAP":
            return {
                ...state,
                map: action.payload,
            };
        default:
            return state;
    }
}