class Hobbit {
  constructor (name) {
    this.name = name;
    this.disposition = "homebody";
    this.age = 0;
    this.year = 0;
  }
  celebrateBirthday(){
    this.age++;
  }
}

module.exports = Hobbit
