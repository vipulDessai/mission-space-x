import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import { App } from '../src/App';

const app = express();

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);

    const indexFile = path.resolve(path.join('../', 'build', 'index.html'));
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.use(express.static(path.join('../', 'build')));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Running on localhost:${port}`));