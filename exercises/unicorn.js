class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }
  isWhite(){
    return false;
  }
  says(message){
    return `**;* ${message} *;**`
  }
}

module.exports = Unicorn;
