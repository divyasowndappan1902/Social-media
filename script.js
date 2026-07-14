// 1. SELECT ELEMENTS
const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const homeCaret = document.getElementById("home-caret");
const homeDropdown = document.getElementById("home-dropdown");

// 2. SIDEBAR TOGGLE LOGIC (HAMBURGER CLICK)
if (hamburger && sidebar && overlay) {
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
                if (typeof AOS !== 'undefined') AOS.refreshHard();
            }, 100);
        }
    });

    // 4. CLOSE SIDEBAR (OVERLAY CLICK)
    overlay.addEventListener("click", () => {
      hamburger.classList.remove("active");
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
}

// 3. HOME DROPDOWN TOGGLE (CARET CLICK)
if (homeCaret && homeDropdown) {
    homeCaret.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevents click from bubbling up
        
        homeDropdown.classList.toggle("open");
        homeCaret.classList.toggle("rotate");
    });
}


// Drop Down
// 5)) DROP DOWN TOGGLE LOGIC (DROPDOWN ICON CLICK)
const dropdown = document.querySelector(".dropdown");
const dropToggle = document.querySelector(".drop-toggle"); // Target the icon specifically

if (dropToggle && dropdown) {
    dropToggle.addEventListener("click", function (e) {
        e.preventDefault(); // Stop the page from jumping/refreshing
        e.stopPropagation(); // Stop click from bubbling to window
        dropdown.classList.toggle("active");
    });
}

// Close dropdown when clicking outside
window.addEventListener("click", function () {
    if (dropdown) {
        dropdown.classList.remove("active");
    }
});


// 6. ACTIVE NAVIGATION LINK LOGIC
document.addEventListener("DOMContentLoaded", () => {
    // Get the current filename, default to 'index.html' if empty
    const currentPath = window.location.pathname;
    let currentFilename = currentPath.split('/').pop();
    if (!currentFilename) {
        currentFilename = 'index.html';
    }
    
    const allLinks = document.querySelectorAll("nav ul li a, .sidebar ul li a");
    
    // First remove any hardcoded active classes to avoid duplicates
    allLinks.forEach(link => {
        link.classList.remove("active");
    });
    
    // Set initial active state based on URL
    allLinks.forEach(link => {
        // Get the filename of the link
        const linkHref = link.getAttribute('href') || '';
        let linkFilename = linkHref.split('/').pop();
        if (!linkFilename || linkFilename === '.' || linkFilename === './') {
            linkFilename = 'index.html';
        }
        
        // Match filename
        if (currentFilename === linkFilename) {
            link.classList.add("active");
        }
        
        // Add click listener for instant feedback before navigation completes
        link.addEventListener("click", function() {
            allLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
