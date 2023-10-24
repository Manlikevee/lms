function navtoggler() {
    console.log('clicked');
    var middleLinks = document.getElementById("middlelinks");
    var navLinkOverlay = document.getElementById("navlinkovalay");
  
    middleLinks.classList.toggle('navlinkactive');
    navLinkOverlay.classList.toggle('navlinkactiveovalay');
  
    // Remove class names if navlinkactiveoverlay is clicked
    navLinkOverlay.addEventListener('click', function() {
      middleLinks.classList.remove('navlinkactive');
      navLinkOverlay.classList.remove('navlinkactiveovalay');
    });
  
    // Remove class names if screen width is greater than 999px
    window.addEventListener('resize', function() {
      if (window.innerWidth > 999) {
        middleLinks.classList.remove('navlinkactive');
        navLinkOverlay.classList.remove('navlinkactiveovalay');
      }
    });
  }