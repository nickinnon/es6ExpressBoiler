import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use('/', router);

app.listen(port, () => {
    console.log( 'jwt-service listening on port 3000!');
});
