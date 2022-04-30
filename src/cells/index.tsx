
import React from 'react';
import Cell from "./Cell";

type CellsType={
    row:[string|number],
    rowIndex:number,
}

const Cells=(props:CellsType)=>{
    const {row,rowIndex}=props;
    return <div>{row.map((cell,key)=>
        <Cell
            key={key}
            rowIndex={rowIndex}
            index={key}
            cell={cell}/>
    )}</div>

}
export default Cells;