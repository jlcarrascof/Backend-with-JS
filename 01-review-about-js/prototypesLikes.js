// Comments system

// LikesService
function LikesService() {
  this.likes = 0;
  this.dislikes = 0;
}

LikesService.prototype.like = function() {
  this.likes++;
};

LikesService.prototype.dislike = function() {
    this.dislikes++;
};

LikesService.prototype.getLikes = function() {
    return this.likes;
};

LikesService.prototype.getDislikes = function() {
    return this.dislikes;
};

// Comments
function Comment() {
    LikesService.call(this);
    this.message = msg;
}

Comment.prototype = Object.create(LikesService.prototype);
Comment.prototype.constructor = Comment;

function CommentsService() {
    this.comments = [];
    this.commentsQty = 0;
}

CommentsService.prototype.addComment = function(comment) {
    this.commentsQty++;
    this.comments.push({ id: this.commentsQty, comment });
};
