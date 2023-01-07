import { useContext, useEffect, useState } from "react";

import {
  Radio,
  Grid,
  Button,
  Text,
  Card,
  Collapse,
  Input,
  Row,
  useModal,
  Spacer,
  Modal,
  Avatar,
} from "@nextui-org/react";
import PetsIcon from "@mui/icons-material/Pets";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../Context/AuthContext";
import { peticion } from "../..//helpers/fetch";
import axios from "axios";

export const VerMascota = () => {
  const { verificarToken, auth } = useContext(AuthContext);
  const [tipo, setTipo] = useState();
  const [mascota, setMascota] = useState("");

  const [mascotas, setmascotas] = useState([]);
  const [recetas, setRecetas] = useState([]);
  const [proximas, setProximas] = useState([]);

  const [historial, setHistorial] = useState([]);

  const [todas, setTodas] = useState([]);
  const [frec, setfrec] = useState(0);
  const [cargandomascotas, setcargandomascotas] = useState([]);
  const SetearModal1 = async (idMascota) => {
    setVisible(true);
    setTipo("Recetas");
    setMascota(idMascota);

    const resp = await peticion(
      "http://localhost:5000/microservicios2/receta-mascota/" + mascota + "/",
      "",
      "GET"
    );
    console.log(resp);
    setRecetas(resp.info);
  };
  const SetearModal2 = async (idMascota) => {
    setVisible(true);
    setTipo("Proximas");
    setMascota(idMascota);

    const resp = await peticion(
      "http://localhost:5000/citas/obtener/citas/mascota/" + mascota + "/",
      "",
      "GET"
    );
    console.log(resp);
    setProximas(resp.data);
  };

  const SetearModal3 = async (idMascota) => {
    setVisible(true);
    setTipo("Historial");
    setMascota(idMascota);

    const resp = await peticion(
      "http://localhost:5000/citas/obtener/historial/citas/mascota/" +
        mascota +
        "/",
      "",
      "GET"
    );
    console.log("RESPUESTA HISTORIAL", resp);
    setHistorial(resp.data);
  };
  const SetearModal4 = async (idMascota) => {
    setVisible(true);
    setTipo("Todas");
    setMascota(idMascota);

    const resp = await peticion(
      "http://localhost:5000/citas/obtener/citas/" + mascota + "/",
      "",
      "GET"
    );
    console.log("RESPUESTA todas", resp);
    setTodas(resp.data);
  };

  const { setVisible, bindings } = useModal();
  const { values, handleInputChange } = useForm({
    idUsuario: 0,

    ruta: "",
    nombre: "",
    raza: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    pass: "",
    especialidad: "",
    horaInicio: "",
    HoraFin: "",
    password: "",
    Frecuente: 0,
    tipoUsuario: "",
  });

  const Getmascotas = async () => {
    const resp = await peticion(
      "http://localhost:5000/microservicios1/obtener/mascotas/usuario/" +
        auth.idUsuario +
        "/",
      "",
      "GET"
    );
    console.log(resp);
    setmascotas(resp.data);
  };

  const Historial = async () => {
    const resp = await peticion(
      "http://localhost:5000/microservicios1/obtener/mascotas/usuario/" +
        auth.idUsuario +
        "/",
      "",
      "GET"
    );
    console.log(resp);
    setmascotas(resp.data);
  };
  const Filtar = async (e) => {
    e.preventDefault();
    if (values.raza !== "") {
      let alv = [];
      for (let index = 0; index < mascotas.length; index++) {
        const element = mascotas[index];
        if (element.raza === values.raza) {
          alv.push(element);
        }
      }
      let arregloFiltrado = mascotas.filter(
        (item) => item.nombres === values.nombres
      );
      console.log(alv);
      setmascotas(alv);
    } else {
      const resp = await peticion(
        "http://localhost:5000/microservicios1/obtener/mascotas/usuario/" +
          auth.idUsuario +
          "/",
        "",
        "GET"
      );
      console.log(resp);
      setmascotas(resp.data);
    }
  };
  useEffect(() => {
    Getmascotas();
  }, [cargandomascotas]);
  return (
    <div>
      <Grid xs={15} justify="center" align="center">
        <PetsIcon fontSize="large" color="black" sx={{ fontSize: 80 }} />
      </Grid>
      <Grid xs={12} sm={4} align="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, black -20%, black 100%",
          }}
          weight="bold"
        >
          Ver Mascotas
        </Text>{" "}
      </Grid>

      <div class="cards2">
        {" "}
        <Grid xs={12} sm={4} align="center">
          <Input
            bordered
            type="email"
            width="300px"
            labelPlaceholder="Buscar por Raza"
            color="warning"
            id="raza"
            name="raza"
            value={values.raza}
            onChange={handleInputChange}
            onBlur={Filtar}
          />
        </Grid>
        {mascotas.map((item, i) => (
          <>
            <Card css={{ p: "$8", mw: "400px" }}>
              <Card.Header>
                <Collapse.Group>
                  <Collapse
                    title={
                      <>
                        <div class="">
                          <Grid xs={4} sm={3} justify="center" align="center">
                            <img src={item.foto} alt="Foto Mascota" />
                          </Grid>
                        </div>
                      </>
                    }
                  >
                    {" "}
                    <Card.Body
                      css={{
                        p: 0,
                        justifyItems: "flex-start",
                        padding: "$2 $3",
                      }}
                    >
                      <div class="textoCard">
                        <Text
                          h1
                          size={15}
                          css={{
                            textGradient: "45deg, black -20%, black 100%",
                          }}
                          weight="bold"
                        >
                          Raza
                        </Text>
                        <Text
                          h1
                          size={15}
                          css={{
                            textGradient:
                              "45deg, $yellow600 -20%,  $yellow600 100%",
                          }}
                          weight="bold"
                        >
                          {item.raza}
                        </Text>

                        <Text
                          h1
                          size={15}
                          css={{
                            textGradient: "45deg, black -20%, black 100%",
                          }}
                          weight="bold"
                        >
                          Edad
                        </Text>
                        <Text
                          h1
                          size={15}
                          css={{
                            textGradient:
                              "45deg, $yellow600 -20%,  $yellow600 100%",
                          }}
                          weight="bold"
                        >
                          {item.edad}
                        </Text>

                        <Text
                          h1
                          size={15}
                          css={{
                            textGradient: "45deg, black -20%, black 100%",
                          }}
                          weight="bold"
                        >
                          Tipo
                        </Text>
                        <Text
                          h1
                          size={15}
                          css={{
                            textGradient:
                              "45deg, $yellow600 -20%,  $yellow600 100%",
                          }}
                          weight="bold"
                        >
                          {item.TipoAnimal}
                        </Text>
                      </div>

                      <Row justify="space-around" align="center">
                        <Button
                          auto
                          ghost
                          color="warning"
                          onClick={() => SetearModal2(item.idMascota)}
                        >
                          Ver Proximas citas
                        </Button>{" "}
                      </Row>

                      <Row justify="space-around" align="center">
                        <Button
                          auto
                          ghost
                          color="warning"
                          onClick={() => SetearModal3(item.idMascota)}
                        >
                          Ver Historial
                        </Button>{" "}
                      </Row>

                      <Row justify="space-around" align="center">
                        <Button
                          auto
                          ghost
                          color="warning"
                          onClick={() => SetearModal1(item.idMascota)}
                        >
                          Ver Recetas
                        </Button>{" "}
                      </Row>

                      <Row justify="space-around" align="center">
                        <Button
                          auto
                          ghost
                          color="warning"
                          onClick={() => SetearModal4(item.idMascota)}
                        >
                          Ver Todas las CITAS
                        </Button>{" "}
                      </Row>
                    </Card.Body>
                  </Collapse>
                </Collapse.Group>
              </Card.Header>
            </Card>
          </>
        ))}
      </div>

      <Modal
        width="600px"
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
            Info MASCOTA
          </Text>
        </Modal.Header>
        <Modal.Body align="center">
          <Grid.Container gap={2} justify="flex-start">
            {tipo === "Proximas" ? (
              <>
                <Grid.Container gap={2} justify="flex-start">
                  {proximas.map((item, i) => (
                    <>
                      <Grid xs={4} sm={6} align="center">
                        <Card isPressable css={{ p: "$2", mw: "300px" }}>
                          <Card.Body css={{ p: 5, justifyItems: "center" }}>
                            <Row
                              wrap="wrap"
                              justify="space-between"
                              align="center"
                            >
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
                                Horario
                              </Text>
                              <Text
                                css={{
                                  lineHeight: "$xs",
                                  color: "$yellow600",
                                  padding: "$2 $2",
                                }}
                              >
                                {item.Horario}
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
                                Doctor
                              </Text>
                              <Text
                                css={{
                                  lineHeight: "$xs",
                                  color: "$yellow600",
                                  padding: "$2 $2",
                                }}
                              >
                                {item.MedicoAsignado}
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
                                Estado
                              </Text>
                              <Text
                                css={{
                                  lineHeight: "$xs",
                                  color: "$yellow600",
                                  padding: "$2 $2",
                                }}
                              >
                                {item.EstadoCita}
                              </Text>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Grid>
                    </>
                  ))}
                </Grid.Container>
              </>
            ) : (
              <div></div>
            )}

            {tipo === "Historial" ? (
              <>
                <Grid.Container gap={2} justify="flex-start">
                  {" "}
                  <table class="content-table">
                    <thead>
                      <th>Medico Asignado </th>

                      <th>Horario</th>
                      <th>Estado Cita</th>
                    </thead>

                    {historial.map((item, i) => (
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
                              {item.MedicoAsignado}
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
                              {item.Horario}
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
                              {item.EstadoCita}
                            </Text>
                          </td>
                        </tr>
                      </>
                    ))}
                  </table>
                </Grid.Container>
              </>
            ) : (
              <div></div>
            )}

            {tipo === "Todas" ? (
              <>
                <Grid.Container gap={2} justify="flex-start">
                  {" "}
                  <table class="content-table">
                    <thead>
                      <th>Medico Asignado </th>

                      <th>Horario</th>
                      <th>Estado Cita</th>
                      <th>Motivo Cita</th>
                    </thead>

                    {todas.map((item, i) => (
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
                              {item.MedicoAsignado}
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
                              {item.Horario}
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
                              {item.EstadoCita}
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
                              {item.MotivosCita}
                            </Text>
                          </td>
                        </tr>
                      </>
                    ))}
                  </table>
                </Grid.Container>
              </>
            ) : (
              <div></div>
            )}

            {tipo === "Recetas" ? (
              <>
                <Grid.Container gap={2} justify="flex-start">
                  {recetas.map((item, i) => (
                    <>
                      <Grid xs={4} sm={6} align="center">
                        <Card isPressable css={{ p: "$2", mw: "300px" }}>
                          <Card.Body css={{ p: 5, justifyItems: "center" }}>
                            <Row
                              wrap="wrap"
                              justify="space-between"
                              align="center"
                            >
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
                                Medicamento
                              </Text>
                              <Text
                                css={{
                                  lineHeight: "$xs",
                                  color: "$yellow600",
                                  padding: "$2 $2",
                                }}
                              >
                                {item.Nombre}
                              </Text>

                              <Row justify="space-around" align="center"></Row>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Grid>
                    </>
                  ))}
                </Grid.Container>
              </>
            ) : (
              <div></div>
            )}
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
