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
    } if (this.layingDown === true) {
      return ('NO!');
    }
    console.log(this.counter);
    return ('Twang!!!');
  }
  run() {
    this.counter++;
    if (this.counter > 2) {
      this.cranky = true;
    } if (this.layingDown === true) {
      return('NO!')
    }
    console.log(this.counter)
    return ('Clop clop clop clop!!!');
  }
  sleep() {
    if (this.standing === true) {
      return('NO!');
    } if (this.layingDown === true) {
        this.cranky = false;
        this.counter = 0;
        return ('ZZZZ');
    } this.cranky = false;
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
    console.log(this.standing)
  }
  drinkPotion() {
    if (this.cranky === true) {
      this.cranky = false;
    } console.log(this.cranky);
    if (this.layingDown === true) {
      return ('Not while I\'m laying down!')
    } else if (this.counter < 3) {
      this.cranky = true;
    }
  }
}


module.exports = Centaur;
