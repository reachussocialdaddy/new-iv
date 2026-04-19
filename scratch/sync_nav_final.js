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

        const masterNav = `
        <nav class="nav-links">
            <a href="index.html" class="${activeLink === 'HOME' ? 'active' : ''}">HOME</a>
            <a href="services.html" class="${activeLink === 'SERVICES' ? 'active' : ''}">SERVICES</a>
            <a href="iv-drips.html" class="${activeLink === 'IV DRIPS' ? 'active' : ''}">IV DRIPS</a>
            <a href="pricing.html" class="${activeLink === 'PRICING' ? 'active' : ''}">PRICING</a>
            <a href="about.html" class="${activeLink === 'ABOUT' ? 'active' : ''}">ABOUT</a>
            <a href="faq.html" class="${activeLink === 'FAQS' ? 'active' : ''}">FAQS</a>
            <a href="index.html#reviews">REVIEWS</a>
            <a href="contact.html" class="${activeLink === 'CONTACT' ? 'active' : ''}">CONTACT</a>
        </nav>`;

        // Regexp to replace the entire nav block
        content = content.replace(/<nav class="nav-links">[\s\S]*?<\/nav>/, masterNav);

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Navigation 100% Synced for ${file}`);
    }
});
