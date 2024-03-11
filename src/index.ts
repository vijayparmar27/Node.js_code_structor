import { serverConnection } from "./connection/httpServer";
import { mongoConnection } from "./connection/mongoConection";
import logger from "./logger";



(async () => {

    serverConnection.listenServer()
    mongoConnection.init()

    process
        .on('unhandledRejection', (reason, p) => {
            console.log(reason)
            console.log(p)
            logger.error(
                reason,
                'Unhandled Rejection at Promise >> ',
                new Date(),
                ' >> ',
                p,
            );
        })
        .on('uncaughtException', (err) => {
            console.log(err)
            logger.error('Uncaught Exception thrown', new Date(), ' >> ', '\n', err);
        });
})()