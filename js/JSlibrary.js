      // Google Apps Script URL to send form data to
const scriptURL = 'https://script.google.com/macros/s/AKfycbyryaU-KiFb08lpVh-oX93cfQUVIY0eqyBaOvOTH4bNhMmSThbh1AUxTV34DVG1GoQMNQ/exec'     
// Get the form and buttons from the HTML document
const form = document.forms['contact-my-website']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const btnDAlert = document.querySelector('.my-alert');

// Add a submit event listener to the form
form.addEventListener('submit', e => {
    e.preventDefault()
    // When the submit button is clicked, toggle the visibility of the "Kirim" button and the "Loading" button
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    // Send a POST request to the Google Apps Script URL with the form data
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // When the request is complete, toggle the visibility of the "Kirim" button and the "Loading" button again
            btnLoading.classList.toggle("d-none");
            btnKirim.classList.toggle("d-none");
            // Show an alert to the user to indicate that the message was sent successfully
            btnDAlert.classList.toggle('d-none');
            // Reset the form
            form.reset()
            console.log('Success!', response)})
        .catch(error => console.error('Error!', error.message))
});


        // Wait for the document to finish loading
        $(document).ready(function(){
            // Add a click event listener to each anchor element in a list
            $('ul li a').click(function(){
                // When an anchor element is clicked, remove the "active" class from all anchor elements
                $('li a').removeClass("active");
                // Add the "active" class to the clicked anchor element
                $(this).addClass("active");
            });
        });


    //navbar scroll

        document.addEventListener("scroll", function () {
            const navbar = document.querySelector("nav");
    
            if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
              navbar.classList.add("nav-scrolled", "fixed-top");
            } else {
              navbar.classList.remove("nav-scrolled", "fixed-top");
            }
          });




          const typedTextSpan = document.querySelector(".typed-text");
          const cursorSpan = document.querySelector(".cursor");
    
          const textArray = ["Santiago"];
          const typingDelay = 100;
          const erasingDelay = 100;
          const newTextDelay = 2500; // Delay between current and next text
          let textArrayIndex = 0;
          let charIndex = 0;
    
          function type() {
            if (charIndex < textArray[textArrayIndex].length) {
              if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
              typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
              charIndex++;
              setTimeout(type, typingDelay);
            } 
            else {
              cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
          }
    
          function erase() {
              if (charIndex > 0) {
              if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
              typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
              charIndex--;
              setTimeout(erase, erasingDelay);
            } 
            else {
              cursorSpan.classList.remove("typing");
              textArrayIndex++;
              if(textArrayIndex>=textArray.length) textArrayIndex=0;
              setTimeout(type, typingDelay + 1100);
            }
          }
    
          document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
            if(textArray.length) setTimeout(type, newTextDelay + 250);
          });


//hover card that moves upwards
          $(document).ready(function(){
            $('.col-md-4').hover(
                //trigger ketika mouse di sentuh
                function(){
                    $(this).animate({
                        marginTop: "-=1%",
                    },200);
                },

                //trigger  when mouse out
                function(){
                    $(this).animate({
                        marginTop: "0%"
                    },200);
                }
            );
        });


//hide the collapsed navigation when clicked.
        $('.js-scroll-trigger').click(function() {
            $('.navbar-collapse').collapse('hide');
        });


        // Wait for the document to finish loading
        $(document).ready(function(){
            // Add a click event listener to each anchor element in a list
            $('ul li a').click(function(){
                // When an anchor element is clicked, remove the "active" class from all anchor elements
                $('li a').removeClass("active");
                // Add the "active" class to the clicked anchor element
                $(this).addClass("active");
            });
        });

