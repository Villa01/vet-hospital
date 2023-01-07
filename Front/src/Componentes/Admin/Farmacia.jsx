import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Card, Grid, Text } from "@nextui-org/react";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Swal from 'sweetalert2';
import { peticion } from '../../helpers/fetch';
import { TableHead } from '@mui/material';

// Métodos propios para crear la tabla desde mui ******************************
const TablePaginationActions = (props) => {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};
// ****************************************************************************

export const Farmacia = () => {
    const rutaBackend = "http://localhost:5000/productos";
    // Variables necesarias para cargar la tabla ******************************
    const [rows, setRows] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    // *************************************************************************

    const editProduct = async (data) => {
        const { value: formValues } = await Swal.fire({
            title: `Actualice la información de ${data.Descripcion}`,
            html:
                '<h2>Precio:</h2>' +
                `<input type="number" min=0 max=9999 id="swal-input1" class="swal2-input" value=${data.Precio} autocomplete="off">`,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value
                ]
            }
        });

        if (!formValues) return;

        if (formValues) {
            const url = `${rutaBackend}/modificar-precio-producto`;
            const body = {
                id_producto: data.idProducto,
                precio: formValues[0]
            }
            const respuesta = await peticion(url, body, "POST");
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });
            await fetchData();
            Toast.fire({
                icon: "success",
                title: "Se ha editado el producto"
            });
        }
    };

    const addProduct = async () => {
        const { value: formValues } = await Swal.fire({
            title: `Ingrese la información del nuevo producto`,
            html:
                '<h2>Descripción:</h2>' +
                `<input type="text" id="swal-input1" class="swal2-input placeholder="Descripcion" autocomplete="off">` +
                '<h2>Precio:</h2>' +
                `<input type="number" min=0 max=9999 id="swal-input2" class="swal2-input" autocomplete="off">` +
                '<h2>Cantidad en stock:</h2>' +
                `<input type="number" min=0 max=9999 id="swal-input3" class="swal2-input" onkeydown="if(event.key==='.'){event.preventDefault();}" autocomplete="off">`,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').value,
                ]
            }
        });

        if (!formValues) return;
        const url = `${rutaBackend}/registrar-producto`;
        const body = {
            descripcion: formValues[0],
            precio: formValues[1],
            cant_stock: formValues[2]
        }
        const respuesta = await peticion(url, body, "POST");
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        await fetchData();
        Toast.fire({
            icon: "success",
            title: "Se ha agregado el producto"
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = `${rutaBackend}/obtener-productos`;
        const respuesta = await peticion(url, undefined, "GET");
        setRows(respuesta);
    };

    return (
        <>
            <Card>
                <Grid xs={15} justify='center' align="center">
                    <LocalHospitalIcon fontSize="large" color="danger" sx={{ fontSize: 80 }} />
                </Grid>
                <Text
                    h1
                    size={40}
                    css={{
                        textGradient: "45deg, black -20%, $blue900 100%",
                    }}
                    weight="bold"
                >
                    Farmacia
                </Text>
                <Grid.Container gap={2} justify="right">
                    <Grid xs={12} sm={12} align="center" style={{ justifyContent: "center   " }}>
                        {/*******************************************************************/}
                        <TableContainer component={Paper} style={{ borderColor: "#dae058" }}>
                            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                                <TableHead>
                                    <TableCell>Descripcion</TableCell>
                                    <TableCell>Precio</TableCell>
                                    <TableCell>Cantidad</TableCell>
                                    <TableCell>Acciones</TableCell>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : rows
                                    ).map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell component="th" scope="row" style={{ width: 600 }}>
                                                {row.Descripcion}
                                            </TableCell>
                                            <TableCell component="th" scope="row" style={{ width: 200 }}>
                                                {row.Precio}
                                            </TableCell>
                                            <TableCell component="th" scope="row" style={{ width: 200 }}>
                                                {row.CantidadStock}
                                            </TableCell>
                                            <TableCell style = {{widh: 80}}>
                                                <IconButton
                                                    aria-label="edit"
                                                    onClick={() => editProduct(row)}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}

                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={3}
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: {
                                                    'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            }}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                        {/*******************************************************************/}
                    </Grid>
                    <Grid xs={12} sm={4} align="center">
                        <Button
                            size="xl"
                            auto ghost
                            color="warning"
                            style={{ marginBottom: 10 }}
                            onClick={() => addProduct()}
                        >
                            Agregar producto
                        </Button>
                    </Grid>
                </Grid.Container>
            </Card>
        </>
    );
}