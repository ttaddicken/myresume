// var pettingZoo = {
//     lions: [],
//     tigers: [],
//     bears: [],
//     elephants: [],
//     daysithoutIncident: 0
// }

// function Lion(name, gender, maneColor) {
//     this.name = name;
//     this.gender = gender;
//     this.maneColor = maneColor;
//     pettingZoo.lions.push(this)
// }

// var simba = new Lion('Simba', "M", "Red")
// var scar = new Lion("Scar", "M", "Black")
// // write constructor  fn to add bears and Tigers to zoo

// function Bear(name, gender, color) {
//     this.name = name;
//     this.gender = gender;
//     this.color = color;
//     pettingZoo.bears.push(this)
// }
// function Tiger(name, gender, color) {
//     this.name = name;
//     this.gender = gender;
//     this.color = color;
//     pettingZoo.tigers.push(this)
// }
// function elephant(id, gender, color, infection){
//     this.is = id;
//     this.gender = gender;
//     this.color;    
//     this.infection = infection,
//     console.log(this.id)
//     pettingZoo.elephants.push(this)
// }
// function searchInfection (){
// for (pettingZoo){
//     if (pettingzoo.infection == true){
//         return pettingZoo.
//     }
//     }
// }
// -----------------------------------------------------------------------------

var animals = [{
    id: 77896,
    name: 'Simba',
    infection: false
}, {
        id: 666,
        name: 'Chim Chim',
        infection: true
    }, {
        id: 90210,
        name: 'Yogi',
        infection: false,
        type: 'Smarter than your average bear'
    }, {
        id: 8675309,
        name: 'Bullwinkle',
        infection: true
    }, {
        id: 1,
        name: 'Rocky',
        infection: true
    }]
    
function createAnimal(id,name,infection,type){
    this.id = id;
    this.name = name;
    this.infection;
    this.type = type
    animals.createAnimal.push(this)
}

function searchInfection(id) {
    var infectedBox =[]
    for (i = 0; i < animals.length; i++){
        if (animals[i].infection) {
            infectedBox.push(animals[i])
            return infectedBox
            console.log(infectedBox)
    }
    }
}
var monkey  new createAnimal("753","bob","true","")
Var zebra new createAnimal("745","marty","false","Super Strength")