import { useContext, useEffect, useState } from 'react'

import { Radio, Grid, Button, Text, Card, Collapse, Input, Row, useModal, Spacer, Modal } from "@nextui-org/react";
import PetsIcon from '@mui/icons-material/Pets';
import { useForm } from "../../hooks/useForm";
import { AuthContext } from '../../Context/AuthContext'
import { peticion } from '../..//helpers/fetch';
import axios from "axios"

export const VerPacientes = () => {

    const { verificarToken, auth } = useContext(AuthContext)
    const [tipo, setTipo] = useState();
    const [file, setFile] = useState();
    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };
    const [pacientes, setpacientes] = useState([])
    const [medicamentos, setMedicamentos] = useState([])
    const [frec, setfrec] = useState(0)

    const [mascota, setMascota] = useState(0)

    const [cargandopacientes, setcargandopacientes] = useState([])
    const AsignarMedicamento = (mascosta) => {
        setVisible(true)
        setMascota(mascosta.idMascota)


    };



    const Estudio = (mascosta) => {
        setVisible(true)
        setMascota(mascota.idMascota)


    };



    const { setVisible, bindings } = useModal();



    const { setVisible2, bindings2 } = useModal();
    const { values, handleInputChange } = useForm({
        idUsuario: 0,

        ruta: '',
        nombre: '',
        raza: '', nombres: '', apellidos: '', telefono: '', pass: '', especialidad: '', horaInicio: '', HoraFin: '', password: '', Frecuente: 0, tipoUsuario: ''









    });

    const AsignarEstudio = async (medi) => {

        
        
        const formData = new FormData();
        formData.append("file", file);
    

        formData.append('id_medico', auth.idUsuario);
        formData.append("id_mascota", medi.idMascota);

        console.log("id_medico",auth.idUsuario)
 
        console.log("id_mascota",medi.idMascota)
        console.log(formData)
        await axios.post('http://localhost:5000/medicos/crear-estudio', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then(response => {

                console.log(response)
            });

  


    }



    const DarReceta = async (medi) => {

        const data =

        {
            "idMascota": mascota,
            "idMedico": auth.idUsuario,
            "idMedicamento": medi.idMedicamento
        }

        console.log(mascota)
        console.log("data para agregar receta", data)

        const resp = await peticion('http://localhost:5000/medicos/asignar-medicamento/', data, 'POST')



    }
    const Getpacientes = async () => {






        const resp = await peticion('http://localhost:5000/medicos/pacientes/' + auth.idUsuario+'/', '', 'GET')
        console.log(resp)
        setpacientes(resp.data)






    }

    const GetMedicamento = async () => {






        const resp = await peticion('http://localhost:5000/medicos/total-medicamentos/', '', 'GET')
        console.log(resp)
        setMedicamentos(resp.info)






    }
    const Filtar = async (e) => {
        e.preventDefault()
        if (values.raza !== '') {

            let alv = []
            for (let index = 0; index < pacientes.length; index++) {
                const element = pacientes[index];
                if (element.raza === values.raza) {
                    alv.push(element)
                }

            }
            let arregloFiltrado = pacientes.filter(item => item.nombres === values.nombres);
            console.log(alv)
            setpacientes(alv)


        } else {

            const resp = await peticion('http://localhost:5000/medicos/pacientes/' + auth.idUsuario+'/', '', 'GET')
            setpacientes(resp)

        }
    }
    useEffect(() => {

        Getpacientes()
        GetMedicamento()




    }, [cargandopacientes]);
    return (
        <div>
            <Grid xs={15} justify='center' align="center">
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
                    Ver Pacientes



                </Text>       </Grid>


            <div class="cards">     <Grid xs={12} sm={4} align="center">

                <Input
                    bordered
                    type="email"
                    width="300px"
                    labelPlaceholder="Buscar por Raza" color="warning"
                    id="raza" name="raza" value={values.raza}
                    onChange={handleInputChange} onBlur={Filtar}


                />

            </Grid>

                {

                    pacientes.map((item, i) => (<>
                        <article class="card">
                            <header>

                                <img src={item.foto} alt="Foto Mascota" />
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
                                    Raza


                                </Text>
                                <Text
                                    h1
                                    size={15}
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%,  $yellow600 100%",
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
                                        textGradient: "45deg, $yellow600 -20%,  $yellow600 100%",
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
                                        textGradient: "45deg, $yellow600 -20%,  $yellow600 100%",
                                    }}
                                    weight="bold"
                                >
                                    {item.TipoAnimal}


                                </Text>

                                <Text
                                    h1
                                    size={15}
                                    css={{
                                        textGradient: "45deg, black -20%, black 100%",
                                    }}
                                    weight="bold"
                                >
                                    Dueño


                                </Text>
                                <Text
                                    h1
                                    size={15}
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%,  $yellow600 100%",
                                    }}
                                    weight="bold"
                                >
                                    {item.ownerUser}


                                </Text>

                            </div>
                            <Row justify="space-around" align="center">
                                <Input

                                    type="file"
                                    className="form-control bg-dark text-light rounded-0 border border-secondary"
                                    onChange={handleChange}
                                />
                            </Row>
                            <Row justify="space-around" align="center">

                                <Button auto ghost color="warning" onClick={() => AsignarMedicamento(item)}>
                                    Asignar Medicamento
                                </Button>
                            </Row>
                            <Row justify="space-around" align="center">
                                <Button auto ghost color="warning" onClick={() => AsignarEstudio(item)}>
                                    Subir Estudio
                                </Button> </Row>



                        </article>



                    </>))

                }
            </div>
            <Modal

                width="600px"



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
                        Medicamentos

                    </Text>


                </Modal.Header>
                <Modal.Body align="center" >
                    <Grid.Container gap={2} justify="flex-start">{
                        medicamentos.map((item, i) => (<>
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
                                                Medicamento
                                            </Text>
                                            <Text css={{ lineHeight: "$xs", color: "$yellow600", padding: '$2 $2' }}>
                                                {item.Nombre}
                                            </Text>



                                            <Row justify="space-around" align="center">

                                                <Button auto ghost color="warning" onClick={() => DarReceta(item)}>
                                                    Asignar
                                                </Button>
                                            </Row>

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




        </div>
    );
}