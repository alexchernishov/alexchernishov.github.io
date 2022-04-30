import {Button, Grid,ButtonGroup} from "@mui/material";
import {useStyles} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {initMap, setLoading, setSize} from "../board/actions";


const MapSelector=()=>{

    const dispatch = useDispatch();
    const connected = useSelector((state:RootState)=>state.board.connected);
    const classes = useStyles();
    const createMap=(size:number)=>{
        if(connected){
            dispatch(setLoading(true));
            dispatch(initMap(size));
            dispatch(setSize(size));
        }
    }

    const sizes = [1,2,3,4];

    return <Grid container
                 direction="row"
                 justifyContent="center"
                 alignItems="center">

        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {sizes.map(size=>
                    <Button key={size} onClick={()=>createMap(size)} className={classes.button}>{size}</Button>
                )
            }
        </ButtonGroup>
    </Grid>
}
export default MapSelector;