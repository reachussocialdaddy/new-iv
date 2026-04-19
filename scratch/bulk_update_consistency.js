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

const phoneRegex = /8137093698/g;
const phoneDisplayRegex = /\+1 \(813\) 709-3698/g;
const copyrightRegex = /&copy; 2024 Revive IV Hydration/g;
const copyrightRegex2 = /&copy; 2024 - 2025 Revive IV Hydration/g;

const topBarOld = `    <!-- Top Bar -->
    <div class="top-bar" style="display: flex; justify-content: center; align-items: center; gap: 15px;">
        <span style="font-size: 0.9rem;">Expert IV Hydration Delivered to You in New York & Surrounding Areas</span>
        <a href="book.html" style="background-color: white; color: var(--accent); padding: 4px 15px; border-radius: 20px; font-weight: 700; font-size: 0.75rem;">BOOK NOW</a>
    </div>`;

const topBarNew = `    <!-- Top Bar -->
    <div class="top-bar-wrapper" id="topBar">
        <div class="top-bar" style="display: flex; justify-content: center; align-items: center; gap: 15px; position: relative; padding-right: 40px;">
            <span style="font-size: 0.9rem;">Expert IV Hydration Delivered to You in New York & Surrounding Areas</span>
            <a href="book.html" style="background-color: white; color: var(--accent); padding: 4px 15px; border-radius: 20px; font-weight: 700; font-size: 0.75rem;">BOOK NOW</a>
            <button onclick="dismissTopBar()" style="position: absolute; right: 15px; background: none; border: none; color: white; cursor: pointer; font-size: 1.2rem; opacity: 0.8;">&times;</button>
        </div>
    </div>
    <script>
        function dismissTopBar() {
            document.getElementById('topBar').style.display = 'none';
            localStorage.setItem('topBarDismissed', 'true');
        }
        if (localStorage.getItem('topBarDismissed')) {
            document.getElementById('topBar').style.display = 'none';
        }
    </script>`;

files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (file !== 'index.html') {
            // Replace top bar only in non-index files (index already has it)
            // Use a simpler string match or regex if needed
            content = content.replace(topBarOld, topBarNew);
        }

        // Update tel: links
        content = content.replace(phoneRegex, '6467093698');
        
        // Update display phone if any old ones remain
        content = content.replace(phoneDisplayRegex, '+1 (646) 709-3698');
        
        // Standardize copyright
        content = content.replace(copyrightRegex, '&copy; 2024 - 2026 Revive IV Hydration');
        content = content.replace(copyrightRegex2, '&copy; 2024 - 2026 Revive IV Hydration');
        
        // Standardize logo src if needed (just in case)
        content = content.replace(/src="assets\/images\/logo-dark\.png"/g, 'src="assets/images/revive-iv-logo.png"');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
