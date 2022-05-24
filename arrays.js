//11. Diagonal Attack

function diagonalAttack(array) {
    let sum1 = 0;
    let sum2 = 0;
    let k = array.length - 1;
    let matrix = [];
    for (let i = 0; i < array.length; i++) {
        let j = i;
        let row = array[i].split(' ').map(x => Number(x));
        sum1 += row[j];
        sum2 += row[k];
        k--;
        matrix.push(row);
    }
    k = matrix.length - 1;
    if (sum1 == sum2) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++ )
            if (i != j && j != k) {
                matrix[i][j] = sum1;
            }
            k--;
        }

    }
    for (let i = 0; i < matrix.length; i++){
        console.log(matrix[i].join(' '));
    } 
}

diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);


//10 Tic-tac-Toe

// function TicTacToe(moves){
//     let matrix = 
//         [[false, false, false],
//         [false, false, false],
//         [false, false, false]];

//     function checkFalse(x) {
//         return x == false
//     }

//     let i = 0;
//     let gameOver = false;
//     let turn = 'X';
//     let haveWinner = false;

//     while (gameOver == false && i < moves.length && (matrix[0].some(checkFalse) || matrix[1].some(checkFalse) || matrix[2].some(checkFalse))) {
//         let j = moves[i].slice(0, 1);
//         let k = moves[i].slice(2, 3);

//         if (matrix[j][k] != false) {
//             console.log("This place is already taken. Please choose another!");
//             i++;
//         }
//         else {
//             matrix[j][k] = turn;
//             if ((matrix[j][0] === matrix[j][1] && matrix[j][1] === matrix[j][2]) ||
//                 (matrix[0][k] ===  matrix[1][k] && matrix[1][k] ===  matrix[2][k]) ) {
//                 gameOver = true;
//                 console.log(`Player ${matrix[j][k]} wins!`);
//                 haveWinner = true;
//             }
//             else if ((j == k) || (j == 2 && k == 0) || (j == 0 && k == 2)) {
//                 if ((matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[2][2] !== false) ||
//                 (matrix[2][0] === matrix[1][1] && matrix[1][1] === matrix[0][2] && matrix[0][2] !== false)) {
//                         gameOver = true;
//                         console.log(`Player ${matrix[j][k]} wins!`);
//                         haveWinner = true;
//                     }
//             }

//             if (i >= (moves.length - 1)){
  
//                 gameOver = true;
//             } else {
//                 i++;
//                 if (turn == 'X') {
//                     turn = 'O' 
//                 }
//                 else turn = 'X';
//             }
//         }
//     }

//     if (!haveWinner) {
//         console.log("The game ended! Nobody wins :(");
//     }
//     console.log(matrix[0].join('\t'));
//     console.log(matrix[1].join('\t'));
//     console.log(matrix[2].join('\t'));
// }
//TicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
//TicTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
//TicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
//TicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);//

// //9. Magic Matrices

// function magicMatrices(matrix) {
//     let magical = true;
//     let sum = 0;
//     for (let colIndex = 0; colIndex < matrix[0].length; colIndex++) {
//         sum += matrix[0][colIndex];
//     }
//     let rowIndex = 1;
//     while (magical == true && rowIndex < matrix.length) {
//         let currentSum = 0;
//         for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
//             currentSum += matrix[rowIndex][colIndex];
//         }
//         if (currentSum != sum) {
//             magical = false;
//         }
//         rowIndex++;
//     }
//     let colIndex = 0;
//     while (magical == true && colIndex < matrix[0].length) {
//         let currentSum = 0;
//         for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
//             currentSum += matrix[rowIndex][colIndex];
//         }
//         if (currentSum != sum) {
//             magical = false;
//         }
//         colIndex++;
//     }
//     return magical;
// };

// console.log(magicMatrices([[3, 0, 0], [0, 1, 2], [0, 2, 1]]));
// console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
// console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));

// //8 Sort an Array by 2 Criteria
// function sortArray(array) {
//     array.sort((a, b) => compare(a, b));
//     function compare(a, b) {
//         if (a.length != b.length) {
//             return a.length - b.length
//         }
//         else {
//             return a.localeCompare(b);
//         }
//     }
//     console.log(array.join(' \n'));
// }

// sortArray(['alpha', 'beta', 'gamma']);
// sortArray(['Isacc', 'Theodor','Jack', 'Harrison', 'George']);
// sortArray(['test', 'Deny', 'omen', 'Default']);

// function sortingNumbers(array) {
//     array.sort((a, b) => (a - b));
//     const newArray = [];
//     while (array.length > 0) {
//         newArray.push(array.shift());
//         newArray.push(array.pop());
//     }
//     return newArray;
// }

// console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

// function listOfNames(names) {
//     names.sort((a, b) => a.localeCompare(b));
//     for(i = 0; i < names.length; i++ ) {
//         console.log(`${i+1}.${names[i]}`)
//     }
// }

// listOfNames(["John", "Bob", "Christina", "Ema"]);


// function extract(input) {
//     let currentBiggest = input[0];
//     const array = [input[0]];
//     for (let i = 1; i <= input.length - 1; i++) {
//         if (input[i] >= currentBiggest) {
//             array.push(input[i]);
//                 currentBiggest = input[i];
//         }
//     }
//     return array;
// }

// console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(extract([1, 2, 3, 4]));
// console.log(extract([20, 3, 2, 15, 6, 1]));

// function rotate(array, n) {
//     for (let i = 1; i <= n; i++) {
//         let value = array.pop();
//         array.unshift(value);
//     }
//     console.log(array.join(' '));
// }

// rotate(['1', '2', '3', '4'], 2);
// rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15);

// function addRemove(commands) {
//     let number = 1;
//     const array = [];
//     for (i = 0; i < commands.length; i++) {
//         if (commands[i] == 'add') {
//             array.push(number);
//         }
//         if (commands[i] == 'remove') {
//             array.pop(number);
//         }
//         number++;
//     }
//     if (array.length == 0) {
//         console.log('Empty')
//     }
//     else {
//         console.log(array.join('\n'));
//     }
// }

// addRemove(['add', 'add', 'add', 'add']);
// addRemove(['add', 'add', 'remove', 'add', 'add']);
// addRemove(['remove', 'remove', 'remove']);

// function print(array, delimiter) {
//     const newArray = [];
//     for (i = 0; i < array.length; i += delimiter) {
//         newArray.push(array[i]);
//     }
//      return newArray;
// }

// console.log(print(['5', '20', '31', '4', '20'], 2));
// console.log(print(['dsa', 'asd', 'test', 'tset'], 2));
// console.log(print(['1', '2', '3', '4', '5'],6));

// function print(array, delimiter) {
//     console.log(array.join(delimiter))
// }

// print(['One', 'Two', 'Three', 'Four', 'Five'], '-');
// print(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');

// function diagonalSums(matrix) {
//     let main = 0;
//     let secondary = 0;
//     let colIndex = 0;
//     for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
//             main += matrix[rowIndex][colIndex];
//             colIndex++;
//         }
//     colIndex = matrix.length - 1;
//     for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
//         secondary += matrix[rowIndex][colIndex];
//         colIndex--;
//     }
//     console.log(`${main} ${secondary}`);
// }

//     diagonalSums([
//         [20, 40],
//         [10, 60]
//     ]);
//     diagonalSums([
//         [3, 5, 17],
//         [-1, 7, 14],
//         [1, -8, 89]
//     ]);


// function biggestElement(matrix) {
//     let be = Number.NEGATIVE_INFINITY;
//         for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
//             for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
//                 if (matrix[rowIndex][colIndex] > be) {
//                     be = matrix[rowIndex][colIndex];
//                 }
//         }
//     }
//     return be;
// }

// console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
// console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));

// function smallestTwoNumbers(array) {
//     array.sort((a, b) => a - b);
//     console.log(array.slice(0, 2).join(' '));
// }

// smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);


// function lastKNumbersSequence(n, k){
//     let array = [];
//     array.push(Number(1));
//     for (i = 1; i < n; i++) {
//         let sum = 0;
//         for (j = 1; j <= k; j++){
//             if (i - j >= 0) {
//                 sum += array[i - j];
//             }
//         }
//         array.push(Number(sum));
//     }
//     return array;
// }

// console.log(lastKNumbersSequence(6, 3));
// console.log(lastKNumbersSequence(8, 2));

// function equalNeighbors(matrix) {
//     let counter = 0;
//     for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
//         for (let colIndex = 0; colIndex < matrix[rowIndex].length - 1; colIndex++) {
//             if (matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]) {
//                 counter++;
//             }
//         }
//     }
//     const rowSize = matrix[0].length;
//     for (let colIndex = 0; colIndex < rowSize; colIndex++) {
//         for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
//             if (matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
//                 counter++;
//             }
//         }
//     }
//     console.log(counter);
// }

// equalNeighbors([['2', '3', '4', '7', '0'], ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']]);
// equalNeighbors([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']]);

// const processOddPositions = (nums) => nums
//         .filter((x, i) => i % 2)
//         .map(x => x * 2)
//         .reverse()
//         .join(' ');

// console.log(processOddPositions([10, 15, 20, 25]));
// console.log(processOddPositions([3, 0, 10, 4, 7, 3]));

// function pieceOfPie(pies, start, end) {
//     const startIndex = pies.indexOf(start);
//     const endIndex =  pies.indexOf(end) + 1;
//     return pies.slice(startIndex, endIndex);
// }

// console.log(pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
// 'Key Lime Pie', 'Lemon Meringue Pie'));
// console.log(pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'],
// 'Pot Pie', 'Smoked Fish Pie'));

// function biggerHalf(nums) {
//     nums.sort((a, b) => a - b);

//     const result = [];

//     for (let i = Math.floor(nums.length / 2);  i < nums.length; i++) {
//         result.push(nums[i]);
//     }

//     return result;
// }

// console.log(biggerHalf([4, 7, 2, 5]));
// console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));


// function positiveNegative(nums) {
//     const result = [];
//     for (let num of nums) {
//         if (num < 0) {
//             result.unshift(num);
//         }
//         else {
//             result.push(num);
//         }
//     }
//     console.log(result.join('\n'))
// }

// positiveNegative([7, -2, 8, 9]);
// positiveNegative([3, -2, 0, -1]);


// function firstLast(numAsStrings) {
//     // копираме масива, за да не се изтрие първия елемент с shift
//     let first = [...numAsStrings].shift();
//     let last = [...numAsStrings].pop();
//     const result = Number(first) + Number(last);
//     console.log(result);
// }

// firstLast(['20', '30', '40']);
// firstLast(['5', '10']);

// function EvenPositionElement(input) {
//     let result = [];

//     for (let i = 0; i < input.length; i += 2) {
//         result[result.length] = input[i];
//     }
//     console.log(result.join(' '));
// };

// EvenPositionElement(['20', '30', '40', '50', '60']);
// EvenPositionElement(['5', '10']);
