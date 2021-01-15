const express = require('express');
const  GenerationEngine = require('./engine');

const app = express();
const engine = new GenerationEngine();
const port = 3000;

engine.start();

// setTimeout(() => {
//   engine.stop();
// }, 20000);

app.get("/dragon/new", (req, res) => {
  res.json({dragon: engine.generation.newDragon()});
});

app.listen(3000, () => {
  console.log(`Listening on port ${port}`);
})


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


