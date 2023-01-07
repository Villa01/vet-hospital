import { useContext, useEffect, useState } from 'react'

import { Radio, Grid, Button, Text, Checkbox, Input, Row, useModal, Spacer, Avatar } from "@nextui-org/react";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { useForm } from "../../hooks/useForm";
import { AuthContext } from '../../Context/AuthContext'
import { peticion } from '../..//helpers/fetch';

export const Vercitas = () => {

    const { verificarToken, auth } = useContext(AuthContext)
    const [tipo, setTipo] = useState();
    const [citas, setcitas] = useState([])
    const [frec, setfrec] = useState(0)
    const [cargandocitas, setcargandocitas] = useState([])
    const handletipo1 = (e) => {

        setTipo("privado")

    };


    const { setVisible, bindings } = useModal();
    const { values, handleInputChange } = useForm({
        idUsuario: 0,

        ruta: '',
        nombre: '',
        email: '', nombres: '', apellidos: '', telefono: '', pass: '', especialidad: '', horaInicio: '', HoraFin: '', password: '', Frecuente: 0, tipoUsuario: ''









    });


    const Autorizar = async (idFriend) => {




    }



    const Getcitas = async () => {






        const resp = await peticion('http://localhost:5000/citas/ObtenerCitasPagadas/', '', 'GET')
        setcitas(resp)







    }
    const Filtar = async (e) => {
        e.preventDefault()
        if (values.nombre !== '') {

            let alv = []
            for (let index = 0; index < citas.length; index++) {
                const element = citas[index];
                if (element.nombres === values.nombre) {
                    alv.push(element)
                }

            }
            let arregloFiltrado = citas.filter(item => item.nombres === values.nombres);
            console.log(alv)
            setcitas(alv)


        } else {

            const resp = await peticion('http://localhost:5000/Obtenercitas/', '', 'GET')
            setcitas(resp)

        }
    }
    useEffect(() => {

        Getcitas()





    }, [cargandocitas]);
    return (
        <div>
            <Grid xs={15} justify='center' align="center">
                <FactCheckIcon fontSize="large" color="black" sx={{ fontSize: 80 }} />
            </Grid>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, black -20%, black 100%",
                }}
                weight="bold"
            >
                Ver citas



            </Text>

            <table class="content-table">
                <thead>
                    <th>Medico Asignado </th>

                    <th>Horario</th>
                    <th>EstadoCita</th>


                    <th>Motivo </th>

                    <th>Precio </th>

                    <th>Mascota </th>

                    <th> </th>
                </thead>

                {

                    citas.map((item, i) => (<>
                        <tr >

                            <td>
                                <Text
                                    h1
                                    size={15}
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $yellow600  100%",
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
                                        textGradient: "45deg, $yellow600  -20%, $yellow600  100%",
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
                                        textGradient: "45deg, $yellow600 -20%, $yellow600 100%",
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
                                        textGradient: "45deg, $yellow600 -20%, $yellow600 100%",
                                    }}
                                    weight="bold"
                                >
                                    {item.MotivoPago}



                                </Text>
                            </td>
                            <td>
                                <Text
                                    h1
                                    size={15}
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $yellow600 100%",
                                    }}
                                    weight="bold"
                                >
                                    $  {item.Precio}



                                </Text>
                            </td>

                            <td>
                                <Avatar
                                    size="lg"
                                    src={item.foto}
                                    css={{ size: "$40" }}
                                    color="primary"
                                    bordered
                                />
                            </td>

                            <td>
                                <Grid xs={12} sm={3} align="center">  <Button auto ghost color="warning" onPress={() => Autorizar(item)}>
                                    Autorizar
                                </Button>












                                </Grid>

                            </td>
                        </tr>
                    </>))

                }


            </table>


        </div>
    );
}