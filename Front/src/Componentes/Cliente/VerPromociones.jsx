import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import {
  Checkbox,
  Grid,
  Card,
  Button,
  Text,
  Input,
  useModal,
  Spacer,
  Modal,
  Row,
} from "@nextui-org/react";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import { peticion } from "../../helpers/fetch";
import axios from "axios";
export const VerPromociones = () => {
    const servicio=[
       { Desc: "dsasdf",
        Precio: "222",
        Servicios: 
        ['Masaje', 'Cepillado', 'Limpieza de oidos']
        },
        { Desc: "dsasdf",
        Precio: "222",
        Servicios: 
        ['Masaje', 'Cepillado', 'Limpieza de oidos']
        },
        { Desc: "dsasdf",
        Precio: "222",
        Servicios: 
        ['Masaje', 'Cepillado', 'Limpieza de oidos']
        },  { Desc: "dsasdf",
        Precio: "222",
        Servicios: 
        ['Masaje', 'Cepillado', 'Limpieza de oidos']
        }, { Desc: "dsasdf",
        Precio: "222",
        Servicios: 
        ['Masaje', 'Cepillado', 'Limpieza de oidos']
        }, { Desc: "dsasdf",
        Precio: "222",
        Servicios: 
        ['Masaje', 'Cepillado', 'Limpieza de oidos']
        }
        
    ]
  const { auth } = useContext(AuthContext);
  const { setVisible, bindings } = useModal();
  let serviciosAux = [];

  const [vista, setvista] = useState(1);
  const [file, setFile] = useState();
  const [tipo, setTipo] = useState();
  const [serve, Setservicios] = useState([

    {Servicio:"Baño",Precio:100}


]);
  const [selectedSize, setSelectedSize] = useState("md");
  
  const Pagar = async (precio) => {
    window.location.replace("/PagosUnicos")
  localStorage.setItem("Pago",precio)
  };
  const { values, handleInputChange } = useForm({
  
  });

  useEffect(() => {
    console.log("pagina", servicio);
  });
  return (
    <div>
      <Card>
        <Grid xs={15} justify="center" align="center">
          <MedicalInformationIcon
            fontSize="large"
            color="danger"
            sx={{ fontSize: 120 }}
          />
        </Grid>
        <Text
          h1
          size={40}
          css={{
            textGradient: "45deg, black -20%, $blue900 100%",
          }}
          weight="bold"
        >
          Promociones
        </Text>
        <Grid xs={4} sm={6} align="center">
    
                  </Grid>
        <Grid.Container gap={4} justify="flex-start">
    
          {servicio.map((item, i) => (
            <>
              <Grid xs={4} sm={3} align="center">
                <Card isPressable css={{ p: "$2", mw: "300px" }}>
                  <Card.Body css={{ p: 5, justifyItems: "center" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Grid xs={15} justify="" align="center">
                        <MedicalInformationIcon
                          fontSize="large"
                          color="black"
                          sx={{ fontSize: 80 }}
                        />
                      </Grid>
                      <Text
                        h1
                        size={20}
                        css={{
                          width: "1000px",
                          textGradient: "45deg, black -20%, black 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        Promocion
                      </Text>

                      <Text
                        h1
                        size={15}
                        css={{
                          width: "1000px",
                          textGradient: "45deg, $yellow600 -20%, $yellow600 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        {item.Desc}
                      </Text>
                      <Text
                        h1
                        size={20}
                        css={{
                          width: "1000px",
                          textGradient: "45deg, black -20%, black 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        Precio
                      </Text>

                      <Text
                        h1
                        size={15}
                        css={{
                          width: "1000px",
                          textGradient: "45deg, $yellow600 -20%, $yellow600 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        ${item.Precio}
                      </Text>
                      <Text
                        h1
                        size={20}
                        css={{
                          width: "1000px",
                          textGradient: "45deg, black -20%, black 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        Servicios
                      </Text>
                      {item.Servicios.map((rec, i) => (
                            <>
                            
                      <Text
                        h1
                        size={15}
                        css={{
                          width: "1000px",
                          textGradient: "45deg, $yellow600 -20%, $yellow600 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        --{rec}
                      </Text>
                            </>
                            ))}

                      <Button
                    auto
                    ghost
                    color="warning"
                    onPress={() => Pagar(item.Precio)}
                
                  >
                    Comprar
                  </Button>
                    </Row>
                  </Card.Body>
                </Card>
              </Grid>
            </>
          ))}
        
        </Grid.Container>
      </Card>
 
      
    </div>
  );
};
