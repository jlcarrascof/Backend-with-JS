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
