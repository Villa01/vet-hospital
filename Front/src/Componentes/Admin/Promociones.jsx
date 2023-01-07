import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import {
  Checkbox,
  Grid,
  Card,
  Button,
  Text,
  Input,
  useModal,
  Spacer,
  Modal,
  Row,
} from "@nextui-org/react";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import { peticion } from "../../helpers/fetch";
import axios from "axios";
export const Promociones = () => {
  let servicio = [
    { Servicio: "Baño", Precio: 100 },

    { Servicio: "Corte de pelo ", Precio: 100 },
    { Servicio: "Masaje", Precio: 100 },
    { Servicio: "Corte de Uñas", Precio: 100 },
    { Servicio: "Cepillado", Precio: 100 },
    { Servicio: "Limpieza de oidos", Precio: 100 },
  ];
  const { auth } = useContext(AuthContext);
  const { setVisible, bindings } = useModal();
  let serviciosAux = [];
  const [cargandoservicioss, setcargandoservicioss] = useState([]);

  const [vista, setvista] = useState(1);
  const [file, setFile] = useState();
  const [tipo, setTipo] = useState();
  const [grooming, SetGrooming] = useState([]);
  const [IdServicios, SetIdservicios] = useState([]);
  const [serve, Setservicios] = useState([]);
  const [selectedSize, setSelectedSize] = useState("md");
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const AgregarServicios = async (Servicio) => {
    Setservicios([...serve, Servicio]);
    SetIdservicios([...IdServicios, Servicio.idServicio]);

    console.log(serve);
  };
  const CrearPromocion = async () => {
    if (values.Precio != "") {
      const data = {
        descuento: values.Precio,
        listaServicios: IdServicios,
        descripcion:values.Desc
      };

      
      const resp = await peticion(
        "http://localhost:5000/paquetes/api/paquetes/",
        data,
        "POST"
      );
      console.log(resp)
    } else {
      Swal.fire("Falta el campo precio ", "Mensaje:", "error");
    }

  };
  const { values, handleInputChange } = useForm({
    email: "",
    nombres: "",
    apellidos: "",
    Precio: "",
    Desc: "",
  });
  const Getservicioss = async () => {
    const resp = await peticion(
      "http://localhost:5000/microservicios7/microservicio1/lista-servicios",
      "",
      "GET"
    );
    console.log(resp);
    SetGrooming(resp);
  };
  useEffect(() => {
    console.log("pagina", values.pagina);
    Getservicioss()
  }, [cargandoservicioss]);
  return (
    <div>
      <Card>
        <Grid xs={15} justify="center" align="center">
          <PriceChangeIcon
            fontSize="large"
            color="danger"
            sx={{ fontSize: 120 }}
          />
        </Grid>
        <Text
          h1
          size={40}
          css={{
            textGradient: "45deg, black -20%, $blue900 100%",
          }}
          weight="bold"
        >
          Promociones
        </Text>

        <Grid.Container gap={4} justify="flex-start">
          <Grid xs={3} sm={4} align="center">
            <Button
              size="xl"
              auto
              ghost
              color="warning"
              onClick={() => setVisible(true)}
            >
              Escoger Servicios
            </Button>
          </Grid>
          <Grid xs={3} sm={4} align="center">
            <Input
              bordered
              width="300px"
              type="number"
              labelPlaceholder="Descuento"
              color="warning"
              id="Precio"
              name="Precio"
              value={values.Precio}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid xs={3} sm={4} align="center">
            <Input
              bordered
              width="300px"
              
              labelPlaceholder="Descripción"
              color="warning"
              id="Desc"
              name="Desc"
              value={values.Desc}
              onChange={handleInputChange}
            />
          </Grid>
          {serve.map((item, i) => (
            <>
              <Grid xs={4} sm={6} align="center">
                <Card isPressable css={{ p: "$2", mw: "300px" }}>
                  <Card.Body css={{ p: 5, justifyItems: "center" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Grid xs={15} justify="" align="center">
                        <MedicalInformationIcon
                          fontSize="large"
                          color="black"
                          sx={{ fontSize: 80 }}
                        />
                      </Grid>
                      <Text
                        h1
                        size={18}
                        css={{
                          width: "1000px",
                          textGradient: "45deg, black -20%, black 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        Servicio
                      </Text>

                      <Text
                        h1
                        size={18}
                        css={{
                          width: "1000px",
                          textGradient: "45deg, black -20%, black 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        {item.Descripcion}
                      </Text>
                    </Row>
                  </Card.Body>
                </Card>
              </Grid>
            </>
          ))}
          <Grid xs={3} sm={3} align="center">
            {" "}
            <Button
              size="xl"
              auto
              ghost
              color="warning"
              onClick={() => CrearPromocion()}
            >
              {/* onClick={() => AgregarSecre()}*/} Crear Promocion
            </Button>
          </Grid>
        </Grid.Container>
      </Card>
      <Modal
        width="800px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header css={{ xs: 2 }}>
          <Text
            h1
            size={20}
            css={{
              width: "300px",
              textGradient: "45deg, black -20%, black 100%",
              padding: "$2 $2",
            }}
            weight="bold"
          >
            Servicios
          </Text>
        </Modal.Header>
        <Modal.Body align="center">
          <Grid.Container gap={2} justify="flex-start">
            {grooming.map((item, i) => (
              <>
                <Grid xs={4} sm={6} align="center">
                  <Card isPressable css={{ p: "$2", mw: "300px" }}>
                    <Card.Body css={{ p: 5, justifyItems: "center" }}>
                      <Row wrap="wrap" justify="space-between" align="center">
                        <Text
                          h1
                          size={18}
                          css={{
                            width: "1000px",
                            textGradient: "45deg, black -20%, black 100%",
                            padding: "$2 $2",
                          }}
                          weight="bold"
                        >
                          Servicio
                        </Text>

                        <Text
                          h1
                          size={18}
                          css={{
                            width: "1000px",
                            textGradient: "45deg, black -20%, black 100%",
                            padding: "$2 $2",
                          }}
                          weight="bold"
                        >
                          {item.Descripcion}
                        </Text>
                        <Button
                          auto
                          ghost
                          color="warning"
                          onClick={() => AgregarServicios(item)}
                        >
                          Escoger
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </Grid>
              </>
            ))}
          </Grid.Container>
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
