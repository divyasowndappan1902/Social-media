

// 1. SELECT ELEMENTS
const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const homeCaret = document.getElementById("home-caret");
const homeDropdown = document.getElementById("home-dropdown");

// 2. SIDEBAR TOGGLE LOGIC (HAMBURGER CLICK)
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");

    // AOS Animation Reset when sidebar opens
    if (sidebar.classList.contains("active")) {
        const aosItems = sidebar.querySelectorAll("[data-aos]");
        
        aosItems.forEach(item => {
            item.classList.remove("aos-animate");
        });

        // Small delay to allow sidebar to slide in before AOS starts
        setTimeout(() => {
            AOS.refreshHard();
        }, 100);
    }
});

// 3. HOME DROPDOWN TOGGLE (CARET CLICK)
// Specifically handles showing/hiding Home 2 and rotating the arrow
if (homeCaret) {
    homeCaret.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevents click from bubbling up
        
        homeDropdown.classList.toggle("open");
        homeCaret.classList.toggle("rotate");
    });
}
// 4. CLOSE SIDEBAR (OVERLAY CLICK)

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

// Drop Down
// 5)) DROP DOWN TOGGLE LOGIC (DROPDOWN ICON CLICK)
    const dropdown = document.querySelector(".dropdown");
    const dropToggle = document.querySelector(".drop-toggle"); // Target the icon specifically

    dropToggle.addEventListener("click", function (e) {
      e.preventDefault(); // Stop the page from jumping/refreshing
      e.stopPropagation(); // Stop click from bubbling to window
      dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    window.addEventListener("click", function () {
      dropdown.classList.remove("active");
    });

    // End