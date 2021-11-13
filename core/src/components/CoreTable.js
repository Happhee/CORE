/*eslint-disable */
import React, { useState } from 'react';
import '../css/CoreTable.css'
import Unit from '../components/Unit'
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    table: {
        marginLeft: '87%',
        padding: '0.8%',
        textAlign: 'center',
        backgroundColor: '#692498',
        borderRadius: '10px',
        color: '#fff',
        fontFamily: 'esamanruLight',
        fontWeight: 'normal',
        '&:hover': {
            background: "#E0BFE6",
            color: "#8154A0"
        }
    }
});
function CoreTable(props) {
    let [unit, setUnit] = useState(props.unit);
    let table_cells = props.table_cells;

    return (
        <div >
            <table border="1" >
                <tr style={{  fontFamily: 'esamanru', fontWeight: 'bold', height: '50px' }} align="center" >
                    {table_cells.map((cell, index) => {
                        return <td key={index}>{cell}</td>
                    })}
                </tr>
                <tbody style={{ olor:"#fff",fontFamily: 'esamanru', fontWeight: 'normal', height: '50px' }} align="center" >
                    {unit.map(c => {
                        return <Unit key={c.id} id={c.id} name={c.name} count={c.count} editType={props.editType}
                            mainunit={props.mainunit}
                            handleFormSubmit={props.handleFormSubmit} handleFormModify={props.handleFormModify} handleRemoveClose={props.handleRemoveClose} />
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default withStyles(styles)(CoreTable);