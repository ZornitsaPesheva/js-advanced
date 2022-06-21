// https://judge.softuni.org/Contests/Practice/DownloadResource/14581

class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this.likes = [];
    }

    get likes() {
        let likesNumber = this.likes.length;
        if (likesNumber == 0) {
            return `${this.title} has 0 likes`
        }
        if (likesNumber == 1) {
            return `${likes[0]} likes this story!`
        }
        return `${likes[0]} and ${likesNumber - 1} others like this story!`
    }

}