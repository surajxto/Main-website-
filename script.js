document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open after clicking a link
            const navbar = document.querySelector('.navbar');
            const hamburger = document.getElementById('hamburger-menu');
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger-menu');
    const navbar = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Active Navbar Link on Scroll (Optional, more advanced)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) { // Offset for better highlighting
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // Simple Contact Form Submission (Example - replace with actual backend integration)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // In a real application, you would send this data to a server
        // using fetch() or XMLHttpRequest.
        // For demonstration, we'll just show a success/error message.
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            return;
        }
        
        // Simulate API call
        console.log('Form Submitted:', { name, email, message });
        
        formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        
        contactForm.reset(); // Clear the form
        
        // Hide message after a few seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000); // 5 seconds
    });
    
    // You can add more JavaScript here for:
    // - Scroll-reveal animations (using libraries like ScrollReveal.js or custom Intersection Observer)
    // - Project card hover animations (if complex, otherwise pure CSS is better)
    // - Skill carousel/slider functionality
});
