// 1st RULE: method -> obj
// 2nd RULE: function -> global (window, global)

// Let's take a look at examples of 1st rule
const video = {
  title: 'a',
  play() {
    console.log(this);
  }
};

video.play();

video.stop = function() {
  console.log(this);
};

video.stop();

// Let's take a look at examples of 2nd rule
// "this" -> a global object which is "window in browser" and "global in node"
function playVideo() {
  console.log(this); // Window { ... }
}

playVideo();

// what if "this" IS CONSTRUCTOR FUNCTION ?
// instead of "window object", we get "a new / this video object"
function Video(title) {
  this.title = title;
  console.log(this); // Video {title: 'b'}
}

const v = new Video('b');

// Last example
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(tag); // 'a'
    });
  }
};

video.showTags();

// 	What if we wanna display the "title of the video" "next to each tag" ?
//		WE GOT UNDEFINED, WHAT'S GOING ON HERE ?
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag); // undefined, 'a'
    });
  }
};

video.showTags();

// 		Let's remove the "title property" and see WHAT "THIS" is referencing!
//    IT'S REFERENCING THE WINDOW OBJECT
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this, tag); // window{...}, 'a'
    });
  }
};

video.showTags();

/* HOW CAN WE SOLVE THIS PROBLEM AND DISPLAY "THE TITLE OF THE VIDEO" next to each tag ?
In this particular case, the "forEach()" has TWO PARAMETERS:
1st Parameter -> a call back function
2nd Parameter -> thisArg  */
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(
      function(tag) {
        console.log(this, tag); // { firstName: 'Mosh' }, 'a'
      },
      { firstName: 'Mosh' }
    );
  }
};

video.showTags();

/* In this example, we don't really want "this object" ( { firstName: 'Mosh' } ),
WE WANT A VIDEO OBJECT so we can pass "this" here, */
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this, tag); // { title: 'a', tags: Array(3), showTags: f }, 'a'
    }, this);
  }
};

video.showTags();

// We can add "title property" here
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag); // a a | a b | a c
    }, this);
  }
};

video.showTags();
