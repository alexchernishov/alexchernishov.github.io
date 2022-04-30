import { takeEvery } from 'redux-saga/effects'

type Params = {
    socket: WebSocket
}

const handleNewMessage = function* handleNewMessage(params:Params) {
    yield takeEvery("SEND_MESSAGE", (action) => {
        console.log('SEND_MESSAGE', action)
        params.socket.send(JSON.stringify(action))
    })
}

export default handleNewMessage