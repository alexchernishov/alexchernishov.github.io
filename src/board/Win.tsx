import useStyles from "./styles";
import {Alert} from "@mui/material";

const Win=()=>{





    const classes = useStyles();


    return <div className={classes.lose}>
        <Alert severity="success">You win</Alert>
    </div>
}
export default Win;