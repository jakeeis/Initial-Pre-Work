//In this exercise I learned how to use getters and setters to change values of
//an object

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor(fTemp){
      this.fTemp = fTemp;
    }

    get temperature(){
      return (5 / 9) * (this.fTemp - 32)
    }

    set temperature(cTemp){
      this.ftemp = cTemp * (9.0 / 5) + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
