// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Function to toggle mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Change the menu icon (if applicable)
  if (menuBtnIcon.classList.contains("ri-menu-line")) {
    menuBtnIcon.classList.remove("ri-menu-line");
    menuBtnIcon.classList.add("ri-close-line");
  } else {
    menuBtnIcon.classList.remove("ri-close-line");
    menuBtnIcon.classList.add("ri-menu-line");
  }
});

// Apply responsive classes on load and resize
window.addEventListener("resize", applyResponsiveClasses);
window.addEventListener("load", applyResponsiveClasses);

function applyResponsiveClasses() {
  const spanElement = document.querySelector(".h1__span-1");
  const h1Element = document.querySelector(".header__content h1");

  // Check the screen width (768px or below for phones)
  if (window.innerWidth <= 768) {
    // Apply phone-specific classes
    spanElement.classList.add("h1__span-1-phone");
    h1Element.classList.add("phone");
  } else {
    // Remove phone-specific classes for larger screens
    spanElement.classList.remove("h1__span-1-phone");
    h1Element.classList.remove("phone");
  }
}

// Run the function on page load to apply classes based on initial screen size
applyResponsiveClasses();

// Dynamic Font Size Adjustment
function adjustFontSize() {
  const width = window.innerWidth;
  const headerContent = document.querySelectorAll(".header__content h2, .header__content p");

  // Check if the screen width is <= 768px (Mobile view)
  if (width <= 768) {
    // Adjust font size for mobile devices
    headerContent.forEach((element) => {
      element.style.fontSize = "1rem";  // Mobile font size
    });
  } else {
    // Adjust font size for desktop screens
    headerContent.forEach((element) => {
      element.style.fontSize = "1.2rem";  // Desktop font size
    });
  }
}

// Adjust font size on initial load and when resizing the window
adjustFontSize();
window.addEventListener("resize", adjustFontSize);
