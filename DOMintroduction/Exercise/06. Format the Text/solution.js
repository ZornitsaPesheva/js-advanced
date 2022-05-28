function solve() {
  let text = document.getElementById('input').value;
  let seteces = text.split('.');
  let divElemet = document.getElementById('output');
  for (let i = 0; i < seteces.length; i += 3) {
    let p = document.createElement('p');
    p.textContent = `${seteces[i]}${seteces[i+1]}${seteces[i+2]}`;
    divElemet.append(p);
  }
}