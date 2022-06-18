// https://judge.softuni.org/Contests/Practice/DownloadResource/18086

class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!condition in this.priceForTheCamp) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.some(p => p.name == name)) {
            throw new Error(`The ${name} is already registered at the camp.`)
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }  
        else {
            this.listOfParticipants.push({name, condition, power: 100, wins: 0});
            return `The ${name} was successfully registered.`
        } 
    }
}