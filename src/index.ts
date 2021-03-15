import express from 'express';
import open from 'open';
<<<<<<< HEAD

const app = express();

=======
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import handleStaticFiles from './staticFiles';
import handleCookies from './cookies';
import handleDowmload from './download';

const app = express();

app.use(logger('dev'));
app.use(cookieParser());

handleStaticFiles(app);

handleCookies(app);

handleDowmload(app);

>>>>>>> 2f9a404... file/cookie/download
const port = 8000;

app.get('/', (req, res) => {
    res.send('hello word');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    open(`http://localhost:${port}`);
});
