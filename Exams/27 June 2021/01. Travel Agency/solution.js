// https://judge.softuni.org/Contests/Practice/DownloadResource/20668
window.addEventListener('load', solution);

function solution() {
  
  console.log('TODO: Write the missing functionality!');

  const submitBtn = document.getElementById('submitBTN');
  const infoPreview = document.getElementById('infoPreview');
  const editBTN = document.getElementById('editBTN');
  const continueBTN = document.getElementById('continueBTN');
  const block = document.getElementById('block');
  const inputs = document.querySelectorAll('input');
  
  submitBtn.addEventListener('click', submit);

  function submit(e) {
    let data = [];

    
    if (inputs[0].value != '' && inputs[1].value != '') {

   
      const label = [
        'Full Name: ',
        'Email: ',
        'Phone Number: ',
        'Address: ',
        'Postal Code: '
      ]
      for (i = 0; i <= 4; i++) {
        data.push[inputs[i].value];
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
      e.target.setAttribute('disabled', '');
      editBTN.removeAttribute('disabled');
      continueBTN.removeAttribute('disabled');
    }

    editBTN.addEventListener('click', function() {
      for (i = 0; i <= 4; i++) {
        inputs[i].value = data[i];

      }
      submitBtn.removeAttribute('disabled');
      editBTN.setAttribute('disabled', '');
      continueBTN.setAttribute('disabled', '');
      infoPreview.innerHTML = '';
    });

    continueBTN.addEventListener('click', function() {
      block.innerHTML = '';
      block.appendChild(createElement('h3', '', 'Thank you for your reservation!'))
    })
    
  }
}
