class Pirate {
  constructor (name, job) {
    this.name = name;
    this.job = job || "Scallywag";
    this.cursed = false;
    this.counter = 0
    this.yar = false;
    // this.robShip() = "YAARRR!";
  }
  commitHeinousAct() {
    this.counter++;
    if (this.counter > 2) {
      this.cursed = true;
    }
  }
  robShip() {

  }
}

module.exports = Pirate
