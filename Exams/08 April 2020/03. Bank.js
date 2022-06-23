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

    
}