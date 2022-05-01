import {Dispatch} from "@reduxjs/toolkit";
import {getMap, setConnected, setLoading, setLose, setMap, setWin} from "./board/actions";


const initWs = (dispatch:Dispatch) => {
    const url = process.env.REACT_APP_WEBSOCKET_URL==='string' ? process.env.REACT_APP_WEBSOCKET_URL :   'wss://hometask.eg1236.com/game1/';

    if(typeof WebSocket === 'undefined') {
        return false;
    }
    const socket =new WebSocket(url);
    socket.onopen = () => {
        dispatch(setConnected(true))
    }
    socket.onmessage = (event:any) => {
        const data = event.data.split(':');
        switch (true) {
            case event.data==='new: OK':
                dispatch(getMap());
                break
            case event.data.indexOf("You win")!==-1:
                dispatch(getMap());
                dispatch(setWin(data));
                break
            case event.data==='open: OK':
                dispatch(getMap());
                break
            case event.data==='open: You lose':
                dispatch(getMap())
                dispatch(setLose(true))
                break
            case data[0] && data[0]==='map':
                dispatch(setMap(data[1]));
                dispatch(setLoading(false));
                break
            default:
                break
        }
    }
    return socket;
}

export default initWs