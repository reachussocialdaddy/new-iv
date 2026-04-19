const fs = require('fs');
const path = require('path');

const directory = 'c:\\Users\\ASUS\\Desktop\\my-work\\new-iv';
const files = fs.readdirSync(directory).filter(file => file.endsWith('.html'));

const oldUrl1 = 'https://res.cloudinary.com/dpcidympa/image/upload/q_auto/f_auto/v1775173998/Screenshot_2026-04-03_051123-removebg-preview_wa0knu.png';
const oldUrl2 = 'https://res.cloudinary.com/dpcidympa/image/upload/v1775173998/Screenshot_2026-04-03_051123-removebg-preview_wa0knu.png';
const newUrl = 'assets/images/revive-iv-logo.png';

for (const file of files) {
    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let original = content;
    content = content.split(oldUrl1).join(newUrl);
    content = content.split(oldUrl2).join(newUrl);
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}
console.log('Logo update complete.');
