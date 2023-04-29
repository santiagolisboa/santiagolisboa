window.fbAsyncInit = function() {
    FB.init({
      appId      : '576553495813787',
      xfbml      : true,
      version    : 'v2.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    new Runner('.interstitial-wrapper');
  } else {
    document.getElementById("main-frame-notchrome").style.display="";
  }


if (navigator.userAgent.toLowerCase().indexOf('chrome') <= -1) {
    hideClass(".onlyforchrome");
  }