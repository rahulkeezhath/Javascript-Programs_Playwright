const car = {
    Color: "White",
    Brand : "Benz",
    Price : 8000000,
    isAutomate : true,
    Features: ["ADAS", "360 Camera", "Seat Ventillation"],
    Engine : {   //Nested Object
        type:"Mild Hybrid Petrol",
        Power: 200
    },
    details : function(){
        console.log(this.Color); // this refers to Car
        console.log(this.Brand);
        
    }
}
console.log(car.Price);
console.log(car.Features[1]);
console.log(car.Engine.Power);
car.details()

import data from './Data.json' with {type:'json'}
const dataString = JSON.stringify(data)
const dataJs = JSON.parse(dataString)
console.log(dataJs.Brand);
