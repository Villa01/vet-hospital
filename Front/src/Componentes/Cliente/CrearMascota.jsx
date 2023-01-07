import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2'
import { Checkbox, Grid, Card, Button, Text, Input, useModal, Avatar } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import PetsIcon from '@mui/icons-material/Pets';
import { peticion } from '../../helpers/fetch'
import axios from 'axios';
export const CrearMascota = () => {

    const { auth } = useContext(AuthContext)
    const { setVisible, bindings } = useModal();


    const [vista, setvista] = useState(1);

    const [Mascota, setMascota] = useState("");
  
    const [tipo, setTipo] = useState();

    const [selectedSize, setSelectedSize] = useState("md");
    const [file, setFile] = useState();
    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handletipo1 = (e) => {

        setTipo("privado")

    };
    const handletipo2 = (e) => {


        setTipo("publico")
    };
    async function encodeFileAsBase64URL(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener('loadend', () => {
                resolve(reader.result);
            });
            reader.readAsDataURL(file);
        });
    };


    const CrearMascota = async (e) => {

        var isChecked = document.getElementById('perro').checked;
        var isChecked2 = document.getElementById('gato').checked;
        if (isChecked) {
            setMascota("perro")


        }
        if (isChecked2) {
            setMascota("gato")


        }


        var foto =""
        const base64URL = await encodeFileAsBase64URL(file);
   
        const data =
       

        {
            "raza": values.raza,
            "tipo": Mascota,
            "edad": values.edad,
            "foto": base64URL,
            "idUsuario": auth.idUsuario
        }
  



        console.log("data para agregar mascota", data)

    const resp = await peticion('http://localhost:5000/microservicios3/registrar/mascota/usuario/',data,'POST')
        console.log("respuesta",resp)
   















    }
    const { values, handleInputChange } = useForm({

        raza: '', tipo: '', edad: '', foto: '', pass: '', especialidad: '', horaInicio: '', HoraFin: ''









    });



    useEffect(() => {
        console.log("pagina", values.pagina)



    });
    return (
        <div>
            <Card  >


                <Grid xs={15} justify='center' align="center">
                    <PetsIcon fontSize="large" color="danger" sx={{ fontSize: 120 }} />
                </Grid>
                <Text
                    h1
                    size={40}
                    css={{
                        textGradient: "45deg, black -20%, $blue900 100%",
                    }}
                    weight="bold"
                >
                    Crear Mascota



                </Text>
                <Grid.Container gap={8} justify="flex-start">
                    <Grid xs={12} sm={4} align="center">

                      

                    </Grid>
                    <Grid xs={12} sm={4} align="center">

                        <Input
                            bordered
                            type="email"
                            width="300px"
                            labelPlaceholder="raza" color="warning"
                            id="raza" name="raza" value={values.raza}
                            onChange={handleInputChange}


                        />
                    </Grid>

                    <Grid xs={12} sm={4} align="center">

                        <Input
                            bordered
                            width="300px"
                            type="number"
                            labelPlaceholder="edad" color="warning"
                            id="edad" name="edad" value={values.edad}
                            onChange={handleInputChange}


                        />

                    </Grid>

                    <Grid xs={12} sm={4} align="center">



                        <Checkbox color="warning" id="gato" defaultSelected={true}>Gato</Checkbox>

                    </Grid>
                    <Grid xs={12} sm={4} align="center">

                        <Checkbox color="warning" id="perro" defaultSelected={true}>Perro</Checkbox>
                    </Grid>

                    <Grid xs={12} sm={4} align="center">

                        <Input

                            type="file"
                            className="form-control bg-dark text-light rounded-0 border border-secondary"
                            onChange={handleChange}
                        />


                    </Grid>
                    <Grid xs={12} sm={3} align="center">  <Button size="xl" auto ghost color="warning" onClick={() => CrearMascota()}>
                        Crear Mascota
                    </Button></Grid>



                </Grid.Container>
            </Card>
        </div>



    )
}