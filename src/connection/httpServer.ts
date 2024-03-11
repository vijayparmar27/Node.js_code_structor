import http from "http";
import https from "https";
import express from "express";
import fs from "graceful-fs";
import path from "path";
import logger from "../logger";
import morgan from "morgan";
import Config from "../config/config";
import productRouter from "../routers/product.router"


class ServerConnection {
    private server;
    private app = express();

    constructor() {
        const { SSL_CRT_FILE, SSL_KEY_FILE } = Config;

        this.app.use(morgan("dev"))
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use(express.json());
        const uploadFilePath = path.join(__dirname,"../../upload")
        this.app.use(express.static(uploadFilePath))

        this.app.use("/", productRouter)

        this.app.get("/test", (req, res, next) => {
            res.send(`OK.......`)
        })

        if (
            fs.existsSync(path.join(__dirname, SSL_KEY_FILE)) &&
            fs.existsSync(path.join(__dirname, SSL_CRT_FILE))
        ) {
            // creating https secure socket server
            let options = {
                key: fs.readFileSync(path.join(__dirname, SSL_KEY_FILE)),
                cert: fs.readFileSync(path.join(__dirname, SSL_CRT_FILE)),
            };
            logger.info('creating https app');
            this.server = https.createServer(options, this.app);
        } else {
            // creating http server
            logger.info('creating http app');
            this.server = http.createServer(this.app);
        }

    }

    get httpserver() {
        return this.server;
    }

    async listenServer() {
        const { PORT, ENVIROMENT } = Config;

        this.httpserver.listen(PORT, () => {
            logger.debug(`${ENVIROMENT} server listening on ${PORT}`);
        })
    }

}

export const serverConnection = new ServerConnection();