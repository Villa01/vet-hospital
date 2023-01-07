
import { useForm } from "../hooks/useForm";
import Swal from 'sweetalert2'
import { Image } from "@nextui-org/react";

import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer, Card } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { VerMascota } from "../Componentes/Cliente/VerMascota";
import { AuthContext } from "../Context/AuthContext";
import TextField from '@mui/material/TextField';
import {useUsuario} from "../hooks/useUsuario"

export const Login = () => {
    
    const {CrearUsuario}=useUsuario()
    const [file, setFile] = useState();
    const handleChange = (e) => {
        setFile(e.target.files[0]);
      };
      const { submitLogin } = useContext(AuthContext)
    const { setVisible, bindings } = useModal();

    const { values, handleInputChange } = useForm({


        ruta: '',
        files: '',Username:'',Correo:'',Contraseña:'',ConfirmarContraseña:'',User:'',Pass:''









    });

    const handleLogin = (e) => {
   




        submitLogin(values.Correo, values.Pass)





    }/*
    const AgregarUsuario=()=>{
        
    const formData = new FormData();

        formData.append("fotoPerfil", file);
      



       CrearUsuario(values.Username,values.Correo,values.Password,values.ConfirmarPassword,file)

    }*/
    
    useEffect(() => {




    });
    return (
        <div>


            <div class="Fondoportal" >


                <Grid.Container gap={2} justify="center" align="center" bordered={2}>

                    <div class="centerCard">

                        <Card css={{ p: "$6", mw: "350px" }} >

                            <Card.Header >
                                <Card.Image


                                    src="https://github.com/Juandi22001/Carrito_de_Compras/blob/master/logoayd2.png?raw=true"

                                    alt="efe?"

                                    objectFit="cover"

                                />



                            </Card.Header>





                            <form id="form" >
                                <Card.Body css={{ p: 0, justifyItems: "center", zIndex: 1, top: 5 }}>
                                    <div class="center">
                                        <Grid xs={12} sm={24} align="center">

                                            <Input
                                                bordered
                                                labelPlaceholder="Correo" color="warning"
                                                id="Correo" name="Correo" value={values.Correo}
                                                onChange={handleInputChange}


                                            />

                                        </Grid>


                                        <Grid xs={12} sm={24} align="center">
                                            <Input
                                                id="Pass"
                                                type='password'
                                                bordered
                                                color="warning" placeholder=" Pass"
                                                value={values.Pass} name="Pass" onChange={handleInputChange}


                                            />

                                        </Grid>
                                    </div>
                                </Card.Body>
                                <Row justify="space-around" align="center">

                                    <Grid css={{ m: 10 }}>
                                        <Button auto ghost color="warning" onClick={() => handleLogin()}>
                                            Login
                                        </Button>
                                    </Grid>
                                  

                                </Row>

                            </form>
                        </Card>
                    </div>
                </Grid.Container>
            </div>
        </div>

    )
}
