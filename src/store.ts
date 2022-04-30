import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import boardReducer from "./board/reducer";
import rowsReducer from "./rows/reducer";
import { combineReducers } from 'redux';
import initWs from "./initWs";
import handleNewMessage from "./board/sagas";
let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
    reducer: combineReducers({
        board:boardReducer,
        rows:rowsReducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
})

const socket = initWs(store.dispatch)

sagaMiddleware.run(handleNewMessage, {socket})

export type Action = {
    type: string,
    payload: any,
}


export interface RootState {
    board: {
        map:boolean|object,
        connected:boolean,
        loading:boolean,
        size:number,
        lose:boolean,
        win:boolean|string,
    }
    rows: {
        items:[string][],
    }
}
