console.log("oi")

//list
//  [] = array
// {}  = object , functions
// target blank : open a new tab
let projects = [{
    imageUrl: "images/01.jpg",
    link: "https://pedroiki.github.io/costeira.praia/",
  },
  {
    imageUrl: "images/02.jpg",
    link: "https://pedroiki.github.io/login-firebase/",
  },
  {
    imageUrl: "images/03.jpg",
    link: "https://pedroiki.github.io/retro-90/",
  },
  {
    imageUrl: "images/04.jpg",

    link: "https://pedroiki.github.io/mobile-tag/",
  }
]

window.onload = function() {
  loadProjects()
}

function loadProjects() {
  var container = document.querySelector(".projects")

  projects.forEach((project) => {
    let image = `
         <a href="${project.link}" target="_blank">
           <img src="${project.imageUrl}" class="project-image">
           </img>
         </a>`
    let imageContainer = document.createElement("div")
    imageContainer.setAttribute('class', 'image-container')
    imageContainer.innerHTML = image
    container.appendChild(imageContainer)
  });

}
