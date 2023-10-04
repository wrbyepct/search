
document.addEventListener('DOMContentLoaded', function () {

  console.log("Attaching event listener...");

  // I'm Feeling Lucky Button Logic 
  document
    .getElementById("lucky-btn")
    .addEventListener("click", async (event) => {
      event.preventDefault();

      const query = document.getElementById("search-field").value;
      console.log(`Going to search ${query}`);

      if (query) {
        await fetch(`http://localhost:3000/api/search?q=${query}`)
          .then((response) => response.json())
          .then((data) => {
            // if there is search result then go to the link 
            if (data.items && data.items.length > 0) {
              window.location.href = data.items[0].link; // Go to the url
            } else {
              // If no result then alet the user
              alert("No results found");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        alert("Please enter a search query");
      }
    });


  function hangdleLoadedAndResize(event) {
    const googleLogo = document.getElementById('google-img');
    const offeredIn = document.getElementById('offered-in');

    // google logo height is at its minimum 
    // Offered-box is allowed to shrink with basis of 246px
    if (googleLogo.clientHeight == 92) {
      offeredIn.style.flexShrink = '1';
    } else {
      offeredIn.style.flexShrink = '0';
    }

    // If offeredIn height reaches 246px 
    // Then gooogle image is allowed to grow with basis of 0
    // OfferedIn stop growing
    if (offeredIn.clientHeight >= 246 ) {
      googleLogo.style.flexBasis = '0';
      googleLogo.style.flexGrow = '1';

      offeredIn.style.flexGrow = '0';
    }

    // If google logo reaches 290px 
    // than google logo stops at basis 290px
    // OfferIn is then allowed to grow
    if (googleLogo.clientHeight >= 290) {
      googleLogo.style.flexBasis = '290px';
      googleLogo.style.flexGrow = '0';

      offeredIn.style.flexGrow = '1';
    }

  
  }

  ['load', 'resize'].forEach(event => {
    window.addEventListener(event, hangdleLoadedAndResize);
  })
});



