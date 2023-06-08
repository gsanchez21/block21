class Car {
constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
 }
 
getInfo(){
return "This car make is " + this.make + ", Model:" + this.model + ", Year:" + this.year;

}
}
const myCar = new Car("Honda","Accord",2023);
console.log(myCar.getInfo());

class ElectricCar extends Car {
    constructor(make,model,year,range){
        super(make,model,year)
        this.range = range;
    }
    getInfo(){
        return `${super.getInfo()} and has range of ${this.range} miles`  
    }
}
const myElectricCar = new ElectricCar("Tesla","Model S",2019,300)
console.log(myElectricCar.getInfo());
