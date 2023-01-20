import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const StyledTableCell= withStyles(()=>({
    head:{
        color: 'Black',
        background: '#4A6D7C',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
   body:{
        fontSize: 16,
    },
    }))(TableCell);

function TableMaterial(props) {
    return (
        <TableContainer>
            <Table>
            <TableHead>
            <TableRow>
               <StyledTableCell>Nombre Producto</StyledTableCell> 
               <StyledTableCell>Id del Producto</StyledTableCell> 
               <StyledTableCell>Cantidad Vendida</StyledTableCell> 
               <StyledTableCell>Total Ventas </StyledTableCell> 
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TableCell><img src={elemento.imagen} width="35px" height="25px"/>{"  "}{elemento.nombre}</TableCell>
                        <TableCell align="center">{elemento.id}</TableCell>
                        <TableCell align="center">{elemento.cantidadVendida}</TableCell>
                        <TableCell align="center">{elemento.ventasProducto}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableMaterial;