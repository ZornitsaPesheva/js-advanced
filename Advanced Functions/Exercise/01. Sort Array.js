function sort(array, argument) {
    let result = [];

    const sorter = {
        asc(a, b) {return a - b},
        desc(a, b) {return b - a}
    }

    result = array.sort(sorter[argument]);
    console.log(result);
    return result;
}
sort([14, 7, 17, 6, 8], 'asc');
sort([14, 7, 17, 6, 8], 'desc');