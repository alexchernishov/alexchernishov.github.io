import Cells from "../cells";
import {Grid} from "@mui/material";


type RowType= {
    row: [string|number],
    index: number,
}

const Row=(props:RowType)=>{
    const {
        row,
        index,
    }=props;


    return <Grid
        direction="column"
        justifyContent="center"
        alignItems="center"
        container>
        <Cells row={row} rowIndex={index}/>
    </Grid>
}
export default Row;