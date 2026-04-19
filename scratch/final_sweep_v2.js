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
    { old: /#186082/g, new: '#0B3D2E' }, // Deep Blue/Teal to Deep Forest Green
    { old: /#009394/g, new: '#C8A96E' }, // Teal to Warm Gold
    { old: /#d4af37/g, new: '#C8A96E' }, // Old Gold to Warm Gold
    { old: /color:\s*#186082/g, new: 'color: #0B3D2E' },
    { old: /#153243/g, new: '#0B3D2E' }
];

files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        colorReplacements.forEach(rep => {
            content = content.replace(rep.old, rep.new);
        });
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Final color sweep done for ${file}`);
    }
});
