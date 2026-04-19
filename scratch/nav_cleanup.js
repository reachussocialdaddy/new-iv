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
        
        // Finalized Navigation HTML structure (no duplicates, correct order)
        const navStart = '<nav class="nav-links">';
        const navEnd = '</nav>';
        
        // Determine which link should be active
        let activeLink = '';
        if (file === 'index.html') activeLink = 'index.html';
        else if (file === 'services.html') activeLink = 'services.html';
        else if (file === 'iv-drips.html') activeLink = 'iv-drips.html';
        else if (file === 'pricing.html') activeLink = 'pricing.html';
        else if (file === 'about.html') activeLink = 'about.html';
        else if (file === 'faq.html') activeLink = 'faq.html';
        else if (file === 'contact.html') activeLink = 'contact.html';

        const newNav = `
        <nav class="nav-links">
            <a href="index.html" class="${activeLink === 'index.html' ? 'active' : ''}">HOME</a>
            <a href="services.html" class="${activeLink === 'services.html' ? 'active' : ''}">SERVICES</a>
            <a href="iv-drips.html" class="${activeLink === 'iv-drips.html' ? 'active' : ''}">IV DRIPS</a>
            <a href="pricing.html" class="${activeLink === 'pricing.html' ? 'active' : ''}">PRICING</a>
            <a href="about.html" class="${activeLink === 'about.html' ? 'active' : ''}">ABOUT</a>
            <a href="faq.html" class="${activeLink === 'faq.html' ? 'active' : ''}">FAQS</a>
            <a href="index.html#reviews">REVIEWS</a>
            <a href="contact.html" class="${activeLink === 'contact.html' ? 'active' : ''}">CONTACT</a>
        </nav>`;

        // Replace entire nav section to be sure
        const navRegex = /<nav class="nav-links">[\s\S]*?<\/nav>/g;
        content = content.replace(navRegex, newNav);

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Navigation cleaned for ${file}`);
    }
});
