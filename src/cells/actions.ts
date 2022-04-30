


export const initMap = (size:number) => {
    return {
        type: "SEND_MESSAGE",
        payload: {
            message: `new ${size}`
        }
    }
};
export const getMap = () => {
    return {
        type: "SEND_MESSAGE",
        payload: {
            message: "map"
        }
    }
};
export const setMap = (map:object) => {
    return {
        type: "SET_MAP",
        payload: map
    }
};

export const setConnected = (data:boolean) => {
    return {
        type: "SET_CONNECTED",
        payload: data
    }
};