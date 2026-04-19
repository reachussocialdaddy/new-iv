const fs = require('fs');

// Add IDs to iv-drips.html
let iv = fs.readFileSync('c:\\Users\\ASUS\\Desktop\\my-work\\new-iv\\iv-drips.html', 'utf8');

iv = iv.replace('<!-- Myers Cocktail Drip -->\n            <div class="product-card-single">', '<!-- Myers Cocktail Drip -->\n            <div class="product-card-single" id="myers-cocktail">');
iv = iv.replace('<!-- Drip 3 -->\n            <div class="product-card-single">', '<!-- Drip 3 -->\n            <div class="product-card-single" id="revive-defense">');
iv = iv.replace('<!-- Drip 4 -->\n            <div class="product-card-single">', '<!-- Drip 4 -->\n            <div class="product-card-single" id="beautify">');
iv = iv.replace('<!-- Drip 5 -->\n            <div class="product-card-single">', '<!-- Drip 5 -->\n            <div class="product-card-single" id="liquid-gold">');

fs.writeFileSync('c:\\Users\\ASUS\\Desktop\\my-work\\new-iv\\iv-drips.html', iv, 'utf8');

// Update Guide items in both files
const files = ['c:\\Users\\ASUS\\Desktop\\my-work\\new-iv\\index.html', 'c:\\Users\\ASUS\\Desktop\\my-work\\new-iv\\iv-drips.html'];

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');

    content = content.replace(
        /<div class="guide-item">\s*<div class="guide-icon"><i class="fa-solid fa-bolt"><\/i><\/div>\s*<span class="trigger">Need energy\?<\/span>\s*<span class="solution">Myers Cocktail<\/span>\s*<\/div>/g,
        '<a href="iv-drips.html#myers-cocktail" class="guide-item" style="text-decoration:none;">\n                    <div class="guide-icon"><i class="fa-solid fa-bolt"></i></div>\n                    <span class="trigger">Need energy?</span>\n                    <span class="solution">Myers Cocktail</span>\n                </a>'
    );

    content = content.replace(
        /<div class="guide-item">\s*<div class="guide-icon"><i class="fa-solid fa-wine-glass"><\/i><\/div>\s*<span class="trigger">Drank too much\?<\/span>\s*<span class="solution">Liquid Gold<\/span>\s*<\/div>/g,
        '<a href="iv-drips.html#liquid-gold" class="guide-item" style="text-decoration:none;">\n                    <div class="guide-icon"><i class="fa-solid fa-wine-glass"></i></div>\n                    <span class="trigger">Drank too much?</span>\n                    <span class="solution">Liquid Gold</span>\n                </a>'
    );

    content = content.replace(
        /<div class="guide-item">\s*<div class="guide-icon"><i class="fa-solid fa-spa"><\/i><\/div>\s*<span class="trigger">Big event soon\?<\/span>\s*<span class="solution">Beautify<\/span>\s*<\/div>/g,
        '<a href="iv-drips.html#beautify" class="guide-item" style="text-decoration:none;">\n                    <div class="guide-icon"><i class="fa-solid fa-spa"></i></div>\n                    <span class="trigger">Big event soon?</span>\n                    <span class="solution">Beautify</span>\n                </a>'
    );

    content = content.replace(
        /<div class="guide-item">\s*<div class="guide-icon"><i class="fa-solid fa-shield-virus"><\/i><\/div>\s*<span class="trigger">Feeling sick\?<\/span>\s*<span class="solution">Revive Defense<\/span>\s*<\/div>/g,
        '<a href="iv-drips.html#revive-defense" class="guide-item" style="text-decoration:none;">\n                    <div class="guide-icon"><i class="fa-solid fa-shield-virus"></i></div>\n                    <span class="trigger">Feeling sick?</span>\n                    <span class="solution">Revive Defense</span>\n                </a>'
    );

    fs.writeFileSync(f, content, 'utf8');
    console.log('Fixed links in', f);
});
