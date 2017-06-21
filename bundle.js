var VehicleNameSpace;
(function (VehicleNameSpace) {
    function getBikeDetails(bike) {
        return ('My Bike Details are :-  <br/>' +
            'Company: ' + bike.companyName + '<br/>' +
            'Model: ' + bike.model + '<br/>' +
            'Year: ' + bike.yearMf);
    }
    VehicleNameSpace.getBikeDetails = getBikeDetails;
})(VehicleNameSpace || (VehicleNameSpace = {}));
/// <reference path ="Vehicle.ts" />
var VehicleNameSpace;
(function (VehicleNameSpace) {
    function getMileage(bike, mileage) {
        return (bike.model + ' mileage is ' + mileage + ' kpl');
    }
    VehicleNameSpace.getMileage = getMileage;
})(VehicleNameSpace || (VehicleNameSpace = {}));
/// <reference path = "Vehicle.ts"/>
/// <reference path = "Mileage.ts" />
//Instance Creation
var myBike = { companyName: "Hero ", model: "Splendor iSmart", yearMf: 2016 };
//Calling both Functions
VehicleNameSpace.getBikeDetails(myBike);
VehicleNameSpace.getMileage(myBike, 102.5);
