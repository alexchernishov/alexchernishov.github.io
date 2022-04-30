import React, {useEffect} from 'react';
import {initMap} from "./actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";


const Board =()=>{

    const dispatch = useDispatch();

    const boardState = useSelector((state:RootState)=>state.board);
    useEffect(()=>{
        if(boardState.connected){
            dispatch(initMap());
        }
    },[boardState]);

    return <div>Board</div>
}
export default Board;