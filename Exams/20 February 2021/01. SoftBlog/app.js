// https://judge.softuni.org/Contests/Practice/DownloadResource/14574

function solve(){

   const createBtn = document.querySelector('button');
   const [creator, title, category] = document.querySelectorAll('input');
   const content = document.getElementById('content');
   const posts = document.querySelectorAll('section')[1];
   const archive = document.querySelector('ol');

   createBtn.addEventListener('click', function(e) {
      e.preventDefault();
      let article = document.createElement('article');
      posts.appendChild(article);
      let h1 = document.createElement('h1');
      h1.textContent = title.value;
      article.appendChild(h1);
      let p1 = document.createElement('p');
      p1.textContent = 'Category:';
      article.appendChild(p1);
      let strong1 = document.createElement('strong');
      strong1.textContent = category.value;
      p1.appendChild(strong1);
      let p2 = document.createElement('p');
      p2.textContent = 'Creator:';
      article.appendChild(p2);
      let strong2 = document.createElement('strong');
      strong2.textContent = creator.value;
      p2.appendChild(strong2)
      let p3 = document.createElement('p');
      p3.textContent = content.value;
      article.appendChild(p3);
      let div = document.createElement('div');
      div.classList.add('buttons')
      article.appendChild(div);
      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');
      deleteBtn.textContent = 'Delete';
      div.appendChild(deleteBtn);
      let archiveBtn = document.createElement('button');
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      archiveBtn.textContent = 'Archive'
      div.appendChild(archiveBtn);
      let titleToArchive = title.value;
      creator.value = '';
      title.value = '';
      category.value = '';
      content.value = '';

      deleteBtn.addEventListener('click', function() {
         article.remove();
      })

      archiveBtn.addEventListener('click', function() {
         let li = document.createElement('li');
         li.textContent = titleToArchive;
         archive.appendChild(li);
         article.remove();
      })
   })
}
