class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.counter = 0;
  }
  // eat function should loop
  // three times before exiting
  // How to implement array here?
  // way off track?
  eat() {
    this.counter++;
    if (this.counter > 2) {
      this.hungry = false;
    }
  }
}


module.exports = Dragon;
