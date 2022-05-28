function search() {
   let input = document.getElementById('searchText').value;
   let resultList = document.getElementsByTagName('li')
   let counter = 0;
   for (let e of resultList) {
      if (e.textContent.includes(input)) {
         e.style.fontWeight = 'bold';
         e.style.textDecoration = 'underline';
         counter++
      }
      document.getElementById('result').textContent = `${counter} matches found`
   }
}
