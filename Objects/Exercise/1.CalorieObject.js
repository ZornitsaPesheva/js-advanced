function calorieObjest(data){
    let object = {};
    for (let i = 0; i < data.length; i += 2) {
        object[data[i]] = Number(data[i + 1]);
    }
    console.log(object);
}
calorieObjest(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObjest(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
