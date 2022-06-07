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
      li.appendChild(createElement('button', 'Edit', 'action-btn edit'));
      li.appendChild(createElement('button', 'Edit', 'action-btn approve'));
      article.appendChild(createElement('h4', input.title.value));
      article.appendChild(createElement('p', 'Category ' + input.category.value));
      article.appendChild(createElement('h4', 'Content: ' + input.content.value));
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
  //TODO ...
}
