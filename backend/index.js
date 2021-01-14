const Dragon = require("./dragon");

const Adlan = new Dragon({
  birthday: new Date(), 
  nickname: "Dadashka"
});

const Bulat = new Dragon({
  birthday: new Date(), 
  nickname: "Buleek"
});

const Tapa = new Dragon();

setTimeout(() => {
  const Ibra = new Dragon();
  console.log({Ibra});
}, 3000);

const Vaha = new Dragon();

console.log({Adlan});
console.log({Bulat});
console.log({Tapa});
