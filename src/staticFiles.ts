import express, { Express } from 'express';
import path from 'path';

const handleStaticFiles = (app: Express) => {
    app.use('/static', express.static(path.join(__dirname, 'assets')));
};

export default handleStaticFiles;
