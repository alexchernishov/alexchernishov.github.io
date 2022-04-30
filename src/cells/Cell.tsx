import React from 'react';
import {Button} from '@mui/material';
import {useCellStyles} from "./styles";
import {openSell} from "./actions";
import {useDispatch} from "react-redux";
type CellType={
    cell:string|number,
    rowIndex:number,
    index:number,

}
const Cell=(props:CellType)=>{

    const {cell,rowIndex,index} = props;
    const classes = useCellStyles();
    const dispatch = useDispatch();

    const open=()=>{
        if(marked){
            return;
        }

        dispatch(openSell(index,rowIndex));
    }
    const [marked,setMarked]=React.useState(false);


    const getCellColor= (cell: string | number):string=>{
        switch (cell){
            case '*':
                return '#f00';
            case '0':
                return '#fff';
            case '1':
                return '#000';
            case '2':
                return '#c74141';
            case '3':
                return '#028502';
            case '4':
                return '#00f';
            case '5':
                return '#ff0';
            case '6':
                return '#0ff';
            case '7':
                return '#f0f';
            case '8':
                return '#f0f';
            default:
                return '#fff';
        }
    }



    if (cell !== '□') {
        return (
            <Button
                variant="outlined"
                className={`${classes.cell} ${classes.cellOpened}`}
                style={{color:getCellColor(cell)}}
                onClick={open}
            >
                <p className={classes.text}>{cell!=='0' ? cell : ''}</p>
            </Button>
        );
    }

    return (
        <Button
            variant="outlined"
            color="primary"
            onClick={() => open()}
            className={classes.cell}
            onContextMenu={(e)=>{
                e.preventDefault();
                setMarked(!marked);
            }}
        >{marked && '?'}</Button>
    );
}
export default Cell;