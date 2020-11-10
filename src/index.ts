import express from 'express';
import * as bodyParser from 'body-parser';
import * as routes from "./routes";
const app = express();
const port = 8000; // default port to listen

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
routes.register(app);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});