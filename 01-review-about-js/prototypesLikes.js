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

CommentsService.prototype.getComments = function() {
    return this.comments;
};

console.log('\n');
console.log('We create a new instance of CommentsService');

const thread = new CommentsService();
console.log(thread);
console.log('\n');

console.log('If we call to getComments method, we get an empty array because we have not added any comment yet');
console.log(thread.getComments());
console.log('\n');

console.log('We create a new instance of Comment');
const firstComment = new Comment('This is a test comment');
console.log(firstComment);
console.log('\n');
