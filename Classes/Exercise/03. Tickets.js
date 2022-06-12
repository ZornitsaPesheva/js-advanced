function ticetsManager(array, sortBy){
    let newArray = [];

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    array.forEach(element => {
        let data = element.split('|');
        newArray.push(new Ticket(data[0], Number(data[1]),  data[2]))
    });

   
    if (sortBy == 'destination') {
        newArray.sort((a, b) => a.destination.localeCompare(b.destination));
    }
    else if (sortBy == 'price') {
        newArray.sort((a, b) => a.price - b.price);
    }
    else if (sortBy == 'status') {
        newArray.sort((a, b) => a.status.localeCompare(b.status));
    }
    return newArray
}

console.log(ticetsManager(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));

// console.log(ticetsManager(['Philadelphia|94.20|available',

// 'New York City|95.99|available',

// 'New York City|95.99|sold',

// 'Boston|126.20|departed'],

// 'status'));
