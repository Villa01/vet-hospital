"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.E_PASS = exports.E_USER = exports.JWT_SECRET = exports.DB_DATABASE = exports.DB_PASS = exports.DB_USER = exports.DB_HOST = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + '/.env' });
exports.DB_HOST = process.env.DB_HOST;
exports.DB_USER = process.env.DB_USER;
exports.DB_PASS = process.env.DB_PASS;
exports.DB_DATABASE = process.env.DB_DATABASE;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.E_USER = process.env.E_USER;
exports.E_PASS = process.env.E_PASS;
//# sourceMappingURL=env.js.map