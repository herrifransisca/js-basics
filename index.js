// Mosh's Code

const post = new Post('a', 'b', 'c');

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

console.log(post);

// Herri's Code
// const post = new Post(
//   'a',
//   'b',
//   'c',
//   10,
//   [{ author: 'a', body: 'b' }, { author: 'c', body: 'd' }],
//   true,
//   false
// );

// function Post(title, body, author, views, comments, isLive, isPublished) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = views;
//   this.comments = comments;
//   this.isLive = isLive;
//   this.isPublished = isPublished;
// }

// console.log(post);
