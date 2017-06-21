/// <reference path ="Vehicle.ts" />

namespace VehicleNameSpace {    
        export function getMileage(bike: Bike, mileage: number) {
            return(bike.model + ' mileage is '+ mileage + ' kpl');
        }
    }