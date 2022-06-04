function createProcessor(input) {

    let list = [];

    function add(string) {
        list.push(string);
    }

    function remove(string) {
        list = list.filter(s => s != string);
        
    }

    function print() {
        console.log(list.join(','));
    }

    for (let el of input) {
        [instruction, string] = el.split(' ');
        switch (instruction) {
            case 'add': add(string); break;
            case 'remove': remove(string); break
            case 'print': print(); break
        }
    }

}

createProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

// function solve(arr) {
//     let result = [];
//     let r = {
//         add: (arr, str) => {
//             arr.push(str);
//             return arr;
//         },
//         remove: (arr, str) => {
//             let filtered = arr.filter(e => e != str);
//             return filtered;
//         },
//         print: (arr, _) => {
//             console.log(arr.join(','));
//             return arr;
//         },
//     }

//     arr.forEach(e => {
//         let [command, str] = e.split(' ');
//         result = r[command](result, str);
//     });
// }