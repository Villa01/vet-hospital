"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.token_auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env = __importStar(require("../env"));
const token_auth = (token) => {
    return new Promise((resolve, reject) => {
        var _a;
        if (!token) {
            reject("token invalido/inexistente");
        }
        try {
            jsonwebtoken_1.default.verify(token, (_a = env.JWT_SECRET) !== null && _a !== void 0 ? _a : '');
        }
        catch (err) {
            reject("token invalido");
        }
        resolve("token valido");
    });
};
exports.token_auth = token_auth;
//# sourceMappingURL=jwt.js.map