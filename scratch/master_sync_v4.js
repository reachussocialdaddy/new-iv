const fs = require('fs');
const path = require('path');

const directoryPath = 'c:/Users/ASUS/Desktop/my-work/new-iv';
const files = [
    'index.html',
    'about.html',
    'contact.html',
    'faq.html',
    'iv-drips.html',
    'pricing.html',
    'services.html',
    'blog.html',
    'book.html'
];

files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        let activeLink = '';
        if (file === 'index.html') activeLink = 'HOME';
        else if (file === 'services.html') activeLink = 'SERVICES';
        else if (file === 'iv-drips.html') activeLink = 'IV DRIPS';
        else if (file === 'pricing.html') activeLink = 'PRICING';
        else if (file === 'about.html') activeLink = 'ABOUT';
        else if (file === 'faq.html') activeLink = 'FAQS';
        else if (file === 'contact.html') activeLink = 'CONTACT';

        // MASTER HEADER
        const masterHeader = `
    <!-- Header -->
    <header class="navbar">
        <div class="logo">
            <a href="index.html"><img src="assets/images/revive-iv-logo.png" alt="Revive IV Logo" class="logo-img"></a>
        </div>
        <div class="hamburger">
            <i class="fa-solid fa-bars"></i>
        </div>
        <nav class="nav-links">
            <a href="index.html" class="${activeLink === 'HOME' ? 'active' : ''}">HOME</a>
            <a href="services.html" class="${activeLink === 'SERVICES' ? 'active' : ''}">SERVICES</a>
            <a href="iv-drips.html" class="${activeLink === 'IV DRIPS' ? 'active' : ''}">IV DRIPS</a>
            <a href="pricing.html" class="${activeLink === 'PRICING' ? 'active' : ''}">PRICING</a>
            <a href="about.html" class="${activeLink === 'ABOUT' ? 'active' : ''}">ABOUT</a>
            <a href="faq.html" class="${activeLink === 'FAQS' ? 'active' : ''}">FAQS</a>
            <a href="index.html#reviews">REVIEWS</a>
            <a href="contact.html" class="${activeLink === 'CONTACT' ? 'active' : ''}">CONTACT</a>
        </nav>
    </header>`;

        // MASTER FOOTER
        const masterFooter = `
    <!-- Footer -->
    <footer class="footer">
        <div class="footer-logo">
            <img src="assets/images/revive-iv-logo.png" alt="Revive IV Footer Logo" class="logo-img" style="filter: brightness(0) invert(1); height: 75px;">
        </div>
        <div class="footer-links">
            <a href="index.html">HOME</a>
            <a href="services.html">SERVICES</a>
            <a href="iv-drips.html">IV DRIPS</a>
            <a href="pricing.html">PRICING</a>
            <a href="about.html">ABOUT</a>
            <a href="faq.html">FAQS</a>
            <a href="blog.html">BLOG</a>
            <a href="contact.html">CONTACT</a>
        </div>
        <div class="footer-copyright">
            &copy; 2024 - 2026 REVIVE IV HYDRATION. ALL RIGHTS RESERVED.
        </div>
    </footer>`;

        // Force replace the header and footer blocks
        content = content.replace(/<header[\s\S]*?<\/header>/, masterHeader);
        content = content.replace(/<footer[\s\S]*?<\/footer>/, masterFooter);

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully synced Header & Footer for ${file}`);
    }
});
