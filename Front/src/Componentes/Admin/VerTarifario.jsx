import { useContext, useEffect, useState } from 'react'

import { Radio, Grid, Button, Text, Checkbox, Input, Row, useModal, Spacer, Modal } from "@nextui-org/react";
import GroupIcon from '@mui/icons-material/Group';
import { useForm } from "../../hooks/useForm";
import { AuthContext } from '../../Context/AuthContext'
import { peticion } from '../..//helpers/fetch';

export const Vertarifas = () => {

    const { verificarToken, auth } = useContext(AuthContext)
    const [tipo, setTipo] = useState();
    const [tarifas, settarifas] = useState([])
    const [tarifa, settarifa] = useState(0)
    const [cargandotarifas, setcargandotarifas] = useState([])
    const handletipo1 = (e) => {

        setTipo("privado")

    };
    const VerModal = (item) => {
        setVisible(true)
        settarifa(item)



    };


    const { setVisible, bindings } = useModal();
    const { values, handleInputChange } = useForm({
        idUsuario:0,

        ruta: '',
        nombre: '',
        email: '', nombres: '', apellidos: '', telefono: '', pass: '', especialidad: '', horaInicio: '', HoraFin: '', password: '', precio: 0, tipoUsuario: ''









    });


    const Editar = async (idTarifa) => {

    
        const data ={ 
            "id": tarifa,
            "precio": values.precio
        }
        console.log("dara editar tarifa ",data)
        const resp = await peticion('http://localhost:5000/pagos/actualizar/tarifas/', data, 'PUT')

        const resp3 = await peticion('http://localhost:5000/pagos/obtener/tarifas/', '', 'GET')
        console.log(resp3)
        settarifas(resp3.data)
/*
        const id = localStorage.getItem("iduser")
        const data = {
            "idUsuarioActual": id,
            "idAmigo": idFriend
        }

        const resp = await peticion('http://localhost:5000/Obtenertarifas', '', 'GET')
        settarifas(resp)*/


    }


    const Gettarifas = async () => {






        const resp = await peticion('http://localhost:5000/pagos/obtener/tarifas/', '', 'GET')
        console.log(resp)
        settarifas(resp.data)







    }
    const Filtar = async (e) => {
        e.preventDefault()
        if (values.nombre !== '') {

            let alv = []
            for (let index = 0; index < tarifas.length; index++) {
                const element = tarifas[index];
                if (element.nombres === values.nombre) {
                    alv.push(element)
                }

            }
            let arregloFiltrado = tarifas.filter(item => item.nombres === values.nombres);
            console.log(alv)
            settarifas(alv)


        } else {

            const resp = await peticion('http://localhost:5000/pagos/Obtenertarifas/', '', 'GET')
            settarifas(resp)

        }
    }
    useEffect(() => {

        Gettarifas()





    }, [cargandotarifas]);
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
                Ver tarifas



            </Text>
  

 
            <table class="content-table">
                <thead>
                    <th>Motivo </th>

                    <th>Precio</th>
            

                    <th></th>
                </thead>

                {

                    tarifas.map((item, i) => (<>
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
                                    {item.Motivo}



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
                                <Grid xs={12} sm={3} align="center">  <Button auto ghost color="warning" onPress={() => VerModal(item.idTarifa)}>
                                    Editar
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
                        Editar Tarifa

                    </Text>


                </Modal.Header>
                <Modal.Body align="center" >


                    <Row justify='center' align="center" css={{ m: 10 }} >


                        <Input
                            clearable
                            bordered
                            Placeholder=" nuevo precio" color="warning"
                            id="precio" name="precio" value={values.precio}
                            onChange={handleInputChange}


                        />
                        <Spacer y={2.5} />
                    </Row>

                    <Row justify='center' align="center" css={{ m: 10 }} >

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