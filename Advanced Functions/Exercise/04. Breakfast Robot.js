function solution() {
    
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10, 
            fat: 10,
            flavour: 10
        }
    }

    const storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    const func = {
        restock: (arg1, arg2) => {
            storage[arg1] += arg2;
            return `Success`;
        },
        prepare: (arg1, arg2) => {

            let recipe = recipes[arg1];
            for (let r in recipe) {
                let outOfStorage = recipe[r] * arg1;
                if (storage[r] > outOfStorage) {
                    return 'Success'
                }
                else {
                    return `Error: not enough ${r} in stock`;
                }
            }
        }
    }

    function doSomething(input) {
        let args = input.split(' ');
        return func[args[0]](args[1], args[2]);

    }

    return doSomething
}

let manager = solution();

console.log(manager("'restock carbohydrate 10")); // Success

console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in

console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager('report', 'protein=0 carbohydrate=4 fat=3 flavour=5'));