function solve() {
  let text = document.getElementById('input').value;
  let seteces = text.split('.');
  let divElemet = document.getElementById('output');
  for (let i = 0; i < seteces.length; i += 3) {
    let p = document.createElement('p');
    p.textContent = '';
    for (j = i; j <= i + 3; j++){
      if ( seteces[j] != undefined ){
        p.textContent += `${seteces[j]}`;
      }
    }
    divElemet.appendChild(p);
  }
}