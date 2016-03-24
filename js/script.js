$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));
  console.log("age is " + age);
  if (age >= 18) {
    $("#over-18").show();

  }
  else {
    $("#under-18").show();

  }

  var question1 = prompt("Do you know the difference between the various political types?");
  if (question1 === yes) {
    $(location).attr("href", "https://www.washingtonpost.com/blogs/the-fix/post/what-political-type-are-you/2011/05/05/AF7zFO0F_blog.html");
  }
  else if (question1 === no) {
    alert("Well aren't you cool");
  }
else {
  alert("That is not what we asked!!!")
}

});
