import Row from "./Row";
import {Grid} from "@mui/material";
import Lose from "../board/Lose";
import Win from "../board/Win";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store";


type RowsType= {
    rows: [number|string][]
}

const Rows=(props:RowsType)=>{
    const {
        rows
    }=props;
    const lose = useSelector((state:RootState)=>state.board.lose);
    const win = useSelector((state:RootState)=>state.board.win);


    return <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        container
    >
        {lose && <Lose/>}
        {win && <Win/>}

        {rows.map((row,key)=>
        <Row key={key} index={key} row={row}/>)}
    </Grid>
}
export default Rows;