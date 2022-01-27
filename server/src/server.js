'use strict';

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/companies', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = [
      { 
        id: 1,
        name: 'OÜ 24 Juuli',
        regnum: 12019275
      },
      {
        id: 2,
        name: '007 Autohaus osaühing',
        regnum: 11694365
      },
      {
        id: 3,
        name: 'Aavo Lind Projekt OÜ',
        regnum: 12327054
      },
      {
        id: 4,
        name: 'ABC Abiteenused OÜ',
        regnum: 14650463
      },
      {
        id: 5,
        name: 'ABC Aknad OÜ',
        regnum: 12636453
      },
      {
        id: 6,
        name: 'OÜ ABC Analytics',
        regnum: 12862327
      },
      {
        id: 7,
        name: 'ABC Arveldused OÜ',
        regnum: 14090171
      },
      {
        id: 8,
        name: 'ABC Arve OÜ',
        regnum: 14626341
      },
      {
        id: 9,
        name: 'ABC Invest OÜ',
        regnum: 11267137
      },
      {
        id: 10,
        name: 'OÜ ABC PROFF',
        regnum: 11267597
      },
      {
        id: 11,
        name: 'MTU Paberimaailm',
        regnum: 80550944
      }
    ];
  res.send(JSON.stringify(data, null, 2));
});

app.get('/', function(req, res) {
  res.status(404).send('404 File not found');
});

app.post('/add', function (req, res) {
  let data = req.body;
  console.log('POST request body: \n', data);
  res.status(200).send('Company added successfully!');
})

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});
