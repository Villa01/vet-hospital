import Swal from "sweetalert2";
import { useState, createContext, useCallback } from "react";
import { peticion } from "../helpers/fetch";
import axios from "axios";
export const AuthContext = createContext();

/* 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjUsImlhdCI6MTY2Mjg0NzAwOX0.dccWPoa_0kjnM3sNra_L8Y8BOqUfXhVvJrXntG781bw",
    "token_decrypted": {
        "idUsuario": 5,
        "iat": 1662847009
    },
    "info_user": {
        "info": {
            "idUsuario": 5,
            Especialidad: null,
            Email: "prueba@gmail.com",
            ClienteFrecuente: 0,
            password: "$2a$10$nZ8/Q5bz.9siysAn.mSC0.3gddOcg0g.9wKjbCvp2PEAgC2/hoCoq",
            nombres: "prueba",
            apellidos: "prueba1",
            telefono: "56786544"
        }
    }
}



*/

const usuariosPrueba = [
  {
    idUsuario: 2,
    Especialidad: null,
    Email: "javillatoro1@gmail.com",
    ClienteFrecuente: 0,
    password: "prueba123",
    nombres: "Erick",
    apellidos: "Villatoro",
    telefono: "53041486",
  },
  {
    idUsuario: 3,
    Especialidad: null,
    Email: "leonardo@gmail.com",
    ClienteFrecuente: 0,
    password: "prueba1",
    nombres: "martino",
    apellidos: "langrena",
    telefono: "56786544",
  },
  {
    idUsuario: 5,
    Especialidad: null,
    Email: "prueba@gmail.com",
    ClienteFrecuente: 0,
    password: "$2a$10$nZ8/Q5bz.9siysAn.mSC0.3gddOcg0g.9wKjbCvp2PEAgC2/hoCoq",
    nombres: "prueba",
    apellidos: "prueba1",
    telefono: "56786544",
  },
  {
    idUsuario: 6,
    Especialidad: null,
    Email: "javillatoro1@gmail.com",
    ClienteFrecuente: 0,
    password: "prueba123",
    nombres: "Erick",
    apellidos: "Villatoro",
    telefono: "53041486",
  },
  {
    idUsuario: 7,
    Especialidad: null,
    Email: "secretaria1@gmail.com",
    ClienteFrecuente: 0,
    password: "prueba123",
    nombres: "Secretaria1",
    apellidos: "Prueba",
    telefono: "53041486",
  },
  {
    idUsuario: 8,
    Especialidad: "TRAUMATOLOGIA",
    Email: "javillatoro1@gmail.com",
    ClienteFrecuente: 0,
    password: "1232154",
    nombres: "Juan",
    apellidos: "Mendoza",
    telefono: "12314123",
  },
  {
    idUsuario: 9,
    Especialidad: "TRAUMATOLOGIA",
    Email: "javillatoro1@gmail.com",
    ClienteFrecuente: 0,
    password: "1232154",
    nombres: "Juan",
    apellidos: "Mendoza",
    telefono: "12314123",
  },
  {
    idUsuario: 10,
    Especialidad: "TRAUMATOLOGIA",
    Email: "javillatoro1@gmail.com",
    ClienteFrecuente: 0,
    password: "1232154",
    nombres: "Juan",
    apellidos: "Mendoza",
    telefono: "12314123",
  },
  {
    idUsuario: 11,
    Especialidad: "TRAUMATOLOGIA",
    Email: "asd@gmail.com",
    ClienteFrecuente: 0,
    password: "1232154",
    nombres: "Juan",
    apellidos: "Mendoza",
    telefono: "12314123",
  },
  {
    idUsuario: 12,
    Especialidad: "TRAUMATOLOGIA",
    Email: "asdfa@gmail.com",
    ClienteFrecuente: 0,
    password: "1232154",
    nombres: "Juan",
    apellidos: "Mendoza",
    telefono: "12314123",
  },
  {
    idUsuario: 13,
    Especialidad: "TRAUMATOLOGIA",
    Email: "asdfasdfas@gmail.com",
    ClienteFrecuente: 0,
    password: "1232154",
    nombres: "Juan",
    apellidos: "Mendoza",
    telefono: "12314123",
  },
  {
    idUsuario: 14,
    Especialidad: "TRAUMATOLOGIA",
    Email: "asfdasdfads@gmail.com",
    ClienteFrecuente: 0,
    password: "1232154",
    nombres: "Juan",
    apellidos: "Mendoza",
    telefono: "12314123",
  },
  {
    idUsuario: 15,
    Especialidad: "TRAUMATOLOGIA",
    Email: "asdfasdfasdfasdf@gmail.com",
    ClienteFrecuente: 0,
    password: "1232154",
    nombres: "Juan",
    apellidos: "Mendoza",
    telefono: "12314123",
  },
  {
    idUsuario: 16,
    Especialidad: "TRAUMATOLOGIA",
    Email: "asfdasdf@gmail.com",
    ClienteFrecuente: 0,
    password: "1232154",
    nombres: "Juan",
    apellidos: "Mendoza",
    telefono: "12314123",
  },
  {
    idUsuario: 17,
    Especialidad: "TRAUMATOLOGIA",
    Email: "asdfaaa@gmail.com",
    ClienteFrecuente: 0,
    password: "1232154",
    nombres: "Juan",
    apellidos: "Mendoza",
    telefono: "12314123",
  },
  {
    idUsuario: 18,
    Especialidad: "TRAUMATOLOGIA",
    Email: "prueba@gmail.com",
    ClienteFrecuente: 0,
    password: "$2a$10$3.hfOFZCDpL278dWFtbnReVPEzP80HpgAQ0dlDVRExiC/LDf2eopK",
    nombres: "prueba",
    apellidos: "prueba1",
    telefono: "56786544",
  },
  {
    idUsuario: 19,
    Especialidad: null,
    Email: "prueba@gmail.com",
    ClienteFrecuente: 0,
    password: "$2a$10$.J4xfJBHzmmbO9EG.2o1g.J1ibyjQGXJFN08LMXPG.zE2gpUCawa6",
    nombres: "prueba",
    apellidos: "prueba1",
    telefono: "56786544",
  },
  {
    idUsuario: 20,
    Especialidad: null,
    Email: "prueba@gmail.com",
    ClienteFrecuente: 0,
    password: "$2a$10$SD62goEKfF7JsQVO4ivybeSY8CF.il5JA/.3wAFKCUMy.tH/.BDai",
    nombres: "prueba",
    apellidos: "prueba1",
    telefono: "56786544",
  },
  {
    idUsuario: 21,
    Especialidad: "CARDIOLOGIA",
    Email: "correo@correo.com",
    ClienteFrecuente: 0,
    password: "asdfsald;jlsdaf",
    nombres: "Juan Diego",
    apellidos: "Alvarado",
    telefono: "45234393",
  },
  {
    idUsuario: 39,
    Especialidad: null,
    Email: "cliente@gmail.com",
    ClienteFrecuente: 0,
    password: "$2a$10$jvR3PdoNGPVpN/Zg37RjXef10bnTPxwU3dhZDOFEgHMO2UL235t7K",
    nombres: "cliente",
    apellidos: "prueba1",
    telefono: "56786544",
    tipoUsuario: "1",
  },
];
const initialState = {
  uid: null,
  checking: true,
  logged: false,
  idUsuario: 0,
  Especialidad: null,
  Email: "",
  ClienteFrecuente: 0,
  nombres: "",
  apellidos: "",
  telefono: "",

  roles: [],
};

function AuthProvider({ children }) {
  const [log, setlog] = useState(false);
  const [auth, setauth] = useState(initialState);
  let alv = [];

  const submitLogin = async (Correo, Password) => {
    let data = [
      {
        correo: Correo,

        password: Password,
      },
    ];

    console.log(data);

    const url = "http://localhost:5000/usuarios/login/";
    const resp = await peticion(url, data, "POST");
    console.log(resp);

    if (resp.token !== null) {
      if (resp.info_user.info.TipoUsuario === 1) {
        alv = [
          {
            nombre: "Crear Cliente",
            valor: "2",
          },
          {
            nombre: "Crear Secretaria",
            valor: "3",
          },
          {
            nombre: "Crear Medico",
            valor: "4",
          },
          {
            nombre: "Ver Usuarios",
            valor: "5",
          },
          {
            nombre: "Ver Citas",
            valor: "12",
          },
          ,
          {
            nombre: "Ver Tarifas",
            valor: "13",
          },{
            nombre: "Servicios",
            valor: "20",
          },{
            nombre: "Promociones",
            valor: "21",
          },{
              nombre: "Farmacia",
              valor: "15"
          }
          
        ];
      } else if (resp.info_user.info.TipoUsuario === 2) {
        alv = [
          {
            nombre: "Crear Mascota",
            valor: "6",
          },
          {
            nombre: "Ver  Mascotas",
            valor: "7",
          },
          {
            nombre: "Agendar Cita  Mascotas",
            valor: "11",
          },{
            nombre: "Productos",
            valor: "16",
          },  {
            nombre: "Ver Servicios",
            valor: "30",
          },{
            nombre: "Ver Promociones",
            valor: "31",
          },
        
        ];
      } else if (resp.info_user.info.TipoUsuario === 3) {
        alv = [
          {
            nombre: "Ver Citas",
            valor: "8",
          },
          {
            nombre: "Ver Pacientes",
            valor: "9",
          },
          {
            nombre: "Ver Emergencias",
            valor: "10",
          },
        ];
      } else if (resp.info_user.info.TipoUsuario === 4) {
        alv = [
          {
            nombre: "Registrar Cita",
            valor: "14",
          },
        ];
      }
      localStorage.setItem("token", resp.token);

      localStorage.setItem("idUsuario", resp.info_user.info.idUsuario);
      setauth({
        checking: false,
        logged: true,

        idUsuario: resp.info_user.info.idUsuario,
        Especialidad: resp.info_user.info.Especialidad,
        Email: resp.info_user.info.Email,
        ClienteFrecuente: resp.info_user.info.ClienteFrecuente,
        nombres: resp.info_user.info.nombres,
        apellidos: resp.info_user.info.apellidos,
        telefono: resp.info_user.info.telefono,

        roles: alv,
      });

      console.log(auth);
      Swal.fire("Credenciales correctas", "Mensaje:", "info");
    } else {
      Swal.fire("Credenciales Incorrectas", "Mensaje:", "error");
    }
  };

  const verificarToken = useCallback(async () => {
    const token = localStorage.getItem("idUsuario");
    const id = localStorage.getItem("idUsuario");

    const prueba = ""; //await FetchSesion('Sesion','GET')

    if (token === null) {
      return setauth({
        uid: null,
        checking: true,
        logged: false,
        Nombre: null,
        Telefono: null,
        Edad: null,
      });
    } else {
      const id = localStorage.getItem("idUsuario");

      const token = localStorage.getItem("token");

      let data = [
        {
          token: token,
        },
      ];

      console.log(data);

      const resp = await peticion(
        "http://localhost:5000/usuarios/usuariosActivos/",
        data,
        "POST"
      );
      console.log("respuesta", resp);
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        console.log(element);

        if (element.idUsuario == id) {
          if (element.idTipoUsuario === 1) {
            console.log("Acaaaaa adentroooo");
            alv = [
              {
                nombre: "Crear Cliente",
                valor: "2",
              },
              {
                nombre: "Crear Secretaria",
                valor: "3",
              },
              {
                nombre: "Crear Medico",
                valor: "4",
              },
              {
                nombre: "Ver Usuarios",
                valor: "5",
              },
              {
                nombre: "Ver Citas",
                valor: "12",
              },
              ,
              {
                nombre: "Ver Tarifas",
                valor: "13",
              },{
                nombre: "Servicios",
                valor: "20",
              },{
                nombre: "Promociones",
                valor: "21",
              },{
                  nombre: "Farmacia",
                  valor: "15"
              }
              
            ];
          } else if (element.idTipoUsuario === 2) {
            console.log("cliente");


             alv = [
                {
                  nombre: "Crear Mascota",
                  valor: "6",
                },
                {
                  nombre: "Ver  Mascotas",
                  valor: "7",
                },
                {
                  nombre: "Agendar Cita  Mascotas",
                  valor: "11",
                },
                {
                  nombre: "Ver Servicios",
                  valor: "30",
                },{
                  nombre: "Ver Promociones",
                  valor: "31",
                },{
                  nombre: "Productos",
                  valor: "16",
                }
              ];
          } else if (element.idTipoUsuario === 3) {
            alv = [
              {
                nombre: "Ver Citas",
                valor: "8",
              },
              {
                nombre: "Ver Pacientes",
                valor: "9",
              },
              {
                nombre: "Ver Emergencias",
                valor: "10",
              },
            ];
          } else if (element.idTipoUsuario === 4) {
            alv = [
              {
                nombre: "Registrar Cita",
                valor: "14",
              },
            ];
          }
          setauth({
            checking: false,
            logged: true,

            idUsuario: element.idUsuario,
            Especialidad: element.Especialidad,
            Email: element.Email,
            ClienteFrecuente: element.ClienteFrecuente,
            nombres: element.nombres,
            apellidos: element.apellidos,
            telefono: element.telefono,

            roles: alv,
          });
        }
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        submitLogin,
        auth,
        verificarToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
