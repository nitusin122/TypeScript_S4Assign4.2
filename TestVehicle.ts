/// <reference path = "Vehicle.ts"/>
/// <reference path = "Mileage.ts" />
//Instance Creation
let myBike: VehicleNameSpace.Bike = { companyName: "Hero ", model: "Splendor iSmart", yearMf: 2016 }

//Calling both Functions
VehicleNameSpace.getBikeDetails(myBike);
VehicleNameSpace.getMileage(myBike, 102.5);

