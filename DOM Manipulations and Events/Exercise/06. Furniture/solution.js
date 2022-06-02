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
      let p = document.createElement('p');
      p.textContent = object.name;
      tdName.appendChild(p);
      tr.appendChild(tdName); 
      document.querySelector('table').appendChild(tr);
    }
    console.log('added');
  }

 document.querySelector('button').addEventListener('click', addFurniture)
}