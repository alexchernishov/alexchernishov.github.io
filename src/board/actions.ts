export const initMap = (size:number) => {
    return {
        type: "SEND_MESSAGE",
        payload: {
            message: `new ${size}`
        }
    }
};
export const setSize = (size:number) => {
    return {
        type: "SET_SIZE",
        payload: {
            message: size
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
export const setMap = (map:object|boolean) => {
    return {
        type: "SET_MAP",
        payload: map
    }
};

export const setLose = (payload:boolean) => {
    return {
        type: "SET_LOSE",
        payload: payload
    }
};

export const setConnected = (data:boolean) => {
    return {
        type: "SET_CONNECTED",
        payload: data
    }
};
export const setLoading = (data:boolean) => {
    return {
        type: "SET_LOADING",
        payload: data
    }
};
export const setWin = (data:boolean|string) => {
    return {
        type: "SET_WIN",
        payload: data
    }
};

