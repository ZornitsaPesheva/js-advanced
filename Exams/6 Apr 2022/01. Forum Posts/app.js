window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', publish);

  const reviewList = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');
  const [title, category] = document.getElementsByTagName('input');
  const text = document.getElementById('post-content');
  const clearBtn = document.getElementById('clear-btn');

  function publish(e) {
    e.preventDefault();
    if (title.value != '' && category.value != '' && text.value != ''){
      let postTitle = title.value;
      let postCategory = category.value;
      let postText = text.value
      let li = document.createElement('li');
      li.classList.add('rpost');
      reviewList.appendChild(li);
      let article = document.createElement('article');
      li.appendChild(article);
      let h4 = document.createElement('h4');
      h4.textContent = postTitle;
      article.appendChild(h4);
      let p1 = document.createElement('p');
      p1.textContent = 'Category: ' + postCategory;
      article.appendChild(p1);
      let p2 = document.createElement('p');
      p2.textContent = 'Content: ' + postText;
      article.appendChild(p2);
      let editBtn = document.createElement('button');
      editBtn.classList.add('action-btn');
      editBtn.classList.add('edit');
      editBtn.textContent = 'Edit';
      li.appendChild(editBtn);
      let approveBtn = document.createElement('button');
      approveBtn.classList.add('action-btn');
      approveBtn.classList.add('approve');
      approveBtn.textContent = 'Approve';
      li.appendChild(approveBtn);
      title.value = '';
      category.value = '';
      text.value = '';
      editBtn.addEventListener('click', function() {
        title.value = postTitle;
        category.value = postCategory;
        text.value = postText;
        li.remove();
      });
      approveBtn.addEventListener('click', function() {
        publishedList.appendChild(li);
        editBtn.remove();
        approveBtn.remove();
      })
      clearBtn.addEventListener("click", function() {
        publishedList.innerHTML = '';
      })
    }
  }
}
