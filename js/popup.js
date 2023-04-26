// Tableau d'objets représentant chaque image du carrousel
var images = [
    {
      url: "./img/web7.png",
      link: "/tennis_player",
      title: "Pong"
    },
    {
      url: "chemin/vers/image2.jpg",
      link: "https://www.example.com/page2",
      title: "Titre de l'image 2"
    },
    {
      url: "chemin/vers/image3.jpg",
      link: "https://www.example.com/page3",
      title: "Titre de l'image 3"
    },
    // ... Ajoutez autant d'images que vous le souhaitez
  ];
  
  // Fonction pour ouvrir le popup avec l'image, le titre et le lien correspondants
  function openPopup(imgUrl, title, linkUrl) {
    // Récupérer le popup et le contenu du popup
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popup-content");
    
    // Afficher l'image, le titre et le bouton avec le lien
    popupContent.innerHTML = '<img src="' + imgUrl + '"><h2>' + title + '</h2><button id="site" onclick="window.location.href=\'' + linkUrl + '\'">Voir le site</button>';
    
    // Afficher le popup
    popup.style.display = "block";
  }
  
  // Événement de clic pour chaque image du carrousel
  var carouselImages = document.querySelectorAll(".carousel img");
  for (var i = 0; i < carouselImages.length; i++) {
    carouselImages[i].addEventListener("click", function() {
      // Récupérer l'index de l'image dans le tableau d'objets
      var index = parseInt(this.getAttribute("data-index"));
      
      // Récupérer l'URL de l'image, le titre et le lien correspondants dans le tableau d'objets
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
