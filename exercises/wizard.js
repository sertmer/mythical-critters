class Wizard {
  constructor(obj) {
    this.name = obj.name;
    this.bearded = true
    if (obj.bearded !== undefined) {
      this.bearded = obj.bearded
    };
    this.isRested = true;
    this.castCount = 0;
  }
  incantation(phrase) {
    return phrase.toUpperCase();
  }
  cast() {
    this.castCount++;
    if (this.castCount >= 3) {
      this.isRested = false;
      return "I SHALL NOT CAST"
    }
    return "MAGIC BULLET";
  }
}

module.exports = Wizard
