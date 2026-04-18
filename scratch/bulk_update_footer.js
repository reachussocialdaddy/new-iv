const fs = require('fs');
const path = require('path');

const newFooterHtml = `    <!-- Footer -->
    <footer class="footer new-footer">
        <div class="footer-container">
            <div class="footer-links">
                <ul>
                    <li><a href="index.html">HOME</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="services.html">SERVICES</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="iv-drips.html">IV DRIPS</a><i class="fa-solid fa-chevron-right"></i></li>

                    <li><a href="about.html">ABOUT</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="faqs.html">FAQS</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="index.html#reviews">REVIEWS</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="contact.html">CONTACT</a><i class="fa-solid fa-chevron-right"></i></li>
                </ul>
            </div>
            <div class="footer-disclaimer-text">
                <p>The services provided have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease. The material on this website is provided for informational purposes only and is not medical advice. Always consult your physician before beginning any treatment or therapy program. Any designations or references to therapies are for marketing purposes only and do not represent actual products.</p>
            </div>
            <div class="footer-contact">
                <div class="social-icons">
                    <a href="https://www.instagram.com/reviveivdrip_/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=61570785538852" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.tiktok.com/@revive.iv.drip?_r=1&_t=ZS-95Y6xC3RF0z" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
                </div>
                <div class="contact-info">
                    <p class="call-text">Give us a call</p>
                    <p class="call-number">+1 813-709-3698</p>
                </div>
            </div>
        </div>
    </footer>
    <div class="footer-bottom-bar">
        <div class="footer-bottom-container">
            <p>&copy; 2026 Revive IV Hydration || Drip & CMD websites</p>
        </div>
    </div>`;

const dirPath = 'c:\\Users\\ASUS\\Desktop\\my-work\\new-iv';
const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));

const pattern = /<footer class="footer[^>]*>[\s\S]*?<div class="footer-bottom-bar">\s*<div class="footer-bottom-container">\s*<p>.*?<\/p>\s*<\/div>\s*<\/div>/;

files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    if (content.includes('footer class="footer new-footer"')) {
        console.log(`Skipping ${file}, already has new footer.`);
        return;
    }
    
    if (pattern.test(content)) {
        const newContent = content.replace(pattern, newFooterHtml);
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`Could not find old footer pattern in ${file}`);
    }
});
