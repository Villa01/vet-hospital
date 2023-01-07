"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceHandler = void 0;
const Servicio_1 = require("../models/Servicio");
class ServiceHandler {
    request(request, response) {
        const { idServicio } = request.params;
        Servicio_1.Servicio.destroy({
            where: {
                idServicio
            }
        })
            .then(resp => {
            console.log(resp);
            response.json(resp);
        })
            .catch(resp => {
            response.status(400).json(resp);
        });
    }
}
exports.ServiceHandler = ServiceHandler;
//# sourceMappingURL=ServiceHandler.js.map