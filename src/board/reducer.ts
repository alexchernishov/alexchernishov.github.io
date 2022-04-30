
const initialState = {
    isAuthenticated: false,
    previousUrl: false,
    map: false,
}

type Action = {
    type: string,
    payload: any,
    connected: any,
}

export default function (state = initialState, action:Action) {
    switch (action.type) {
        case "SET_CONNECTED":
            return {
                ...state,
                connected: action.payload,
            };
        default:
            return state;
    }
}