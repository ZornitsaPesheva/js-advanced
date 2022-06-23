window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', publish);

  const reviewList = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');
  const [title, category] = document.getElementsByTagName('input');
  const text = document.getElementById('post-content');

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
      let h4 = createElement('h4');
      h4.textContent = postTitle;
      article.appendChild(h4);
      let p1 = document.createElement('p');
      p1.textContent = 'Category:' + postCategory;
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

    }
  }


}
 
// function solve() {
//   const publishBtn = document.getElementById('publish-btn');
//   const clearBtn = document.getElementById('clear-btn');
//   const input = {
//     title: document.getElementById('post-title'),
//     category: document.getElementById('post-category'),
//     content: document.getElementById('post-content')
//   } 
//   let review = document.getElementById('review-list');
//   publishBtn.addEventListener('click', publish);
//   clearBtn.addEventListener('click', clearUploaded);
//   let published = document.getElementById('published-list');

//   function publish(e) {
//     if (input.title.value != '' && input.category.value != '' && input.content.value != '') {
//       let li = createElement('li', '', 'rpost');
//       review.appendChild(li);
//       let article = createElement('article');
//       li.appendChild(article);
      
//       let edit = createElement('button', 'Edit', 'action-btn edit');
//       edit.addEventListener('click', editPost);
//       let approve = createElement('button', 'Approve', 'action-btn approve');
//       approve.addEventListener('click', approvePost);
//       li.appendChild(approve);
//       li.appendChild(edit);

//       article.appendChild(createElement('h4', input.title.value));
//       article.appendChild(createElement('p', 'Category: ' + input.category.value));
//       article.appendChild(createElement('p', 'Content: ' + input.content.value));
//       input.title.value = '';
//       input.category.value = '';
//       input.content.value = '';
//     }
//   }

//   function createElement(type, content, className) {
//     const element = document.createElement(type);
//     element.textContent = content;
//     console.log(element);
//     if (className) {
//         element.className = className;
//     }
//     return element;
//   }

//   function editPost(e) {
//     let currentArticle = e.target.previousSibling.previousSibling;
//     console.log(currentArticle);

//     input.title.value = currentArticle.querySelector('h4').textContent;
//     console.log(input.title.value);
//     input.category.value = currentArticle.querySelectorAll('p')[0].textContent.slice(10);
//     console.log(input.category.value);
//     input.content.value = currentArticle.querySelectorAll('p')[1].textContent.slice(9);
//     console.log(input.content.value);
    
//     currentArticle.parentNode.remove();
//   }

//   function approvePost(e) {
//     let currentArticle = e.target.parentNode;
//     let btn1 = currentArticle.querySelectorAll('button')[0];
//     let btn2 = currentArticle.querySelectorAll('button')[1];
//     btn1.remove();
//     btn2.remove();
//     published.appendChild(currentArticle);
//   }
  
//   function clearUploaded() {
//     published.innerHTML = '';

//   }
// }
