const { REFRESH_RATE, SECONDS} = require('./config.js');

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration(); 
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate/2));

    const msUntilExpiration = Math.random() < 0.5 ?
    refreshRate - expirationPeriod : 
    refreshRate + expirationPeriod;

    this.expiration = new Date(Date.now() + msuntilExpiration);
  }
}