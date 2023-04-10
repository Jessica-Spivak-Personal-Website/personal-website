//alert("hello");
console.log("Hello world");

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

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})

let navbar = document.querySelectorAll(".navlink")
let navContainer = document.querySelector("#nav")
let hamburger = document.querySelector("#ham")

if (window.innerWidth < 720) {
    navContainer.classList.add("hide")
    navbar.forEach((node) => node.classList.add("hide"))
    hamburger.classList.remove("hide")
} else {
    navContainer.classList.remove("hide")
    navbar.forEach((node) => node.classList.remove("hide"))
    hamburger.classList.add("hide")
}