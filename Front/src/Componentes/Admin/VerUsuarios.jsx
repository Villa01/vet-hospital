import { useContext, useEffect, useState } from 'react'

import { Radio, Grid, Button, Text, Checkbox, Input, Row, useModal, Spacer, Modal } from "@nextui-org/react";
import GroupIcon from '@mui/icons-material/Group';
import { useForm } from "../../hooks/useForm";
import { AuthContext } from '../../Context/AuthContext'
import { peticion } from '../..//helpers/fetch';

export const VerUsuarios = () => {

    const { verificarToken, auth } = useContext(AuthContext)
    const [tipo, setTipo] = useState();
    const [usuarios, setusuarios] = useState([])
    const [frec, setfrec] = useState(0)
    const [cargandousuarios, setcargandousuarios] = useState([])
    const handletipo1 = (e) => {

        setTipo("privado")

    };
    const VerModal = (item) => {
        setVisible(true)


        const email = item.Email
        values.email = email
        const especialidad = item.Especialidad
        values.especialidad = especialidad

        const Frecuente = item.ClienteFrecuente
        values.Frecuente = Frecuente


        const password = item.password
        values.password = password

        const nombres = item.nombres
        values.nombres = nombres




        const apellidos = item.apellidos
        values.apellidos = apellidos

        const idUsuario = item.idUsuario
        values.idUsuario = idUsuario


        const telefono = item.telefono
        values.telefono = telefono


    };


    const { setVisible, bindings } = useModal();
    const { values, handleInputChange } = useForm({
        idUsuario:0,

        ruta: '',
        nombre: '',
        email: '', nombres: '', apellidos: '', telefono: '', pass: '', especialidad: '', horaInicio: '', HoraFin: '', password: '', Frecuente: 0, tipoUsuario: ''









    });


    const Eliminar = async (idFriend) => {

        console.log("id a eliminar", idFriend)
        const token = localStorage.getItem("token")
        const data = [{
            "token": token
        }]
        let arregloFiltrado = usuarios.filter(item => item.idUsuario !== idFriend);
        setusuarios(arregloFiltrado)
        console.log(arregloFiltrado)
        const resp = await peticion('http://localhost:5000/usuarios/eliminar/' + idFriend+'/', data, 'DELETE')




    }
    const Editar = async (idFriend) => {
   
        var isChecked = document.getElementById('check').checked;
        if (isChecked) {
            setfrec(1)
          
           
        }
        const token = localStorage.getItem("token")
        const data = [
            {
                "id": values.idUsuario,
                "tipoUsuario": "2",
                "email": values.email,
                "especialidad": values.especialidad,
                "frecuente": frec,
                "password": values.password,
                "nombres": values.nombres,
                "apellidos": values.apellidos,
                "telefono": values.telefono,
                "token": token
                }]
        

        const resp = await peticion('http://localhost:5000/usuarios/editar/', data, 'PUT')
        setusuarios(resp)

/*
        const id = localStorage.getItem("iduser")
        const data = {
            "idUsuarioActual": id,
            "idAmigo": idFriend
        }

        const resp = await peticion('http://localhost:5000/ObtenerUsuarios', '', 'GET')
        setusuarios(resp)*/


    }


    const GetUsuarios = async () => {






        const resp = await peticion('http://localhost:5000/usuarios/ObtenerUsuarios/', '', 'GET')
        setusuarios(resp)







    }
    const Filtar = async (e) => {
        e.preventDefault()
        if (values.nombre !== '') {

            let alv = []
            for (let index = 0; index < usuarios.length; index++) {
                const element = usuarios[index];
                if (element.nombres === values.nombre) {
                    alv.push(element)
                }

            }
            let arregloFiltrado = usuarios.filter(item => item.nombres === values.nombres);
            console.log(alv)
            setusuarios(alv)


        } else {

            const resp = await peticion('http://localhost:5000/usuarios/ObtenerUsuarios/', '', 'GET')
            setusuarios(resp)

        }
    }
    useEffect(() => {

        GetUsuarios()





    }, [cargandousuarios]);
    return (
        <div>
            <Grid xs={15} justify='center' align="center">
                <GroupIcon fontSize="large" color="black" sx={{ fontSize: 80 }} />
            </Grid>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, black -20%, black 100%",
                }}
                weight="bold"
            >
                Ver Usuarios



            </Text>
            <Grid xs={12} sm={4} align="center">

                <Input
                    bordered
                    type="email"
                    width="300px"
                    labelPlaceholder="Buscar por Nombre" color="warning"
                    id="nombre" name="nombre" value={values.nombre}
                    onChange={handleInputChange} onBlur={Filtar}


                />

            </Grid>
            <table class="content-table">
                <thead>
                    <th>Nombre </th>

                    <th>Apellido</th>
                    <th>Telefono</th>

                    <th>Email</th>
                    <th>Especialidad </th>

                    <th></th>
                </thead>

                {

                    usuarios.map((item, i) => (<>
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
                                    {item.nombres}



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
                                    {item.apellidos}



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
                                    {item.telefono}



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
                                    {item.Email}



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
                                    {item.Especialidad}



                                </Text>
                            </td>

                            <td>
                                <Grid xs={12} sm={3} align="center">  <Button auto ghost color="warning" onPress={() => VerModal(item)}>
                                    Editar
                                </Button>





                                </Grid>

                                <Grid xs={12} sm={3} align="center">  <Button auto ghost color="warning" onClick={() => Eliminar(item.idUsuario)}>
                                    Eliminar
                                </Button>





                                </Grid>

                            </td>
                        </tr>
                    </>))

                }


            </table>

            <Modal

                width="400px"



                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header css={{ xs: 8 }}   >





                    <Text
                        h1
                        size={60}
                        css={{
                            width: '300px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                        }}
                        weight="bold"
                    >
                        Editar Archivo

                    </Text>


                </Modal.Header>
                <Modal.Body align="center" >


                    <Row justify='center' align="center" css={{ m: 10 }} >


                        <Input
                            clearable
                            bordered
                            Placeholder="" color="warning"
                            id="email" name="email" value={values.email}
                            onChange={handleInputChange}


                        />
                        <Spacer y={2.5} />
                    </Row>

                    <Row justify='center' align="center" css={{ m: 10 }} >


                        <Input
                            clearable
                            bordered
                            type="password"
                            Placeholder="" color="warning"
                            id="password" name="password" value={values.password}
                            onChange={handleInputChange}


                        />
                        <Spacer y={2.5} />
                    </Row>

                    <Row justify='center' align="center" css={{ m: 10 }} >


                        <Checkbox color="warning" id="check" defaultSelected={true}>Frecuente</Checkbox>
                        <Spacer y={2.5} />
                    </Row>

                    <Row justify='center' align="center" css={{ m: 10 }} >


                        <Input
                            clearable
                            bordered
                            Placeholder="" color="warning"
                            id="nombres" name="nombres" value={values.nombres}
                            onChange={handleInputChange}


                        />
                        <Spacer y={2.5} />
                    </Row>

                    <Row justify='center' align="center" css={{ m: 10 }} >


                        <Input
                            clearable
                            bordered
                            Placeholder="" color="warning"
                            id="apellidos" name="apellidos" value={values.apellidos}
                            onChange={handleInputChange}


                        />
                        <Spacer y={2.5} />
                    </Row>
                    
                    <Row justify='center' align="center" css={{ m: 10 }} >


                        <Input
                            clearable
                            bordered
                            Placeholder="" color="warning"
                            id="telefono" name="telefono" value={values.telefono}
                            onChange={handleInputChange}


                        />
                        <Spacer y={2.5} />
                    </Row>
                    <Row justify='center' align="center" css={{ xs: 1 }} >




                        <Button auto ghost color="warning" onClick={() => Editar()} >
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
}