const DEFAULT_VALUES = {
  nickname: "unnamed",
  get birthday() {
    return new Date();
  } 
};

class Dragon {
  constructor({birthday, nickname} = {}) {
    this.birthday = birthday || DEFAULT_VALUES.birthday;
    this.nickname = nickname || DEFAULT_VALUES.nickname;
  }
};

module.exports = Dragon;