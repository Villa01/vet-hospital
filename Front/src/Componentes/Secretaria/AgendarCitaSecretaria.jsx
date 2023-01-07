import { useContext, useEffect, useState, useMemo } from 'react'
import MedicationIcon from '@mui/icons-material/Medication';
import { Radio, Grid, Button, Text, Card, Collapse, Input, Row, useModal, Spacer, Modal, Dropdown } from "@nextui-org/react";
import PetsIcon from '@mui/icons-material/Pets';
import { useForm } from "../../hooks/useForm";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { AuthContext } from '../../Context/AuthContext'
import { peticion } from '../../helpers/fetch';
import axios from "axios"


export const AgendarCitaSecretaria = () => {

    const { verificarToken, auth } = useContext(AuthContext)
    const [tipo, setTipo] = useState();
    const [mascota, setMascota] = useState(0);
    const [cliente, setcliente] = useState();
    const [mascotas, setmascotas] = useState([])
    const [clientes, setclientes] = useState([])
    const [disponibilidad, setdisponibilidad] = useState([])
    const [idpago, setidpago] = useState(0);
    const [doctores, setDoctores] = useState([])

    const [proximas, setProximas] = useState([])

    const [historial, setHistorial] = useState([])

    const [todas, setTodas] = useState([])
    const [doctor, setdoctor] = useState("")
    const [selected, setSelected] = useState(new Set(["Escoja el motivo"]));

    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    const [cargandomascotas, setcargandomascotas] = useState([])


    const VerDisponibilidad = async (idDoctor) => {
        setVisible(true)
        setTipo("disponibilidad")
        setdoctor(idDoctor)
        const data = {
            "idMedico": idDoctor,
            "fechaInicio": values.Inicio,
            "fechaFin": values.Fin


        }
        console.log("data", data)

        const resp = await peticion('http://localhost:5000/medicos/disponibles/', data, 'POST')
        console.log(resp)
        setdisponibilidad(resp.data)
    }


    const AplicarDescuento = async () => {
        const idUsuario = localStorage.getItem("idUsuario")


        const dataDescuento = [{
            "id_pago": idpago,
            "email": cliente.Email,
            "motivo_cita": selectedValue,
            "id_user":cliente.idUsuario


        }]

        console.log("data desc", dataDescuento)
        const resp = await peticion('http://localhost:5000/pagos/aplicar-descuento/', dataDescuento, 'POST')
        console.log("resp", resp)
        const pago ={ "total":resp.total_a_pagar ,"id_pago":idpago }
        localStorage.setItem("pago",pago)
    }

    const Agendar = async (idDoctor) => {
        setVisible(true)


        setdoctor(idDoctor)

        const data = {
            "idDoctor": doctor,
            "horario": values.fechacita,
            "motivo": selectedValue,
            "idMascota": mascota


        }
        console.log("data", data)

        const resp = await peticion('http://localhost:5000/microservicios4/registrar/cita/mascota/', data, 'POST')
        console.log(resp)

        setidpago(resp.idPago)


    }






    const { setVisible, bindings } = useModal();
    const { values, handleInputChange } = useForm({
        idUsuario: 0,

        ruta: '',
        fechacita: '',
        motivo: '', Inicio: '', Fin: '', telefono: '', pass: '', especialidad: '', horaInicio: '', HoraFin: '', password: '', Frecuente: 0, tipoUsuario: ''









    });






    const Getmascotas = async () => {
        setVisible(true)
        setTipo("mascota")

        console.log("aca?")






        const resp = await peticion('http://localhost:5000/microservicios1/obtener/mascotas/usuario/' + cliente.idUsuario+'/', '', 'GET')
        console.log(resp)
        setmascotas(resp.data)







    }


    const GetCLIENTES = async () => {



        setVisible(true)
        setTipo("usuario")


        const resp = await peticion('http://localhost:5000/usuarios/ObtenerUsuarios/', '', 'GET')
        console.log(resp)

        let arregloFiltrado = resp.filter(item => item.idTipoUsuario === 2);
        console.log(arregloFiltrado)
        setclientes(arregloFiltrado)











    }
    const GetDoctores = async () => {






        const resp = await peticion('http://localhost:5000/usuarios/ObtenerUsuarios/', '', 'GET')
        console.log(resp)

        let arregloFiltrado = resp.filter(item => item.idTipoUsuario === 3);
        console.log(arregloFiltrado)
        setDoctores(arregloFiltrado)











    }




    useEffect(() => {

        GetDoctores()








    }, [cargandomascotas]);
    return (
        <div>
            <Grid.Container>
                <Grid xs={4} sm={4} align="center">
                    <AccountBoxIcon fontSize="large" color="black" sx={{ fontSize: 80 }} />
                    <Button auto ghost color="warning" onClick={() => GetCLIENTES()}>
                        Ver Clientes
                    </Button>
                </Grid>
                <Grid xs={4} sm={4} align="center">
                    <PetsIcon fontSize="large" color="black" sx={{ fontSize: 80 }} />
                    <Button auto ghost color="warning" onClick={() => Getmascotas()}>
                        Ver Mascotas
                    </Button>
                </Grid>


            </Grid.Container>

            <Spacer y={4} />
            <div class="cards2">



                {

                    doctores.map((item, i) => (<>


                        <article class="card">
                            <header>
                                <MedicationIcon fontSize="large" color="black" sx={{ fontSize: 80 }} />
                            </header>

                            <div class="content">
                                <Text
                                    h1
                                    size={15}
                                    css={{
                                        textGradient: "45deg, black -20%, black 100%",
                                    }}
                                    weight="bold"
                                >
                                    Doctor


                                </Text>
                                <Text
                                    h1
                                    size={15}
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%,  $yellow600 100%",
                                    }}
                                    weight="bold"
                                >
                                    {item.nombres}


                                </Text>


                                <Text
                                    h1
                                    size={15}
                                    css={{
                                        textGradient: "45deg, black -20%, black 100%",
                                    }}
                                    weight="bold"
                                >
                                    Especialidad


                                </Text>
                                <Text
                                    h1
                                    size={15}
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%,  $yellow600 100%",
                                    }}
                                    weight="bold"
                                >
                                    {item.Especialidad}


                                </Text>
                                <Row justify="space-around" align="center">

                                    <Text
                                        h1
                                        size={20}
                                        css={{
                                            width: '300px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                                        }}
                                        weight="bold"
                                    >
                                        Inicio

                                    </Text>
                                    <Input
                                        bordered
                                        type="date"
                                        width="300px"
                                        color="warning"
                                        id="Inicio" name="Inicio" value={values.Inicio}
                                        onChange={handleInputChange}


                                    /></Row>
                                <Row justify="space-around" align="center">

                                    <Text
                                        h1
                                        size={20}
                                        css={{
                                            width: '300px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                                        }}
                                        weight="bold"
                                    >
                                        Fin

                                    </Text>
                                    <Input
                                        bordered
                                        type="date"
                                        width="300px"
                                        color="warning"
                                        id="Fin" name="Fin" value={values.Fin}
                                        onChange={handleInputChange}


                                    /></Row>
                            </div>

                            <Row justify="space-around" align="center">
                                <Button auto ghost color="warning" onClick={() => VerDisponibilidad(item.idUsuario

                                )}>
                                    Ver Disponibilidad
                                </Button> </Row>






                        </article>



                    </>))

                }
            </div>




            {tipo === "mascota" ? <>








                <Modal

                    width="800px"



                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    {...bindings}
                >
                    <Modal.Header css={{ xs: 2 }}   >





                        <Text
                            h1
                            size={20}
                            css={{
                                width: '300px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                            }}
                            weight="bold"
                        >
                            Mascotas

                        </Text>





                    </Modal.Header>
                    <Modal.Body align="center" >
                        <Grid.Container gap={2} justify="flex-start">


                            {mascotas.length > 0 ? <>
                                {
                                    mascotas.map((item, i) => (<>

                                        <Grid xs={4} sm={6} align="center">

                                            <Card isPressable css={{ p: "$2", mw: "300px" }} >

                                                <Card.Body css={{ p: 5, justifyItems: "center" }}>
                                                    <Row wrap="wrap" justify="space-between" align="center">


                                                        <Text
                                                            h1
                                                            size={18}
                                                            css={{
                                                                width: '1000px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                                                            }}
                                                            weight="bold"
                                                        >
                                                            Mascota
                                                        </Text>
                                                        <img src={item.foto} alt="Foto Mascota" />

                                                        <Button auto ghost color="warning" onClick={() => setMascota(item.idMascota)}>
                                                            Escoger
                                                        </Button>



                                                    </Row>


                                                </Card.Body>

                                            </Card>

                                        </Grid>
                                    </>))

                                                        }
                            </> : (
                                <div> Debe Escoger un cliente con mascotas</div>
                            )}
                

  




                        </Grid.Container>
                    </Modal.Body>

                    <Modal.Footer>

                        <Button auto ghost color="warning" onClick={() => setVisible(false)}>
                            salir
                        </Button>

                    </Modal.Footer>
                </Modal>





            </> : (
                <div></div>
            )}

            {tipo === "disponibilidad" ? <>





                <Modal

                    width="800px"



                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    {...bindings}
                >
                    <Modal.Header css={{ xs: 2 }}   >





                        <Text
                            h1
                            size={20}
                            css={{
                                width: '300px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                            }}
                            weight="bold"
                        >
                            Disponibilidad Doc

                        </Text>

                        <div >
                            <Row justify="space-around" align="center">
                                <Text
                                    h1
                                    size={20}
                                    css={{
                                        width: '300px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                                    }}
                                    weight="bold"
                                >
                                    Escoger Fecha

                                </Text>
                                <Input
                                    bordered
                                    type="datetime-local"
                                    width="300px"
                                    color="warning"
                                    id="fechacita" name="fechacita" value={values.fechacita}
                                    onChange={handleInputChange}


                                />
                            </Row>
                            <Row justify="space-around" align="center">
                                <Text
                                    h1
                                    size={20}
                                    css={{
                                        width: '300px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                                    }}
                                    weight="bold"
                                >
                                    Motivo

                                </Text>

                                <Dropdown>
                                    <Dropdown.Button flat color="warning" css={{ tt: "capitalize" }}>
                                        {selectedValue}
                                    </Dropdown.Button>
                                    <Dropdown.Menu
                                        aria-label="Single selection actions"
                                        color="warning"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selected}
                                        onSelectionChange={setSelected}
                                    >

                                        <Dropdown.Item key="Medicina general" color="warning">Medicina general</Dropdown.Item>

                                        <Dropdown.Item key="Traumatologia" color="warning">Traumatologia</Dropdown.Item>

                                        <Dropdown.Item key="Oftalmologia" color="warning">Oftalmologia</Dropdown.Item>

                                        <Dropdown.Item key="Ginecologia" color="warning">Ginecologia</Dropdown.Item>


                                        <Dropdown.Item key="Analisis de laboratorio" color="warning">Analisis de laboratorio</Dropdown.Item>


                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>
                        </div>

                    </Modal.Header>
                    <Modal.Body align="center" >
                        <Grid.Container gap={2} justify="flex-start">
                            <table class="content-table">
                                <thead>
                                    <th>Dia </th>

                                    <th>Inicio</th>
                                    <th>Fin</th>


                                </thead>

                                {

                                    disponibilidad.map((item, i) => (<>
                                        <tr >

                                            <td>
                                                <Text
                                                    h1
                                                    size={15}
                                                    css={{
                                                        textGradient: "45deg, black -20%, black 100%",
                                                    }}
                                                    weight="bold"
                                                >
                                                    {item.dia}



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
                                                    {item.inicio}



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
                                                    {item.fin}



                                                </Text>
                                            </td>


                                        </tr>
                                    </>))

                                }


                            </table>





                        </Grid.Container>
                    </Modal.Body>

                    <Modal.Footer>

                        <Button auto ghost color="warning" onClick={() => setVisible(false)}>
                            salir
                        </Button>
                        <Button auto ghost color="warning" onClick={() => Agendar()}>
                            Agendar
                        </Button>

                        <Button auto ghost color="warning" onClick={() => AplicarDescuento()}>
                            Enviar Link de pago
                        </Button>
                    </Modal.Footer>
                </Modal>




            </> : (
                <div></div>
            )}



            {tipo === "usuario" ? <>








                <Modal

                    width="800px"



                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    {...bindings}
                >
                    <Modal.Header css={{ xs: 2 }}   >





                        <Text
                            h1
                            size={20}
                            css={{
                                width: '300px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                            }}
                            weight="bold"
                        >
                            Clientes

                        </Text>





                    </Modal.Header>
                    <Modal.Body align="center" >
                        <Grid.Container gap={2} justify="flex-start">


                            {

                                clientes.map((item, i) => (<>

                                    <Grid xs={4} sm={6} align="center">

                                        <Card isPressable css={{ p: "$2", mw: "300px" }} >

                                            <Card.Body css={{ p: 5, justifyItems: "center" }}>
                                                <Row wrap="wrap" justify="space-between" align="center">


                                                    <Text
                                                        h1
                                                        size={18}
                                                        css={{
                                                            width: '1000px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                                                        }}
                                                        weight="bold"
                                                    >
                                                        Usuarios
                                                    </Text>

                                                    <Text
                                                        h1
                                                        size={18}
                                                        css={{
                                                            width: '1000px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                                                        }}
                                                        weight="bold"
                                                    >
                                                        Nombre
                                                    </Text>

                                                    <Text
                                                        h1
                                                        size={18}
                                                        css={{
                                                            width: '1000px', textGradient: "45deg, $yellow600 -20%, $yellow600 100%", padding: '$2 $2'
                                                        }}
                                                        weight="bold"
                                                    >
                                                        {item.nombres}
                                                    </Text>
                                                    <Text
                                                        h1
                                                        size={18}
                                                        css={{
                                                            width: '1000px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                                                        }}
                                                        weight="bold"
                                                    >
                                                        Correo
                                                    </Text>

                                                    <Text
                                                        h1
                                                        size={18}
                                                        css={{
                                                            width: '1000px', textGradient: "45deg, $yellow600 -20%, $yellow600 100%", padding: '$2 $2'
                                                        }}
                                                        weight="bold"
                                                    >
                                                        {item.Email}
                                                    </Text>


                                                    <Button auto ghost color="warning" onClick={() => setcliente(item)}>
                                                        Escoger
                                                    </Button>



                                                </Row>


                                            </Card.Body>

                                        </Card>

                                    </Grid>
                                </>))}




                        </Grid.Container>
                    </Modal.Body>

                    <Modal.Footer>

                        <Button auto ghost color="warning" onClick={() => setVisible(false)}>
                            salir
                        </Button>

                    </Modal.Footer>
                </Modal>





            </> : (
                <div></div>
            )}

        </div >
    );
}