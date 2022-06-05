function getArticleGenerator(articles) {
     function showNextArticle() {
        if (articles.length > 0) {
            let content = document.getElementById('content');
            let next = articles.shift();
            let article = document.createElement('article');
            article.textContent = next;
            content.appendChild(article);
        }
     }
     return showNextArticle
}
