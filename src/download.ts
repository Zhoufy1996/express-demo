import { Express } from 'express';
import path from 'path';

const handleDowmload = (app: Express) => {
    app.use('/files/:file', (req, res): any => {
        const filePath = path.join(__dirname, 'assets/files', req.params.file);
        res.download(filePath, (err) => {
            if (!err) return;
            if (((err as unknown) as { status: number }).status !== 404) {
                throw new Error('服务器出错了');
            }

            res.statusCode = 404;
            res.send(`Cant find that file, sorry! ${JSON.stringify(err)}`);
        });
    });
};

export default handleDowmload;
