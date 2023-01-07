import React from 'react';

import { Routes, Route } from "react-router-dom"
import { PagosUnicos } from '../pages/PagosUnicos';
import { Bienvenida } from '../pages/Bienvenida';
import { Pagos } from '../pages/Pagos';
import { Login } from '../pages/Login';

export const RutasPrivadas = () => {
    return (

        <div >
            <div >
                <div>
                    <Routes>
                
       
                        <Route  path="/" element={<Bienvenida />} />
                        <Route  path="/pagos/:idpago" element={<Pagos />} />

                        <Route path="/PagosUnicos" element={<PagosUnicos />} />
                        <Route path="*" element={<h>La página no existe</h>} />
                    </Routes>
                </div>
            </div>
        </div>

    );
};