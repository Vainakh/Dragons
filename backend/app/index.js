const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const  GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');
const accountRouter = require('./api/account');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use(cors({ origin: 'http://localhost:1234', credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/account', accountRouter);
app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ 
    type: 'error', message: err.message
  })
});

engine.start();

// setTimeout(() => {
//   engine.stop();
// }, 20000);

module.exports = app;


// const Generation = require('./generation.js');

// const generation = new Generation();

// console.log('generation', generation);

// const alpha = generation.newDragon();

// console.log("alpha", alpha);

// setTimeout(() => {
//   const beta = generation.newDragon();
//   console.log("beta", beta);
// }, 15000);






















// const Dragon = require("./dragon");

// const Alpha = new Dragon({
//   birthday: new Date(), 
//   nickname: "A"
// });

// const Beta = new Dragon({
//   birthday: new Date(), 
//   nickname: "B",
//   traits: [
//     {traitType: 'backgroundColor', traitValue: "green"}
//   ]
// });

// const Gamma = new Dragon();

// setTimeout(() => {
//   const Delta = new Dragon();
//   console.log('Delta', Delta);
// }, 3000);

// console.log('Alpha', Alpha);
// console.log('Bata', Beta);
// console.log('Gamma', Gamma);


