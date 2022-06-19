// https://judge.softuni.org/Contests/Practice/DownloadResource/15141

class ArtGallery {
    constructor(){
        this.creator = creator,
        this.possibleArticles = { "picture":200,"photo":50,"item":250 },
        this.listOfArticles = [],
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!articleModel in this.possibleArticles) {
            throw new Error("This article model is not included in this gallery!")
        }
        let article = this.listOfArticles.find(a => a.articleName = articleName)
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
}