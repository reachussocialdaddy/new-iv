const fs = require('fs');
const path = require('path');

const dirPath = 'c:\\Users\\ASUS\\Desktop\\my-work\\new-iv';
const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.py'));

files.forEach(file => {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace href="faqs.html" with href="index.html#faqs"
    const newContent = content.replace(/href="faqs\.html"/g, 'href="index.html#faqs"');
    
    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Updated links in ${file}`);
    }
});

if (fs.existsSync(path.join(dirPath, 'faqs.html'))) {
    fs.unlinkSync(path.join(dirPath, 'faqs.html'));
    console.log("Deleted faqs.html");
}
