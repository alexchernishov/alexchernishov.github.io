
export const openSell = (column:number,row:number,) => {
    return {
        type: "SEND_MESSAGE",
        payload: {
            message: `open ${column} ${row}`,
        }
    }
};