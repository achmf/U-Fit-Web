// Navbar DropDown Menu
document.addEventListener("DOMContentLoaded", function() {
  // Toggle mobile menu visibility
  document.getElementById("mobile-menu-toggle").addEventListener("click", function() {
      var mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.remove("hidden"); // Remove hidden class
          mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px"; // Expand the menu to its full height
      } else {
          mobileMenu.style.maxHeight = "0"; // Collapse the menu
          // After the transition ends, hide the menu by adding the hidden class
          mobileMenu.addEventListener("transitionend", function() {
              mobileMenu.classList.add("hidden");
          }, { once: true });
      }
  });
});


// Function to open the modal
function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
