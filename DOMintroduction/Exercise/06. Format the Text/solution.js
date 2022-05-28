function solve() {
  let text = document.getElementById('input').value;

  if (text.slice(-1) == '.')
  text = text.slice(0, -1);
  let setneces = text.split('.');

  let divElemet = document.getElementById('output');
  for (let i = 0; i < setneces.length; i += 3) {
    let p = document.createElement('p');
    p.textContent = '';
    for (j = i; j <= i + 3; j++){
      if ( setneces[j] != undefined ){
        p.textContent += `${setneces[j]}.`;
      }
    }
    divElemet.appendChild(p);
  }
}