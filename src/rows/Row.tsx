

type Rows= {
    rows: Array<any>
}

const Rows=(props:Rows)=>{
    const {
        rows
    }=props;


    return <div>{rows.map((row,key)=><Row key={key} row={row}/>)}</div>
}
export default Rows;