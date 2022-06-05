function solution() {
    
    let library = {
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

    const func = {
        restock: (arg1, arg2) => {
          return `Success`;
        }
    }

    function doSomething(input) {
        let args = input.split(' ');
        console.log(args[0]);
        console.log(args[1]);
        console.log(args[2]);
        return func[args[0]](args[1], args[2]);

    }

    return doSomething
}

let manager = solution();

console.log(manager("restock flavour 50")); // Success

//console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in

