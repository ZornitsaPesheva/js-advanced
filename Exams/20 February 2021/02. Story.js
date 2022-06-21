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

    comment(username, content, id) {
        let foundId = this.comments.find(c => c.id == id);
        if (id == undefined || !foundId){
            let lastCommentId = this.comments.map(c => c.id).max();
            let comment = {};
            comment.Id = lastCommentId + 1;
            comment.Username = username;
            comment.Content = content;
            comment.Replies = [];
            this.comments.push(lastCommentId+1, username, content);
            return `${username} commented on ${title}`;
        }
        
        let comment = this.comments.find(c => c.id == id)
        let reply = {};
        reply.Id = commentId;
        reply.Username = username;
        reply.Content = content;
        comment.Replies.push(reply);
        }
    }

}