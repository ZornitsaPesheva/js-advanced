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
      let li = createElement('li', '', 'rpost');
      reviewList.appendChild(li);
      let article = document.createElement('article');
      li.appendChild(article);
      let h4 = createElement('h4', postTitle)
      article.appendChild(h4);
      let p1 = createElement('p', 'Category: ' + postCategory);
      article.appendChild(p1);
      let p2 = createElement('p', 'Content: ' + postText)
      article.appendChild(p2);
      let editBtn = createElement('button', 'Edit', 'action-btn edit')
      li.appendChild(editBtn);
      let approveBtn = createElement('button', 'Approve', 'action-btn approve')
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

      function createElement(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
      }
    }
  }
}
