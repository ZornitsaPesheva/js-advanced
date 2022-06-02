function solve() {
  function addFurniture(){
    let value = document.querySelector('textarea').value;
    let array = JSON.parse(value);

    for (let object of array) {
      console.log(object.img);
      let tr = document.createElement('tr');
      let tdImage = document.createElement('td');
      let img = document.createElement('img');
      img.src = object.img;
      tdImage.appendChild(img);
      tr.appendChild(tdImage);  

      let tdName = document.createElement('td');
      let name = document.createElement('p');
      name.textContent = object.name;
      tdName.appendChild(name);
      tr.appendChild(tdName); 

      let tdPrice = document.createElement('td');
      let price = document.createElement('p');
      price.textContent = object.price;
      tdPrice.appendChild(price);
      tr.appendChild(tdPrice); 

      let tdDecoration = document.createElement('td');
      let decoration = document.createElement('p');
      decoration.textContent = object.decFactor;
      tdDecoration.appendChild(decoration);
      tr.appendChild(tdDecoration);

      let tdCheck = document.createElement('td');
      let check = document.createElement('input');
      check.type = 'checkbox';
      tdCheck.appendChild(check);
      tr.appendChild(tdCheck);

      document.querySelector('table').appendChild(tr);

    }
    console.log('added');
  }

 document.querySelector('button').addEventListener('click', addFurniture)
}