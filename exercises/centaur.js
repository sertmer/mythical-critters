class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
  }
  shoot() {
    this.counter++;
    if (this.counter > 2) {
      this.cranky = true;
      return ('NO!');
    }
    console.log(this.counter);
    return ('Twang!!!');
  }
  run() {
    this.counter++;
    if (this.counter > 2) {
      this.cranky = true;
    }
    console.log(this.counter)
    return ('Clop clop clop clop!!!');
  }
  sleep() {
    if (this.standing = true) {
      return('NO!');
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
}

module.exports = Centaur;
