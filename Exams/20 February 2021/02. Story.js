// https://judge.softuni.org/Contests/Practice/DownloadResource/14581


class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        let likesNumber = this._likes.length;
        if (likesNumber == 0) {
            return `${this.title} has 0 likes`
        }
        if (likesNumber == 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${likesNumber - 1} others like this story!`
    }


    like(username) {
        if (this._likes.find(u => u == username)){
            throw new Error("You can't like the same story twice!")
        }
        if (username == this.creator) {
            throw new Error(`You can't like your own story!`);
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        let index = this._likes.findIndex(u => u == username);
        if (index == -1) {
            throw new Error(`You can't dislike this story!`)
        }
        this._likes.splice(index, 1)
        return `${username} disliked ${this.title}`
    }
    comment(username, content, id) {
        let foundComment = this._comments.find(c => c.Id == id);
        let lastCommentId = 0;
        if (id == undefined || !foundComment){
            if (this._comments.length > 0) {
                lastCommentId = this._comments[this._comments.length - 1].Id;
                console.log(lastCommentId);
            }
            let comment = {};
            comment.Id = lastCommentId + 1;
            comment.Username = username;
            comment.Content = content;
            comment.Replies = [];
            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        }
        
        let commentId = '';
        if (foundComment.Replies.length > 0) {
            let lastCommentId = Number(foundComment.Replies[foundComment.Replies.length - 1].Id.split('.')[1]);
            commentId = foundComment.Id.toString() + '.' + (lastCommentId + 1).toString();
            
        }
        else {
            commentId = id.toString() + '.' + 1;
        }
        let reply = {};
        reply.Id = commentId;
        reply.Username = username;
        reply.Content = content;
        foundComment.Replies.push(reply);
        return `You replied successfully`;
    }

    toString(sortingType) {
        if (sortingType == 'desc'){
            this._comments.reverse();
            for (let comment of this._comments) {
                comment.Replies.reverse();
            }
        }
        if (sortingType == 'username') {
            if ( this._comments.length > 1) {
                this._comments.sort((c1, c2) => c1.Username.localeCompare(c2.Username));
            }
            for (let comment of this._comments) {
                if (comment.Replies.length > 1) {
                    comment.Replies.sort((c1, c2) => c1.Username.localeCompare(c2.Username));
                }
            }
        }
        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push('Likes: ' + this._likes.length);
        result.push(`Comments:`);
        for (let c of this._comments) {
            result.push(`-- ${c.Id}. ${c.Username}: ${c.Content}`);
            for (let r of c.Replies) {
                result.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`);
            }
        }
        return result.join('\n');

    }

}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
console.log(art.comment("Sammy", "Some Content"));
console.log(art.comment("Ammy", "New Content"));
console.log(art.comment("Zane", "Reply", 1));
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
