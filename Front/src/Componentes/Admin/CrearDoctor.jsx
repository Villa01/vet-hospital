import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2'
import { Checkbox, Grid, Card, Button, Text, Input, useModal, Dropdown } from "@nextui-org/react";
import { useContext, useEffect, useState,useMemo } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { peticion } from '../../helpers/fetch'

export const CrearDoctor = () => {

    const { auth } = useContext(AuthContext)
    const { setVisible, bindings } = useModal();
    const [selected, setSelected] = useState(new Set(["Escoja la especialidad"]));
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    const [vista, setvista] = useState(1);
    const [file, setFile] = useState();
    const [tipo, setTipo] = useState();

    const [selectedSize, setSelectedSize] = useState("md");
    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handletipo1 = (e) => {

        setTipo("privado")

    };
    const handletipo2 = (e) => {


        setTipo("publico")
    };

    const CrearDoctor = async (e) => {

        const data =


            [
                {
                    "email": values.email,
                    "nombres": values.nombres,
                    "apellidos": values.apellidos,
                    "pass": values.pass,
                    "telefono": values.telefono,
                    "tipo_usuario": "3",
                    "especialidad":selectedValue,
                    "horaInicio": values.horaInicio,
                    "HoraFin": values.HoraFin
                }
            ]

        console.log("data para agregar Friend", data)

        const resp = await peticion('http://localhost:5000/usuarios/registrar-medico/', data, 'POST')
















    }
    const { values, handleInputChange } = useForm({

        email: '', nombres: '', apellidos: '', telefono: '', pass: '', especialidad: '', horaInicio: '', HoraFin: ''









    });



    useEffect(() => {
        console.log("pagina", values.pagina)



    });
    return (
        <div>
            <Card  >


                <Grid xs={15} justify='center' align="center">
                    <LocalHospitalIcon fontSize="large" color="danger" sx={{ fontSize: 120 }} />
                </Grid>
                <Text
                    h1
                    size={40}
                    css={{
                        textGradient: "45deg, black -20%, $blue900 100%",
                    }}
                    weight="bold"
                >
                    Crear Medico



                </Text>
                <Grid.Container gap={8} justify="flex-start">
                    <Grid xs={12} sm={4} align="center">

                        <Input
                            bordered
                            type="email"
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


                    <Grid xs={12} sm={4} align="center">
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

                                        <Dropdown.Item key="Medicina General" color="warning">Medicina general</Dropdown.Item>

                                        <Dropdown.Item key="Traumatologia" color="warning">Traumatologia</Dropdown.Item>

                                        <Dropdown.Item key="Oftalmologia" color="warning">Oftalmologia</Dropdown.Item>

                                        <Dropdown.Item key="Ginecologia" color="warning">Ginecologia</Dropdown.Item>


                                        <Dropdown.Item key="Analisis de laboratorio" color="warning">Analisis de laboratorio</Dropdown.Item>


                                    </Dropdown.Menu>
                                </Dropdown>

                    </Grid>
                    <Grid xs={12} sm={4} align="center">

                        <Input
                            bordered
                            width="300px"
                            type="time"
                            labelPlaceholder="horaInicio" color="warning"
                            id="horaInicio" name="horaInicio" value={values.horaInicio}
                            onChange={handleInputChange}


                        />

                    </Grid>
                    <Grid xs={12} sm={4} align="center">

                        <Input
                            bordered
                            width="300px"
                            type="time"
                            labelPlaceholder="HoraFin" color="warning"
                            id="HoraFin" name="HoraFin" value={values.HoraFin}
                            onChange={handleInputChange}


                        />

                    </Grid>
                    <Grid xs={12} sm={3} align="center">  <Button size="xl" auto ghost color="warning" onClick={() => CrearDoctor()}>
                        Crear Medico
                    </Button></Grid>



                </Grid.Container>
            </Card>
        </div>



    )
}