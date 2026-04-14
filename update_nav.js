const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\ASUS\\Desktop\\my-work\\new-iv';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Header nav replacement
    const headerSearch = '            <a href="index.html">HOME</a>';
    const headerReplace = '            <a href="index.html">HOME</a>\n            <a href="services.html">SERVICES</a>';
    content = content.replace(headerSearch, headerReplace);

    // Footer nav replacement (update_footer.py gave it <li><a ...)
    const footerSearch = '                    <li><a href="index.html">HOME</a><i class="fa-solid fa-chevron-right"></i></li>';
    const footerReplace = '                    <li><a href="index.html">HOME</a><i class="fa-solid fa-chevron-right"></i></li>\n                    <li><a href="services.html">SERVICES</a><i class="fa-solid fa-chevron-right"></i></li>';
    // This replaces all occurrences just in case the footer appears multiple times
    content = content.split(footerSearch).join(footerReplace);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
});
