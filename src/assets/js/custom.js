document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    const contentContainer = document.getElementById('content-container');
    
    // Function to toggle sidebar on mobile
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        
        // Create or remove overlay for mobile
        let overlay = document.querySelector('.overlay');
        if (!overlay && sidebar.classList.contains('active')) {
            overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);
            
            // Add click event to close sidebar when clicking outside
            setTimeout(() => {
                overlay.classList.add('active');
            }, 50);
            
            overlay.addEventListener('click', function() {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                setTimeout(() => {
                    overlay.remove();
                }, 500);
            });
        } else if (overlay) {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.remove();
            }, 500);
        }
    }
    
    // Event listeners for sidebar toggle
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    } else {
        console.error('Sidebar toggle button not found');
    }
    
    // Close button for mobile view
    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', toggleSidebar);
    }
    
    // Navigation handling (for future routing)
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the route from the link text or data attribute
            const route = this.querySelector('span').textContent.toLowerCase();
            
            // Example of content switching based on route
            // In a real app, you would use a proper router
            loadContent(route);
            
            // On mobile, close the sidebar after navigation
            if (window.innerWidth < 768) {
                toggleSidebar();
            }
        });
    });
    
    // Handle responsive behavior on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Remove overlay if it exists when resizing to desktop
            const overlay = document.querySelector('.overlay');
            if (overlay) {
                overlay.remove();
            }
            
            // Ensure sidebar is visible on desktop
            if (!sidebar.classList.contains('active')) {
                sidebar.classList.add('active');
            }
        } else {
            // Hide sidebar on mobile by default
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        }
    });
    
    // Initialize correct state based on screen size
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('active');
    }
});