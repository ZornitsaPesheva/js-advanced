// https://judge.softuni.org/Contests/Practice/DownloadResource/14572

class ChristmasDinner {
    constructor(budget) {
        this._budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set _budget(bgt) {
        if (bgt < 0){
            throw new Error("The budget cannot be a negative number")
        }
        this.budget = bgt;
    }
}

let dinner = new ChristmasDinner(-300);

