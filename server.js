import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import { App } from './src/App';
import axios from 'axios';

const app = express();

app.get('/', async (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);

    const initialLaunchData = await axios.get("https://api.spacexdata.com/v3/launches?launch_year=2006");
    

    const indexFile = path.resolve(path.join('build', 'index.html'));
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

app.use(express.static('build'));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Running on localhost:${port}`));