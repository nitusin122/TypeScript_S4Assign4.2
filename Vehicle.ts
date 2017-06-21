 namespace VehicleNameSpace {
    export interface Bike {
        companyName: string;
        model: string;
        yearMf: number;
    }

    export function getBikeDetails(bike: Bike){
        return('My Bike Details are :-  <br/>' + 
        'Company: ' + bike.companyName + '<br/>' + 
        'Model: ' + bike.model + '<br/>' + 
        'Year: '+ bike.yearMf);
    }
}