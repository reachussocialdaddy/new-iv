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
    { old: /#009394/g, new: '#C8A96E' }, // Teal to Gold
    { old: /#d4af37/g, new: '#C8A96E' }, // Old Gold to New Gold
    { old: /#186082/g, new: '#0B3D2E' }, // Old Blue to Forest Green
    { old: /#153243/g, new: '#0B3D2E' }, // Navy to Forest Green
    { old: /#284b63/g, new: '#0B3D2E' }, // Another Navy to Forest Green
    { old: /rgba\(0, 147, 148/g, new: 'rgba(200, 169, 110' }, // Teal RGBA to Gold RGBA
];

files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        colorReplacements.forEach(rep => {
            content = content.replace(rep.old, rep.new);
        });

        // Ensure Top Bar is consistent and Forest Green
        // We look for background-color: var(--accent) in top-bar-wrapper and change it to var(--primary) or similar
        content = content.replace(/background-color: var\(--accent\);/g, 'background-color: var(--primary);');
        
        // Final Logo check
        content = content.replace(/src="assets\/images\/logo-dark\.png"/g, 'src="assets/images/revive-iv-logo.png"');

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Final cleanup done for ${file}`);
    }
});
