const Dragon = require("./dragon");

const Alpha = new Dragon({
  birthday: new Date(), 
  nickname: "A"
});

const Beta = new Dragon({
  birthday: new Date(), 
  nickname: "B",
  traits: [
    {traitType: 'backgroundColor', traitValue: "green"}
  ]
});

const Gamma = new Dragon();

setTimeout(() => {
  const Delta = new Dragon();
  console.log('Delta', Delta);
}, 3000);

console.log('Alpha', Alpha);
console.log('Bata', Beta);
console.log('Gamma', Gamma);


