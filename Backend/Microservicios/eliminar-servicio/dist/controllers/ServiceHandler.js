"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceHandler = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const init_models_1 = require("../models/init-models");
const { Servicio } = (0, init_models_1.initModels)(connection_1.default);
class ServiceHandler {
    request(request, response) {
        const { idServicio } = request.params;
        const query = {
            where: {
                idServicio: Number(idServicio)
            }
        };
        Servicio.destroy(query)
            .then(resp => {
            if (resp === 0)
                return response.status(409).json({
                    msg: "No fue posible eliminar el contenido"
                });
            return response.json({
                msg: "Eliminado correctamente"
            });
        })
            .catch(resp => {
            response.status(400).json(resp);
        });
    }
}
exports.ServiceHandler = ServiceHandler;
//# sourceMappingURL=ServiceHandler.js.map