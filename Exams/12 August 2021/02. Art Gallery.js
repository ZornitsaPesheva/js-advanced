// https://judge.softuni.org/Contests/Practice/DownloadResource/15141

class ArtGallery {
    constructor(creator){
        this.creator = creator,
        this.possibleArticles = { "picture":200,"photo":50,"item":250 },
        this.listOfArticles = [],
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
         articleModel = articleModel.toLowerCase();
        if (!(articleModel in this.possibleArticles)) {
        // if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }
        let article = this.listOfArticles.find(a => a.articleName == articleName)
        if (article) {
            article.quantity += quantity
        }
        else {
            this.listOfArticles.push({articleModel, articleName, quantity})
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest (guestName, personality) {
        if (this.guests.some(g => g.guestName == guestName)){
            throw new Error(`${guestName} has already been invited.`)
        } 
        let points = 50;
        if (personality == 'Vip') {
            points = 500
        }
        else if (personality == 'Middle'){
            points = 250
        }
        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`
    }

    buyArticle (articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();
        let article = this.listOfArticles.find(a => a.articleName == articleName);
        if (!article || articleModel != article.articleModel){
            throw new Error('This article is not found.');
        }
        if (article.quantity == 0) {
            return `The ${articleName} is not available.`
        }
        let guest = this.guests.find(g => g.guestName == guestName);
        if (!guest) {
            return `This guest is not invited.`
        }
        let articlePoint = this.possibleArticles[articleModel];
        if (guest.points < articlePoint) {
            return `You need to more points to purchase the article.`
        }
        guest.points -= articlePoint;
        guest.purchaseArticle++;
        article.quantity--;
        return `${guestName} successfully purchased the article worth ${articlePoint} points.`

    }

    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article'){
            result.push('Articles information:');
            this.listOfArticles.forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`))
        }
        if (criteria == 'guest') {
            result.push('Guests information:');
            this.guests.forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle}`))
        }
        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

