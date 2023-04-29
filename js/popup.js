// Poppup content
var images = [
    {
      url: "./img/french_retro.png",
      link: "https://www.frenchretro.com",
      title: "French Retro"
    },
    {
      url: "./img/rezinwood.png",
      link: "https://www.rezinwood.com",
      title: "Rezin Wood"
    },
    {
      url: "./img/eleye.png",
      link: "https://www.eleye.co",
      title: "ELEYE"
    },
    {
      url: "./img/ressources.png",
      link: "https://www.ressources.green/",
      title: "Ressources"
    },
    {
      url: "img/jesaispas.png",
      link: "https://www.jesaispas.com/",
      title: "Je sais pas encore"
    },
    {
      url: "img/jesaispas.png",
      link: "https://www.jesaispas.com/",
      title: "Je sais pas encore"
    },
    {
      url: "img/jesaispas.png",
      link: "https://www.jesaispas.com/",
      title: "Je sais pas encore"
    },
    {
      url: "img/jesaispas.png",
      link: "https://www.jesaispas.com/",
      title: "Je sais pas encore"
    },
  ];
  
  // Opens popup
  function openPopup(imgUrl, title, linkUrl) {

    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popup-content");
    
    // Sends the image, title and button in the popup
    popupContent.innerHTML = '<img src="' + imgUrl + '"><h2>' + title + '</h2><a href="' + linkUrl + '" target="_blank"><button id="site">Voir le site</button></a>';
    
    // Displays the popup
    popup.style.display = "block";
  }
  
  // Function for every image of .carousel
  var carouselImages = document.querySelectorAll(".carousel img");
  for (var i = 0; i < carouselImages.length; i++) {
    carouselImages[i].addEventListener("click", function() {
      // Récupérer l'index de l'image dans le tableau d'objets
      var index = parseInt(this.getAttribute("data-index"));
      
      
      var imgUrl = images[index].url;
      var title = images[index].title;
      var linkUrl = images[index].link;
      
      // Ouvrir le popup avec l'image, le titre et le lien correspondants
      openPopup(imgUrl, title, linkUrl);
    });
  }
  
  // Événement de clic pour fermer le popup en cliquant en dehors du contenu
  var popup = document.getElementById("popup");
  window.addEventListener("click", function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
