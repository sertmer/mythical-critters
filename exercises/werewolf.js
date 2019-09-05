class Werewolf {
  constructor(name, location){
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    if (this.human === true && this.wolf === false) {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else if (this.human === false && this.wolf === true) {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    } else return;
  }
  eat(victim) {
    if (this.hungry === true) {
      victim.alive = false;
      this.human = true;
    }
  }
}

module.exports = Werewolf
