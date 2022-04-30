import useStyles from "./styles";
import {Alert} from "@mui/material";

const Lose=()=>{





    const classes = useStyles();


    return <div className={classes.lose}>
        <Alert severity="error">You lost</Alert>
    </div>
}
export default Lose;