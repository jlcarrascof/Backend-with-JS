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
function Comments() {
    LikesService.call(this);
    this.message = msg;
}
