$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));
  console.log("age is " + age);
  if (age >= 18) {
    $("#over-18").show();
    alert("Welcome Voter!!!!")
  }
  else {
    $("#under-18").show();
    alert("You can't vote!!!!!! Go outside and play!!!!")
  }

  var question1 = (prompt("Do you know the difference between the various political types?"));
  console.log("answer is " + question1)
  if (question1 === "yes") {
    alert("Well aren't you cool");
  }
  else if (question1 === "no") {
    window.open('https://www.washingtonpost.com/blogs/the-fix/post/what-political-type-are-you/2011/05/05/AF7zFO0F_blog.html', '', '');

  }
  else {
    alert("That is not what we asked!!!")
  }


var question2 = (prompt("Do you know who the presidential candidates are?"));
console.log("answer is " + question1)
if (question2 === "yes") {
  alert("Kachow!");
}
else if (question2 === "no") {
  window.open('https://www.google.com/search?q=list+of+presidential+candidates&oq=list+of+presi&aqs=chrome.3.69i57j0l5.23267j0j4&sourceid=chrome&ie=UTF-8', '', '');
}
else {
  alert("That is not what we asked!!!")
}

var question3 = (prompt("Do you know where to vote?"));
console.log("answer is " + question1)
if (question3 === "yes") {
  alert("Get your ass down there and vote!");
}
else if (question3 === "no") {
  window.open('http://www.vote411.org/enter-your-address#.VvRPzvkrJPY', '', '');
}
else {
  alert("That is not what we asked!!!")
}









});
