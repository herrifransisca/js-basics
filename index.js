// A few different solution to change the value of "this" in a function.
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }, this);
  }
};

video.showTags();

// IMAGINE that "forEeach()" DOESN’T HAVE SECOND PARAMETER.
// HOW CAN WE CHANGE THE VALUE OF "this" ?
// ONE SIMPLE SOLUTION (1ST SOLUTION):
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this;
    this.tags.forEach(function(tag) {
      console.log(self.title, tag);
    });
  }
};

video.showTags();

// ANOTHER APPROACH (2ND SOLUTION):
function playVideo(a) {
  console.log(this);
}
playVideo.call({ name: 'Mosh' }); // { name: 'Mosh' }
playVideo.apply({ name: 'Mosh' }); // { name: 'Mosh' }
playVideo.bind({ name: 'Mosh' }); // nothing -> because this bind() method DOESN’T CALL "playVideo() function"

const fn = playVideo.bind({ name: 'Mosh' });
fn(); // { name: 'Mosh' }

// Immediately call the function that is returned from the "bind method"
playVideo.bind({ name: 'Mosh' })();

// GO BACK TO THE PREVIOUS EXAMPLE,
// Using the bind() method is the SECOND SOLUTION to solve this problem.
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(
      function(tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  }
};

video.showTags();

/* 3RD SOLUTION:
	There is a NEWER AND BETTER SOLUTION
  Starting from ES6 we have "ARROW FUNCTION" */
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(tag => console.log(this.title, tag));
  }
};

video.showTags();
