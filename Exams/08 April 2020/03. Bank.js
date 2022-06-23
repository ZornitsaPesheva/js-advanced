class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    set _bankName(bankName) {
        this.bankName = bankName;
    }
 
    newCustomer({firstName, lastName, personalId}) {
        if (this.allCustomers.find(c => c.firstName == firstName)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }
        this.allCustomers.push({firstName, lastName, personalId});
        return {firstName, lastName, personalId};
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(c => c.personalId == personalId);
        if (!customer){
            throw new Error('We have no customer with this ID!');
        }
        if (!customer[totalMoney]) {
            customer[totalMoney] = 0
        }
        customer[totalMoney] += amount;
        return `${customer[totalMoney]}$`
    }
}