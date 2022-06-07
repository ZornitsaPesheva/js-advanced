window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById('publish-btn');
  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content')
  } 
  let review = document.getElementById('review-list');
  publishBtn.addEventListener('click', publish);

  function publish() {
    if (input.title.value != '' && input.category.value != '' && input.content.value != '') {
      let li = document.createElement('li');
      review.appendChild(li);
      let article = createElement('article');
      li.appendChild(article);
      let edit = createElement('button', 'Edit', 'action-btn edit');
      edit.addEventListener('click', editPost);
      let approve = createElement('button', 'Approve', 'action-btn approve');
      approve.addEventListener('click', approve);
      li.appendChild(edit);
      li.appendChild(approve);

      article.appendChild(createElement('h4', input.title.value));
      article.appendChild(createElement('p', 'Category: ' + input.category.value));
      article.appendChild(createElement('h4', 'Content: ' + input.content.value));
      input.title.value = '';
      input.category.value = '';
      input.content.value = '';
    }
  }

  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
        element.className = className;
    }
    return element;
  }

  function editPost(e) {
    let currentArticle = e.target.previousSibling;
    input.title.value = currentArticle.querySelectorAll('h4')[0].textContent;
    input.category.value = currentArticle.querySelector('p').textContent.slice(10);
    input.content.value = currentArticle.querySelectorAll('h4')[1].textContent.slice(9);
    currentArticle.remove();
  }
  //TODO ...
}
