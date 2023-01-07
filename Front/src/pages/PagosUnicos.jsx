import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import Barra from "../Componentes/AppBar";
import {
  Checkbox,
  Grid,
  Card,
  Button,
  Text,
  Input,
  useModal,
  Modal,
  Row,
  Spacer,
} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { peticion } from "../helpers/fetch";
import { useParams } from "react-router-dom";
import axios from "axios";
export const PagosUnicos = () => {
  const { auth } = useContext(AuthContext);
  const { setVisible, bindings } = useModal();

  const [vista, setvista] = useState(1);

  const [mensaje, setmensaje] = useState("Mensaje");
  const [cita, setCita] = useState();
  const [total, setTotalPago] = useState();
  const [infopago, setinfopago] = useState();
  const [tipo, setTipo] = useState();
  const { idpago } = useParams();
  const [selectedSize, setSelectedSize] = useState("md");

  const handletipo1 = (e) => {
    setTipo("privado");
  };
  const handletipo2 = (e) => {
    setTipo("publico");
  };
  const GetPAGO = async () => {
    console.log("aca?");

    const resp = await peticion(
      "http://localhost:5000/pagos/pago/" + idpago + "/",
      "",
      "GET"
    );
    console.log(resp);
    setinfopago(resp.info);
    setCita(resp.info[0].idCita);
  };
  const Pagos = async (e) => {
    const data = [
      {
        id_cita: cita,
        tipo_pago: 0,
        motivo: "Pago Consulta",
        numero_tarjeta: values.numero_tarjeta,
        fecha_vencimiento: values.fecha_vencimiento,
        cod_seguridad: values.cod_seguridad,
        nombre_propietario: values.nombre_propietario,
      },
    ];
    console.log("data para para pagar perro ", data);

    const resp = await peticion(
      "http://localhost:5000/pagos/generar-cobro/",
      data,
      "POST"
    );
  };
  const PAGAR = async () => {
    console.log("hoaaaaaaaalaaa");

    const data = [
      {
        id_cita: cita,
        tipo_pago: 0,
        motivo: "Pago Consulta",
        numero_tarjeta: values.numero_tarjeta,
        fecha_vencimiento: values.fecha_vencimiento,
        cod_seguridad: values.cod_seguridad,
        nombre_propietario: values.nombre_propietario,
      },
    ];
    console.log("data para para pagar perro ", data);

    const resp = await peticion(
      "http://localhost:5000/pagos/generar-cobro/",
      data,
      "POST"
    );

    const data2 = [
      {
        id_cita: cita,
        estado_nuevo: "PAGADA",
      },
    ];
    const resp2 = await peticion(
      "http://localhost:5000/citas/cambiar-estado-cita/",
      data2,
      "POST"
    );

    console.log(resp2);

    console.log(resp);
    setVisible(false);
    Swal.fire({
      title: "Pago realizado correctamente observe su link de pago",
      text: resp.link,
      icon: "success",

      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace("/");
      }
    });

    //  const resp = await peticion('http://localhost:5000/registrar/cita/mascota', data, 'POST')
    //  console.log(resp)
  };
  const { values, handleInputChange } = useForm({
    fecha_vencimiento: "",
    numero_tarjeta: "",
    cod_seguridad: "",
    nombre_propietario: "",
    pass: "",
    especialidad: "",
    horaInicio: "",
    HoraFin: "",
  });

  useEffect(() => {
    console.log("pagina", values.pagina);
    const pago = localStorage.getItem("Pago")
    setTotalPago(pago)
    setVisible(true);
    GetPAGO();
  }, [true]);
  return (
    <div class="center">
      <Modal
        width="400px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header css={{ xs: 8 }}>
          <Text
            h1
            size={60}
            css={{
              width: "300px",
              textGradient: "45deg, black -20%, black 100%",
              padding: "$2 $2",
            }}
            weight="bold"
          >
            PAGOS
          </Text>
          <Grid xs={15} justify="center" align="center">
            <CreditCardIcon
              fontSize="large"
              color="danger"
              sx={{ fontSize: 120 }}
            />
          </Grid>
        </Modal.Header>
        <Modal.Body align="center">
        <Row justify="center" align="center" css={{ m: 10 }}>
        <Text
        justify="center"
            h1
            size={30}
            css={{
              width: "300px",
              textGradient: "45deg, black -20%, black 100%",
              padding: "$2 $2",
            }}
            weight="bold"
          >
            Total a cancelar ${total}
          </Text>
            <Spacer y={2.5} />
          </Row>
          <Row justify="center" align="center" css={{ m: 10 }}>
            <Input
              clearable
              bordered
              Placeholder="Nombre del propietario"
              color="warning"
              id="nombre_propietario"
              name="nombre_propietario"
              value={values.nombre_propietario}
              onChange={handleInputChange}
            />
            <Spacer y={2.5} />
          </Row>

          <Row justify="center" align="center" css={{ m: 10 }}>
            <Input
              type="number"
              clearable
              bordered
              Placeholder=" numero tarjeta"
              color="warning"
              id="numero_tarjeta"
              name="numero_tarjeta"
              value={values.numero_tarjeta}
              onChange={handleInputChange}
            />
            <Spacer y={2.5} />
          </Row>

          <Row justify="center" align="center" css={{ m: 10 }}>
            <Input
              clearable
              bordered
              Placeholder=" Codigo de seguridad"
              color="warning"
              id="cod_seguridad"
              name="cod_seguridad"
              value={values.cod_seguridad}
              onChange={handleInputChange}
            />
            <Spacer y={2.5} />
          </Row>

          <Row justify="center" align="center" css={{ m: 10 }}>
            <Input
              clearable
              bordered
              type="number"
              Placeholder="fecha_vencimiento"
              color="warning"
              id="fecha_vencimiento"
              name="fecha_vencimiento"
              value={values.fecha_vencimiento}
              onChange={handleInputChange}
            />
            <Spacer y={2.5} />
          </Row>

          <Row justify="center" align="center" css={{ m: 10 }}>
            <Button auto ghost color="warning" onClick={() => PAGAR()}>
              Pagar
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};
