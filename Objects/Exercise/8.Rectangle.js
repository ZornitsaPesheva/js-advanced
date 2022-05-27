function Rectangle(width, height, color) {
    let rect = {
        width: Number(width),
        height: Number(height),
        color: color[0].toUpperCase() + color.substring(1),
        calcArea() {
            return width * height
        }
    };

    return rect;
}

let rect = Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea())
