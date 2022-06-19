// https://judge.softuni.org/Contests/Practice/DownloadResource/20668
window.addEventListener('load', solution);

function solution() {
  
  console.log('TODO: Write the missing functionality!');

  const submitBtn = document.getElementById('submitBTN');
  const infoPreview = document.getElementById('infoPreview');
  const editBTN = document.getElementById('editBTN');
  const continueBTN = document.getElementById('continueBTN');
  
  submitBtn.addEventListener('click', submit);

  function submit(e) {
    let inputs = document.querySelectorAll('input');
    if (inputs[0].value != '' && inputs[1].value != '') {

      const label = [
        'Full Name: ',
        'Email: ',
        'Phone Number: ',
        'Address: ',
        'Postal Code: '
      ]
      for (i = 0; i <= 4; i++) {
        infoPreview.appendChild(createElement('li', label[i], inputs[i].value))
      }
  
      function createElement(type, label, content) {
        const element = document.createElement(type);
        element.textContent = label + content;
        return element;
      }
      for (i = 0; i <= 4; i++) {
         inputs[i].value = '';
      }
      e.target.setAttribute('disable', '');
      editBTN.removeAttribute('disabled');
      continueBTN.removeAttribute('disabled');
    }
  }
}
