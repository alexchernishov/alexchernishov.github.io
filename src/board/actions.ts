


export const initMap = () => {
    return {
        type: "SEND_MESSAGE",
        payload: {
            message: "map 1"
        }
    }
};

export const setConnected = (data:boolean) => {
    return {
        type: "SET_CONNECTED",
        payload: data
    }
};