import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2'
import { Checkbox, Grid, Card, Button, Text, Input, useModal, Radio } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import WomanIcon from '@mui/icons-material/Woman';
import {peticion} from '../../helpers/fetch'
import axios from 'axios';
export const CrearSecretaria = () => {

    const { auth } = useContext(AuthContext)
    const { setVisible, bindings } = useModal();


    const [vista, setvista] = useState(1);
    const [file, setFile] = useState();
    const [tipo, setTipo] = useState();

    const [selectedSize, setSelectedSize] = useState("md");
    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };



    const AgregarSecre = async (e) => {

        const data =


            [
                {
                "email": values.email,
                "nombres": values.nombres,
                "apellidos": values.apellidos,
                "pass": values.pass,
                "telefono": values.telefono,
                "tipo_usuario": "4"
                }
            ]
        
        console.log("data para agregar Friend", data)

        const resp = await peticion('http://localhost:5000/usuarios/registrar-secretaria/', data, 'POST')
















    }
    const { values, handleInputChange } = useForm({

        email: '', nombres: '', apellidos: '', telefono: '', pass: ''









    });



    useEffect(() => {
        console.log("pagina", values.pagina)



    });
    return (
        <div>
            <Card  >


                <Grid xs={15} justify='center' align="center">
                    <WomanIcon fontSize="large" color="danger" sx={{ fontSize: 120 }} />
                </Grid>
                <Text
                    h1
                    size={40}
                    css={{
                        textGradient: "45deg, black -20%, $blue900 100%",
                    }}
                    weight="bold"
                >
                    Crear Secretaria



                </Text>
                <Grid.Container gap={8} justify="flex-start">
                    <Grid xs={12} sm={4} align="center">

                        <Input
                            bordered
                          
                            width="300px"
                            labelPlaceholder="email" color="warning"
                            id="email" name="email" value={values.email}
                            onChange={handleInputChange}


                        />

                    </Grid>
                    <Grid xs={12} sm={4} align="center">

                        <Input
                            bordered
                            width="300px"
                            labelPlaceholder="Nombre" color="warning"
                            id="nombres" name="nombres" value={values.nombres}
                            onChange={handleInputChange}


                        />

                    </Grid>
                    <Grid xs={12} sm={4} align="center">

                        <Input
                            bordered
                            width="300px"
                            labelPlaceholder="apellidos" color="warning"
                            id="apellidos" name="apellidos" value={values.apellidos}
                            onChange={handleInputChange}


                        />

                    </Grid>
                    <Grid xs={12} sm={4} align="center">

                        <Input
                            bordered
                            width="300px"
                            type="number" 
                            labelPlaceholder="telefono" color="warning"
                            id="telefono" name="telefono" value={values.telefono}
                            onChange={handleInputChange}


                        />

                    </Grid>
                    <Grid xs={12} sm={4} align="center">

                        <Input
                            bordered
                            type='password'
                            width="300px"
                            labelPlaceholder="Password" color="warning"
                            id="pass" name="pass" value={values.pass}
                            onChange={handleInputChange}


                        />

                    </Grid>




                    <Grid xs={12} sm={3} align="center">  <Button size="xl" auto ghost color="warning" onClick={() => AgregarSecre()}>
                        Crear Secretaria
                    </Button></Grid>



                </Grid.Container>
            </Card>
        </div>



    )
}