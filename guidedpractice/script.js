
class Home {
    constructor(rooms, bathrooms, squareFeet) {
      this.rooms = rooms;
      this.bathrooms = bathrooms;
      this.squareFeet = squareFeet;
    }
  
    getInfo() {
      return `This home has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and is ${this.squareFeet} square feet.`;
    }
    
  }
const myHouse = new Home(4,3,3000);
console.log(myHouse.getInfo());

class SingleFamilyHome extends Home {
  constructor(rooms, bathrooms, squareFeet, yardSize) {
    super(rooms, bathrooms, squareFeet);
    this.yardSize = yardSize;
  }

  getInfo() {
    return `${super.getInfo()} It has a ${this.yardSize} square foot yard.`;
  }
}
const mySingleFamilyHome = new SingleFamilyHome(5,3,3000,600);
console.log(mySingleFamilyHome.getInfo());

class Apartment extends Home {
  constructor(rooms,bathrooms, squareFeet, floor){
    super(rooms,bathrooms,squareFeet);
    this.floor = floor;
  }
  getInfo(){
    return `${super.getInfo()} It is on floor ${this.floor}.`;
  }
}
const myApartment = new Apartment(6,4,4500,2);
console.log(myApartment.getInfo());
