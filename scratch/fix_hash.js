const fs = require('fs');
let content = fs.readFileSync('c:\\Users\\ASUS\\Desktop\\my-work\\new-iv\\iv-drips.html', 'utf8');

// Update to local hashes to prevent page reload
content = content.replace(/href="iv-drips\.html#myers-cocktail"/g, 'href="#myers-cocktail" onclick="document.getElementById(\'myers-cocktail\').scrollIntoView({behavior: \'smooth\', block: \'center\'}); event.preventDefault();"');
content = content.replace(/href="iv-drips\.html#liquid-gold"/g, 'href="#liquid-gold" onclick="document.getElementById(\'liquid-gold\').scrollIntoView({behavior: \'smooth\', block: \'center\'}); event.preventDefault();"');
content = content.replace(/href="iv-drips\.html#beautify"/g, 'href="#beautify" onclick="document.getElementById(\'beautify\').scrollIntoView({behavior: \'smooth\', block: \'center\'}); event.preventDefault();"');
content = content.replace(/href="iv-drips\.html#revive-defense"/g, 'href="#revive-defense" onclick="document.getElementById(\'revive-defense\').scrollIntoView({behavior: \'smooth\', block: \'center\'}); event.preventDefault();"');

fs.writeFileSync('c:\\Users\\ASUS\\Desktop\\my-work\\new-iv\\iv-drips.html', content, 'utf8');
console.log('Fixed iv-drips hash links');
