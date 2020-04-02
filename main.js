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
  },
  {
    imageUrl: "images/05.jpg",

    link: "https://pedroiki.github.io/Comics_eCommerce-beta1.0/",
  },
  {
    imageUrl: "images/06.jpg",

    link: "https://pedroiki.github.io/tomato_game2016/",
  },
  {
    imageUrl: "images/07.jpg",

    link: "https://pedroiki.github.io/React_app/",
  },

  {
    imageUrl: "images/08.jpg",

    link: "https://pedroiki.github.io/Mikel_Therapist/",
  },

    {
      imageUrl: "images/09.jpg",

      link: "https://pedroiki.github.io/blog_prototype/",
    },

        {
          imageUrl: "images/010.jpg",

          link: "https://pedroiki.github.io/blog_html_css/",
        },



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
