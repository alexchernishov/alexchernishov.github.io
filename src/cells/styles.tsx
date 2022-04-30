import {makeStyles} from '@mui/styles';

export const useCellStyles = makeStyles({
    cell: {
        width: 30,
        height: 30,
        minWidth: 30,
        borderColor: '#eeeeee #999999 #999999 #eeeeee',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: '0px !important',
        backgroundColor: '#cccccc',
    },
    cellOpened:{
        backgroundColor: '#cccccc',
        borderWidth: 1,
        borderColor: '#999999',
    },
    text: {
        fontWeight: 'bold',
        margin: 0,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});