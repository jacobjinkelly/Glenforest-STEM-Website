//add id to posts, add item to indices, increment nposts

var posts=["nahanipage"];
var indices=[0];
var nposts=1;

$(document).ready(function() {
  for (var i=0;i<nposts;i++) showDivs(posts[i],indices[i]);
});


function plusDivs(post,n) {
    showDivs(post,indices[posts.indexOf(post)]+=n);
}

function showDivs(post,n) {
  var ind=posts.indexOf(post);
  var elements=document.getElementById(post).getElementsByClassName("image");
  if (n>=elements.length) indices[ind]=0;
  if (n<0) indices[ind]=elements.length-1;
  for (var i=0;i<elements.length;i++) elements[i].style.display="none";
  elements[indices[ind]].style.display="block";
}
