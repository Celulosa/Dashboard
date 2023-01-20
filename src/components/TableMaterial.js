import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(() => ({
    head: {
        color: 'white',
        background: '#475657',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    body: {
        fontSize: 16,
    },
}))(TableCell);

function TableMaterial(props) {
    return (
        <TableContainer>

            <Table>
                <TableHead >

                    <TableRow>

                        <StyledTableCell>Posición en Ventas</StyledTableCell>
                        <StyledTableCell>Nombre Producto</StyledTableCell>
                        <StyledTableCell>Id del Producto</StyledTableCell>
                        <StyledTableCell>Cantidad Vendida en 2023</StyledTableCell>
                        <StyledTableCell>Total Ventas </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((elemento, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell>{elemento.nombre}</TableCell>
                            <TableCell align="center">{elemento.id}</TableCell>
                            <TableCell align="center">{elemento.cantidadVendida}</TableCell>
                            <TableCell align="center">{Intl.NumberFormat().format(elemento.ventasProducto)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableMaterial;