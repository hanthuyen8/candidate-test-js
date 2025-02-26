import express from "express";
import {createServer} from "http";
import bodyParser from "body-parser";
import cors from "cors";
import {AddressInfo} from "net";
import simpleHandlers from "./routers/SimpleHandlers";
import * as Dependencies from "./Dependencies";
import extendResponse from "./consts/ExpressExtension";
import helmet from "helmet";
import SampleHandler from "./routers/SampleHandler";

const dependencies = Dependencies.initDependencies();
const logger = dependencies.logger;
const envConfig = dependencies.envConfig;

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json({limit: '1kb'}));
app.use(bodyParser.urlencoded({limit: '1kb', extended: true}));

// Extension method
app.use((req, res, next) => {
    extendResponse(res);
    next();
});

app.use(helmet());

router.get(`/`, simpleHandlers.healthCheckHandler);

const handler = new SampleHandler(dependencies);

router.get(`/user-income-list`, handler.getList.bind(handler));
router.get(`/version`, handler.getVersion.bind(handler));

app.use(`/api`, router);
app.get(`/`, simpleHandlers.healthCheckHandler);


const server = createServer(app).listen(
    9000,
    '0.0.0.0',
    () => {
        const address = server.address() as AddressInfo;
        logger.info(`Server started at http://${address.address}:${address.port}`);
    }
);