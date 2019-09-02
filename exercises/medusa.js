class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(victim) {
    this.statues.push(victim);
    console.log(victim);
    victim.stoned = true;
    if (this.statues.length > 3) {
      this.statues = this.statues.slice(0, 3);
    }
  }
}

module.exports = Medusa
