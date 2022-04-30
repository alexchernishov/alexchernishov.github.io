import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import Rows from "../rows";
import MapSelector from "../selector";
import {Grid, DialogTitle, LinearProgress, Button,CircularProgress} from "@mui/material";
import {setLose, setMap} from "./actions";


const Board =()=>{
    const dispatch  = useDispatch();
    const connected = useSelector((state:RootState)=>state.board.connected);
    const loading = useSelector((state:RootState)=>state.board.loading);
    const map = useSelector((state:RootState)=>state.board.map);
    const rows = useSelector((state:RootState)=>state.rows.items);

    if(!connected){
        return <LinearProgress />
    }
    if(!map){
        return  <Grid item xs={12}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <DialogTitle >Select map size</DialogTitle>
                    </Grid>
                <MapSelector/>
            </Grid>
    }


    const restart=()=>{
        dispatch(setMap(false));
        dispatch(setLose(false));
    }

    return <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop={10}
        marginBottom={10}
    >
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginTop={10}
            marginBottom={10}
        >
            <Button
                    onClick={()=>{
                        restart()
                        }
                    }
                    variant="contained"
                    color="success"
            >
                Restart
            </Button>
        </Grid>
        {loading
            ?
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                marginTop={10}
                marginBottom={10}
            >
                <CircularProgress />
            </Grid>
            :
            <Rows rows={rows}/>

        }
    </Grid>
}
export default Board;