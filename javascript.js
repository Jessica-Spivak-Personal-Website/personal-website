//alert("hello");
const externalLink = document.querySelector('#external_link');

externalLink.addEventListener('click', function(e) {
  e.preventDefault();
  const link = e.target.href;

  const navigateAway = confirm("Are you sure you want to navigate away from this website?");

  if(navigateAway) {
    window.location = link;
  }
})

const externalLink2 = document.querySelector('#external_link2');

externalLink2.addEventListener('click', function(e) {
  e.preventDefault();
  const link = e.target.href;

  const navigateAway = confirm("Are you sure you want to navigate away from this website?");

  if(navigateAway) {
    window.location = link;
  }
})