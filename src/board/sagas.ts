import { takeEvery } from 'redux-saga/effects'
import {Action} from "../store";

type Params = {
    socket: WebSocket
}

const handleNewMessage = function* handleNewMessage(params:Params) {
    yield takeEvery("SEND_MESSAGE", (action:Action) => {
        params.socket.send(action.payload.message)
    })
}

export default handleNewMessage