function create(words) {
   for (let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';
      div.appendChild(p);
      p.textContent = word;
      document.querySelector('#content').appendChild(div);
      div.addEventListener('click', function() {
         p.style.display = 'block';
      });
   }
}