// https://github.com/ZahariCheyrekov/M05-JS-Advanced/blob/main/L09_PrototypesAndInheritance/Exercises/T03ExtensibleObject.js

function solve() {
    const proto = {};
    const inst = Object.create(proto);

    inst.extend = function (templates) {
        Object.entries(templates).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                inst[key] = value;
            }
        })
    };

    return inst;
}