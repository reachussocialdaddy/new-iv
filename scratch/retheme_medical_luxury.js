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

const colorReplacements = [
    { old: /#009394/g, new: '#C8A96E' }, // Replace Teal with Gold for buttons/accents
    { old: /rgba\(0, 147, 148, 0.4\)/g, new: 'rgba(200, 169, 110, 0.4)' },
    { old: /#186082/g, new: '#0B3D2E' }, // Replace Blue titles with Forest Green
    { old: /#153243/g, new: '#0B3D2E' }, // Replace Navy with Forest Green
];

files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        colorReplacements.forEach(rep => {
            content = content.replace(rep.old, rep.new);
        });

        // Specific fix for header logo consistency if needed
        content = content.replace(/assets\/images\/revive-iv-logo\.png/g, 'assets/images/revive-iv-logo.png');

        // Apply Forest Green to Footers and Headers where inline styles are used
        // For example, in index.html footer
        content = content.replace(/background-color: var\(--accent\);/g, 'background-color: var(--primary);');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Rethemed ${file}`);
    }
});
