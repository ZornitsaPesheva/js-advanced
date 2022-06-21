// https://judge.softuni.org/Contests/Practice/DownloadResource/14581

const { use } = require("chai");

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

    like(username) {
        if (this.likes.find(u => u == username)){
            throw new Error("You can't like the same story twice!")
        }
        if (username == this.creator) {
            throw new Error(`You can't like your own story!`);
        }
        this.likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        let index = this.likes.findIndex(u => u == username);
        if (index == -1) {
            throw new Error(`You can't dislike this story!`)
        }
        this.likes.splice(index, 1)
        return `${username} disliked ${this.title}`
    }
    
}