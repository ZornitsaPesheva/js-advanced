window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById('publish-btn');
  const clearBtn = document.getElementById('clear-btn');
  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content')
  } 
  let review = document.getElementById('review-list');
  publishBtn.addEventListener('click', publish);
  clearBtn.addEventListener('click', clearUploaded);
  let published = document.getElementById('published-list');

  function publish(e) {
    if (input.title.value != '' && input.category.value != '' && input.content.value != '') {
      let li = createElement('li', '', 'rpost');
      review.appendChild(li);
      let article = createElement('article');
      li.appendChild(article);
      
      let edit = createElement('button', 'Edit', 'action-btn edit');
      edit.addEventListener('click', editPost);
      let approve = createElement('button', 'Approve', 'action-btn approve');
      approve.addEventListener('click', approvePost);
      li.appendChild(approve);
      li.appendChild(edit);

      article.appendChild(createElement('h4', input.title.value));
      article.appendChild(createElement('p', 'Category: ' + input.category.value));
      article.appendChild(createElement('p', 'Content: ' + input.content.value));
      input.title.value = '';
      input.category.value = '';
      input.content.value = '';
    }
  }

  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    console.log(element);
    if (className) {
        element.className = className;
    }
    return element;
  }

  function editPost(e) {
    let currentArticle = e.target.previousSibling.previousSibling;
    console.log(currentArticle);

    input.title.value = currentArticle.querySelector('h4').textContent;
    console.log(input.title.value);
    input.category.value = currentArticle.querySelectorAll('p')[0].textContent.slice(10);
    console.log(input.category.value);
    input.content.value = currentArticle.querySelectorAll('p')[1].textContent.slice(9);
    console.log(input.content.value);
    
    currentArticle.parentNode.remove();
  }

  function approvePost(e) {
    let currentArticle = e.target.parentNode;
    let btn1 = currentArticle.querySelectorAll('button')[0];
    let btn2 = currentArticle.querySelectorAll('button')[1];
    btn1.remove();
    btn2.remove();
    published.appendChild(currentArticle);
  }
  
  function clearUploaded() {
    published.innerHTML = '';

  }
}
