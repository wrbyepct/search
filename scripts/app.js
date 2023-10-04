
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
          if (data.items && data.items.length > 0) {
            window.location.href = data.items[0].link; // Go to the url
          } else {
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


function hangdleLoadedAndResize (event) {
  const googleLogo = document.getElementById('google-img');
  const offeredIn = document.getElementById('offered-in');
  
  // Method 2
  if (googleLogo.clientHeight == 92) {
    offeredIn.style.flexBasis = '246px';
    offeredIn.style.flexShrink = '1';
  }

  if (offeredIn.clientHeight >= 246 && googleLogo.clientHeight <= 290) {
    googleLogo.style.flexBasis = '0';
    googleLogo.style.flexGrow = '1';
    
    offeredIn.style.flexBasis = '246px';
    offeredIn.style.flexGrow = '0';
  } 

  if (googleLogo.clientHeight >= 290) {
    googleLogo.style.flexBasis = '290px';
    googleLogo.style.flexGrow = '0';

    offeredIn.style.flexGrow = '1';
  }


  if (offeredIn.clientHeight <= 246 && googleLogo.clientHeight > 92) {
    offeredIn.style.flexShrink = '0';
    googleLogo.style.flexShrink = '1'
  } else {
    offeredIn.style.flexShrink = '1'
  }

}

window.addEventListener('load', hangdleLoadedAndResize);
window.addEventListener('resize', hangdleLoadedAndResize);
