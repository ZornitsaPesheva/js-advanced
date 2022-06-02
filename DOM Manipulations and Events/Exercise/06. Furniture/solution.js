function solve() {
  function addFurniture(){
    let value = document.querySelector('textarea').value;
    let array = JSON.parse(value);

    for (let object of array) {
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
  }

  function buy() {
    let allChecks = document.querySelectorAll('input');
    let names = [];
    let tottalPrice = 0;
    let allDEcFactor = 0
    let count = 0;
    for (let check of allChecks) {
      if (check.checked == true) {
        names.push(document.querySelectorAll('td p')[0].textContent);
        tottalPrice += Number(document.querySelectorAll('td p')[1].textContent);
        allDEcFactor += Number(document.querySelectorAll('td p')[2].textContent);
        count ++;
      }
    }
    let decfactor = (allDEcFactor / count).toFixed(1);
    document.querySelectorAll('textarea')[1].value = 
      `Bought furniture: ${names.join(', ')}\nTotal price: ${tottalPrice.toFixed(2)}\nAvarage decoration factor: ${decfactor}`;
  }

 document.querySelector('button').addEventListener('click', addFurniture);
 document.querySelectorAll('button')[1].addEventListener('click', buy);
}