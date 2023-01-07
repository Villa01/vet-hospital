import { useContext, useEffect, useState } from "react";

import {
  Radio,
  Grid,
  Button,
  Text,
  Checkbox,
  Input,
  Row,
  useModal,
  Spacer,
  Modal,
} from "@nextui-org/react";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../Context/AuthContext";
import { peticion } from "../..//helpers/fetch";

export const Servicios = () => {
  const { verificarToken, auth } = useContext(AuthContext);
  const [tipo, setTipo] = useState();
  const [servicioA, setServicio] = useState();

  const [servicios, SetServicios] = useState([]);
  const [cargandoservicioss, setcargandoservicioss] = useState([]);
  const handletipo1 = (e) => {
    setTipo("privado");
  };



  const VerModal = (item) => {
    setVisible(true);
    setServicio(item)
    values.NombreServicio=item.Descripcion
    values.id=item.idServicio
    values.precio=item.Precio

   
  };

  let servicio=[

    {"Servicio":"Baño","Precio":100},

    {"Servicio":"Corte de pelo ","Precio":100},
    {"Servicio":"Masaje","Precio":100},
    {"Servicio":"Corte de Uñas","Precio":100},
    {"Servicio":"Cepillado","Precio":100},
    {"Servicio":"Limpieza de oidos","Precio":100},  
]

  const { setVisible, bindings } = useModal();
  const { values, handleInputChange } = useForm({
    idUsuario: 0,

    NombreServicio: "",
    nombre: "",
    email: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    pass: "",
    especialidad: "",
    horaInicio: "",
    HoraFin: "",
    id: 0,
    precio: 0,
    tipoUsuario: "",
  });

  const Editar = async () => {
    const data = {
      id_servicio: values.id,
      descripcion_servicio:values.NombreServicio,
      precio_servicio: values.precio,
    };
    console.log("data editar servicios ", data);
    const resp = await peticion(
      "http://localhost:5000/microservicios8/microservicio2/modificar_servicio",
      data,
      "POST"
    );

    const resp3 = await peticion(
      "http://localhost:5000/microservicios7/microservicio1/lista-servicios",
      "",
      "GET"
    );
    console.log(resp3);
    SetServicios(resp3);
    
    
  };

  const Getservicioss = async () => {
    const resp = await peticion(
      "http://localhost:5000/microservicios7/microservicio1/lista-servicios",
      "",
      "GET"
    );
    console.log(resp);
    SetServicios(resp);
  };

  useEffect(() => {
    Getservicioss();
  }, [cargandoservicioss]);
  return (
    <div>
      <Grid xs={15} justify="center" align="center">
        <MedicalInformationIcon fontSize="large" color="black" sx={{ fontSize: 80 }} />
      </Grid>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, black -20%, black 100%",
        }}
        weight="bold"
      >
        Servicios
      </Text>

      <table class="content-table">
        <thead>
          <th>Servicio </th>

          <th>Precio</th>

          <th></th>
        </thead>

        {servicios.map((item, i) => (
          <>
            <tr>
              <td>
                <Text
                  h1
                  size={15}
                  css={{
                    textGradient: "45deg, black -20%, black 100%",
                  }}
                  weight="bold"
                >
                  {item.Descripcion}
                </Text>
              </td>

              <td>
                <Text
                  h1
                  size={15}
                  css={{
                    textGradient: "45deg, black -20%, black 100%",
                  }}
                  weight="bold"
                >
                  {item.Precio}
                </Text>
              </td>

              <td>
                <Grid xs={12} sm={3} align="center">
                  {" "}
                  <Button
                    auto
                    ghost
                    color="warning"
                    onPress={() => VerModal(item)}
                  >
                    Editar
                  </Button>
                </Grid>
              </td>
            </tr>
          </>
        ))}
      </table>

      <Modal
        width="400px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header css={{ xs: 8 }}>
        <Grid xs={15} justify="center" align="center">
        <MedicalInformationIcon fontSize="large" color="black" sx={{ fontSize: 80 }} />
      </Grid>
          <Text
            h1
            size={40}
            css={{
              width: "300px",
              textGradient: "45deg, black -20%, black 100%",
              padding: "$2 $2",
            }}
            weight="bold"
          >
            Editar Serivicio
          </Text>
        </Modal.Header>
        <Modal.Body align="center">
        <Row justify="center" align="center" css={{ m: 10 }}>
            <Input
              clearable
              bordered
             
              color="warning"
              id="NombreServicio"
              name="NombreServicio"
              value={values.NombreServicio}
              onChange={handleInputChange}
            />
            <Spacer y={2.5} />
          </Row>
          <Row justify="center" align="center" css={{ m: 10 }}>
            <Input
              clearable
              bordered
             
              Placeholder=" nuevo precio"
              color="warning"
              id="precio"
              name="precio"
              value={values.precio}
              onChange={handleInputChange}
            />
            <Spacer y={2.5} />
          </Row>

          <Row justify="center" align="center" css={{ m: 10 }}>
            <Button auto ghost color="warning" onClick={() => Editar()}>
              Editar
            </Button>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button auto ghost color="warning" onClick={() => setVisible(false)}>
            salir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
