import dotenv from "dotenv";
import { CONFIG } from "../constants";

const {
    PORT,
    ENVIROMENT,
    SSL_CRT_FILE,
    SSL_KEY_FILE,
    MONGO_SRV
} = CONFIG;

dotenv.config();
const processEnv = process.env

const Config = {
    PORT: processEnv[PORT] || 4000,
    ENVIROMENT: processEnv[ENVIROMENT] || "local",
    SSL_CRT_FILE: processEnv[SSL_CRT_FILE] || "",
    SSL_KEY_FILE: processEnv[SSL_KEY_FILE] || "",
    MONGO_SRV: processEnv[MONGO_SRV] || "",
} 


export default Config;