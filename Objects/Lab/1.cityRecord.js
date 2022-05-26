function cityRecord(name, population, treasury) {
    const result = {
       name,
       population,
       treasury
    };
    return result;
}

console.log(cityRecord('Tortuga', 7000, 15000));
console.log(cityRecord('Santo Domingo', 12000, 23500));

const myCity = cityRecord('Tortuga', 7000, 15000);
const {name, treasury} = myCity;

