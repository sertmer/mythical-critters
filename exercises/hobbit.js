class Hobbit {
  constructor (name) {
    this.name = name;
    this.disposition = "homebody";
    this.age = 0;
    this.year = 0;
    this.adult = this.age > 32;
  }
  celebrateBirthday(){
    // this.age++;
    this.age++;
    // console.log(this.age);
    if (this.age > 32) {
      this.adult = true;
    }
  }
}

module.exports = Hobbit
