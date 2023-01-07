import React, { useEffect, useState } from 'react';
import { Button, Card, Grid, Text } from "@nextui-org/react";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Checkbox } from "@nextui-org/react";
import { peticion } from '../../helpers/fetch';
import Swal from 'sweetalert2';

export const Productos = () => {
  const rutaBackend = "http://localhost:5000/productos";
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0.00);
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      setTotal(total + Number(value.Precio));
    } else {
      newChecked.splice(currentIndex, 1);
      setTotal(total - Number(value.Precio));
    }

    setChecked(newChecked);
  };

  const comprarProductos = async () => {
    Swal.fire({
      title: '¿Desea finalizar la compra?',
      text: `El total a pagar es de ${total}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Exito',
          'Se ha efectuado el pago',
          'success'
        )
      }
    })
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `${rutaBackend}/obtener-productos`;
    const respuesta = await peticion(url, undefined, "GET");
    setProducts(respuesta);
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
          Compra de productos
        </Text>
        <Grid.Container gap={2} justify="right">
          <Grid xs={12} sm={4} align="center">
            {/* Lista *********************************************** */}
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {products.map((value, i) => {
                const labelId = `checkbox-list-secondary-label-${value.idProducto}`;
                return (
                  <ListItem
                    key={i}
                    secondaryAction={
                      <Checkbox
                        edge="end"
                        color="warning"
                        aria-label="Close"
                        onChange={handleToggle(value)}
                        checked={checked.indexOf(value) !== -1}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemText id={labelId} primary={value.Descripcion} />
                      <ListItemText primary={"Q " + value.Precio} align={"right"} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            {/* ***************************************************** */}
          </Grid>
          <Grid xs={12} sm={4} align="center">
            <Button
              size="xl"
              auto ghost
              color="warning"
              style={{ marginBottom: 10 }}
              onClick={ () => comprarProductos() }
            >
              Comprar productos
            </Button>
          </Grid>
          <Grid xs={15} sm={5} align="center">
            <Text
              h1
              size={20}
              css={{
                textGradient: "45deg, black -20%, $blue900 100%",
              }}
              weight="bold"
            >
              Total a pagar: {total}
            </Text>
          </Grid>
        </Grid.Container>
      </Card>
    </>
  )
}
