function heroicInventory(list) {
    let result = [];
    for (let h of list) {
        let [name, level, items] = h.split(' / ')
        level = Number(level);
        items = items ? items.split(',').map(item => item.trim()) : [];
        result.push({name, level, items});
    }
    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
heroicInventory(['Jake / 1000']);