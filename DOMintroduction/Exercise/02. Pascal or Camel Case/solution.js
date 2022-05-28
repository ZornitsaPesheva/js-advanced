function solve() {
  let input = document.getElementById('text').value.toLowerCase();
  let currentCase = document.getElementById('naming-convention').value;
  let result = '';
  if (currentCase == 'Pascal Case') {
    let arr = input.split(' ');
    let pascalCaseArr = arr.map(w => (w.toUpperCase()[0] + w.substring(1)));
    result = pascalCaseArr.join('');
  }
  else if (currentCase == 'Camel Case') {
    let arr = input.split(' ');
    let pascalCaseArr = arr.map(w => (w.toUpperCase()[0] + w.substring(1)));
    let camel = pascalCaseArr.join('');
    result = camel[0].toLowerCase() + camel.substring(1);
  }
  else {
    result = 'Error!'
  }
  let resultElement = document.getElementById('result');
  resultElement.innerHTML = result;
}