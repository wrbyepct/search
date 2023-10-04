document.addEventListener('DOMContentLoaded', function () {

    console.log("Attaching event listener...");

    function hangdleLoadedAndResize(event) {
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
        offeredIn.style.flexShrink = '1';
      }
  
    }
  
    ['load', 'resize'].forEach(event => {
      window.addEventListener(event, hangdleLoadedAndResize);
    })
  });