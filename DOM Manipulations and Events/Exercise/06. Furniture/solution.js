function solve() {
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const tbody = document.querySelector('tbody');

  generateBtn. addEventListener('click', generate);
  buyBtn. addEventListener('click', buy);

  const items = [];

  //parse input JSON and crete table
  // -- find iput text ares
  // -- parse JSON
  // -- for every item 
  // ---- create row
  // ---- append row to table body
  function generate() {
    const data = JSON.parse(input.value);

    for (let item of data) {
      const row = document.createElement('tr');
      row.appendChild(creteColumn('img', item.img));      // Image column
      row.appendChild(creteColumn('p', item.name));       // Name column
      row.appendChild(creteColumn('p', item.price));      // Price column
      row.appendChild(creteColumn('p', item.decFactor));  // Decoration column 

      // Input column
      const c5 = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      c5.appendChild(checkbox);
      row.appendChild(c5);
      tbody.appendChild(row);

      items.push({
        ...item,
        isChecked
      });

      function isChecked() {
        return checkbox.checked;
      }

    }
  }

  // find user chices and summarize purchase
  // -- find all checked boxes
  // -- for every row
  // ---- read data from parent row
  // -- output result to textarea

  function buy() {
    let list = [];
    let total = 0;
    let decoration = 0;

    const bought = items.filter(i => i.isChecked());

    for (let item of bought) {
      list.push(item.name);
      total += Number(item.price);
      decoration += Number(item.decFactor);
    }
    decoration /= bought.length;

    output.value = [
      `Bought furniture: ${list.join(', ')}`, 
      `Total price: ${total.toFixed(2)}`, 
      `Average decoration factor: ${decoration}`
    ].join('\n');

  }

  function creteColumn(type, content) {
    const result = document.createElement('td');
    let inner;
    if (type == 'img') {
      inner = document.createElement('img');
      inner.src = content;
    }
    else {
      inner = document.createElement('p');
      inner.textContent = content;
    }
    result.appendChild(inner);
    return result;
  }
} 

// function solve() {
//   function addFurniture(){
//     let value = document.querySelector('textarea').value;
//     if (value != '') {
//       let array = JSON.parse(value);
//       for (let object of array) {
//         let tr = document.createElement('tr');
//         let tdImage = document.createElement('td');
//         let img = document.createElement('img');
//         img.src = object.img;
//         tdImage.appendChild(img);
//         tr.appendChild(tdImage);  
  
//         let tdName = document.createElement('td');
//         let name = document.createElement('p');
//         name.textContent = object.name;
//         tdName.appendChild(name);
//         tr.appendChild(tdName); 
  
//         let tdPrice = document.createElement('td');
//         let price = document.createElement('p');
//         price.textContent = Number(object.price);
//         tdPrice.appendChild(price);
//         tr.appendChild(tdPrice); 
  
//         let tdDecoration = document.createElement('td');
//         let decoration = document.createElement('p');
//         decoration.textContent = Number(object.decFactor);
//         tdDecoration.appendChild(decoration);
//         tr.appendChild(tdDecoration);
  
//         let tdCheck = document.createElement('td');
//         let check = document.createElement('input');
//         check.type = 'checkbox';
//         tdCheck.appendChild(check);
//         tr.appendChild(tdCheck);
  
//         document.querySelector('tbody').appendChild(tr);
//       }
//     }
//   }
   

//   function buy() {
//     let allChecks = Array.from(document.querySelectorAll('tbody input')).filter(c => c.checked);
//     let names = [];
//     let tottalPrice = 0;
//     let allDEcFactor = 0;
//     for (let check of allChecks) {
//       let furniture = check.parentElement.parentElement;
//       names.push(furniture.querySelectorAll('p')[0].textContent);
//       tottalPrice += Number(furniture.querySelectorAll('p')[1].textContent);
//       allDEcFactor += Number(furniture.querySelectorAll('p')[2].textContent);
//     }
//     let decfactor = (allDEcFactor / allChecks.length);
//     document.querySelectorAll('textarea')[1].value = 
//       `Bought furniture: ${names.join(', ')}\r\nTotal price: ${tottalPrice.toFixed(2)}\r\nAverage decoration factor: ${decfactor}`;
//   }

//  document.querySelector('button').addEventListener('click', addFurniture);
//  document.querySelectorAll('button')[1].addEventListener('click', buy);
// }