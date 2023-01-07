"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proxy = void 0;
const jwt_1 = require("../helpers/jwt");
const Log_1 = require("./Log");
class Proxy {
    constructor(serviceHandler) {
        this.errorCodes = [...Array(599 - 400 + 1).keys()].map(x => x + 400);
        this.serviceHandler = serviceHandler;
    }
    request(request, response) {
        const token = request.body.token || request.headers["x-access-token"] || '';
        this.checkAccess(token)
            .then(canAccess => {
            if (!canAccess) {
                response.status(401).json({
                    "msg": "Ruta protegida, no autorizado."
                });
            }
            this.serviceHandler.request(request, response);
        })
            .catch(reason => {
            response.status(500).json({
                msg: "No se pudo procesar el token. ",
                reason
            });
        })
            .finally(() => {
            // this.logAccess(request, response);
        });
    }
    checkAccess(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token)
                return true;
            try {
                yield (0, jwt_1.token_auth)(token);
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
    logAccess(request, response) {
        const newLog = Log_1.Log.build({
            Entrada: request.body,
            FechaHora: new Date(),
            Metodo: request.method,
            EsError: this.errorCodes.includes(response.statusCode) ? 0 : 1,
            Salida: {}
        });
        try {
            newLog.save();
        }
        catch (err) {
            response.status(500).json({
                err
            });
        }
    }
}
exports.Proxy = Proxy;
//# sourceMappingURL=Proxy.js.map