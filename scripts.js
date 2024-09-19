window.onscroll = function() {
    const header = document.getElementById("mainheader");
    const firstSectionHeight = document.querySelector(".section5-container").offsetHeight;
  
    // Show the header when the user scrolls past the first section
    if (window.scrollY > firstSectionHeight) {
      header.style.display = "block"; // Show the header
    } else {
      header.style.display = "none";  // Hide the header
    }
  };
  