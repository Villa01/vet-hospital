import { useForm } from "../hooks/useForm";
import Tooltip from "@mui/material/Tooltip";
import { CrearSecretaria } from "../Componentes/Admin/CrearSecretaria";
import {
  Input,
  Grid,
  Row,
  Button,
  Text,
  Link,
  Modal,
  useModal,
  Spacer,
} from "@nextui-org/react";
import { VerPromociones } from "../Componentes/Cliente/VerPromociones";
import { VerServicios } from "../Componentes/Cliente/VerServicios";
import { Promociones } from "../Componentes/Admin/Promociones";
import { Servicios } from "../Componentes/Admin/Servicios";
import { useContext, useEffect, useState } from "react";
import { Vercitas } from "../Componentes/Admin/VerCitas";
import { Vertarifas } from "../Componentes/Admin/VerTarifario";
import { AgendarCitaCliente } from "../Componentes/Cliente/AgendarCitaCliente";
import { AuthContext } from "../Context/AuthContext";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CrearUsuario } from "../Componentes/Admin/CrearUsuario";
import { CrearDoctor } from "../Componentes/Admin/CrearDoctor";
import Barra from "../Componentes/AppBar";
import { CrearMascota } from "../Componentes/Cliente/CrearMascota";
import { VerPacientes } from "../Componentes/Doctor/VerPacientes";
import { AgendarCitaSecretaria } from "../Componentes/Secretaria/AgendarCitaSecretaria";
import { VerUsuarios } from "../Componentes/Admin/VerUsuarios";
import { VerMascota } from "../Componentes/Cliente/VerMascota";
import { Farmacia } from "../Componentes/Admin/Farmacia";
import { Productos } from "../Componentes/Cliente/Productos";
export const Bienvenida = () => {
  const [pestañasTotales, setPestañasTotales] = useState([]);
  const { auth } = useContext(AuthContext);

  const [cargarPestaña] = useState(false);

  const [bienvenida, setBienvenida] = useState(false);

  //  const {LLenarPestaña, pestañasTotales } = Pestaña()
  const [value, setValue] = useState("1");
  const [page, setPage] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let alv = [
    {
      nombre: "Crear Mascota",
      valor: "6",
    },
    {
      nombre: "Ver  Mascotas",
      valor: "7",
    },
    {
      nombre: "Agendar Cita  Mascotas",
      valor: "11",
    },
    {
      nombre: "Ver Servicios",
      valor: "30",
    },{
      nombre: "Ver Promociones",
      valor: "31",
    },
  ];
  const borrar = () => {};
  const [selectedSize, setSelectedSize] = useState("md");

  const { values, handleInputChange } = useForm({
    pagina: 0,

    ruta: "",
  });
  useEffect(() => {
    console.log("auth", auth);

    const pestaña = [{ nombre: "Inicio", valor: "1" }];
    const filteredArray = auth.roles.filter(function (ele, pos) {
      return auth.roles.indexOf(ele) == pos;
    });

    setPestañasTotales(filteredArray);

    //  console.log(auth.roles)

    console.log("PESTAÑAS", pestañasTotales);
  }, [cargarPestaña]);

  function set() {
    setBienvenida(true);
  }

  return (
    <div class="MenuPortal">
      <Barra></Barra>
      <Grid.Container gap={1} justify="flex-start">
        <Grid xs={12} sm={12} align="center">
          <Box
            sx={{
              width: "2000px",
              padding: "20px",
              height: 800,
              typography: "body1",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  sx={{
                    width: "1200px",
                    padding: "0px",
                    height: 0,
                    typography: "body1",
                    margin: "auto",
                  }}
                  indicatorColor="black"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  {
                  pestañasTotales.map((item, i) => (
                    <Tab label={item.nombre} value={item.valor} />
                  ))}
                </TabList>
              </Box>
              
              <TabPanel value="1">
                {" "}
                <Text
                  h1
                  size={20}
                  css={{
                    textGradient: "45deg, $blue600 -20%, $blue900 100%",
                  }}
                  weight="bold"
                >
                  Escoja la opcion que desee
                </Text>
              </TabPanel>

              <TabPanel value="2">
                <Grid xs={12} sm={24} align="center">
                  <CrearUsuario></CrearUsuario>
                </Grid>
              </TabPanel>
              <TabPanel value="3">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <CrearSecretaria></CrearSecretaria>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="4">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <CrearDoctor></CrearDoctor>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="5">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <VerUsuarios></VerUsuarios>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="6">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <CrearMascota></CrearMascota>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="7">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <VerMascota></VerMascota>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="9">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <VerPacientes></VerPacientes>
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value="11">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <AgendarCitaCliente></AgendarCitaCliente>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="12">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <Vercitas></Vercitas>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="13">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <Vertarifas></Vertarifas>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="14">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <AgendarCitaSecretaria></AgendarCitaSecretaria>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="20">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <Servicios></Servicios>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="21">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <Promociones></Promociones>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="30">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <VerServicios></VerServicios>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="31">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <VerPromociones></VerPromociones>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="15">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <Farmacia/>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value="16">
                <div class="ContFooter">
                  <Grid xs={12} sm={24} align="center">
                    <Productos/>
                  </Grid>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid.Container>
    </div>
  );
};
