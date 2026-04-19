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
    'book.html',
    'styles.css'
];

const replacements = [
    // Teal -> Gold
    { old: /#009394/g, new: '#C8A96E' },
    { old: /#009395/g, new: '#C8A96E' },
    { old: /rgba\(0, 147, 148, 0\.35\)/g, new: 'rgba(200, 169, 110, 0.35)' },
    { old: /rgba\(0, 147, 148, 0\.45\)/g, new: 'rgba(200, 169, 110, 0.45)' },
    { old: /rgba\(0, 147, 148, 0\.2\)/g, new: 'rgba(200, 169, 110, 0.2)' },
    
    // Old Gold -> New Gold
    { old: /#d4af37/g, new: '#C8A96E' },
    
    // Specifically Target Buttons if they use #151515 in background but need Gold
    // We'll manage this in styles.css mainly.
];

files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        replacements.forEach(rep => {
            content = content.replace(rep.old, rep.new);
        });

        // Specific Fix for Top Bar background inline styles
        // Look for: style="... background-color: var(--accent); ..." or similar
        content = content.replace(/background-color: var\(--accent\);/g, 'background-color: var(--primary);');
        content = content.replace(/background: var\(--accent\);/g, 'background: var(--primary);');

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Ultimate cleanup done for ${file}`);
    }
});
