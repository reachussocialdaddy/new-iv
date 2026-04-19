const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // Fix encoding error
    let newContent = content.replace(/â€”/g, '—');
    
    // Fix copyright year and remove dev agency tags
    newContent = newContent.replace(/&copy; 2026 Revive IV Hydration \|\| Drip & CMD websites/g, '&copy; 2024 - 2026 Revive IV Hydration');
    newContent = newContent.replace(/© 2026 Revive IV Hydration/g, '© 2024 - 2026 Revive IV Hydration');

    // Add NYC location to top bar
    newContent = newContent.replace('<span style="font-size: 0.9rem;">Expert IV Hydration Delivered to You</span>', '<span style="font-size: 0.9rem;">Expert IV Hydration Delivered to You in New York & Surrounding Areas</span>');

    // MOCK INSTAGRAM FEED (Replacing stock nurse photo)
    const instaTarget = `<div class="insta-image mt-4">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Nurse preparing IV">
            </div>`;
            
    const instaReplacement = `<div class="insta-image mt-4" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; max-width: 800px; margin: 0 auto;">
                <img src="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=400&q=80" alt="IV setup" style="border-radius: 8px; width: 100%; aspect-ratio: 1/1; object-fit: cover; box-shadow: none;">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80" alt="Nurse preparing IV" style="border-radius: 8px; width: 100%; aspect-ratio: 1/1; object-fit: cover; box-shadow: none;">
                <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?w=400&q=80" alt="Wellness" style="border-radius: 8px; width: 100%; aspect-ratio: 1/1; object-fit: cover; box-shadow: none;">
                <img src="https://images.unsplash.com/photo-1606318313647-13a843c0382d?w=400&q=80" alt="Vitamin infusion" style="border-radius: 8px; width: 100%; aspect-ratio: 1/1; object-fit: cover; box-shadow: none;">
            </div>`;
    
    if (newContent.includes(instaTarget)) {
        newContent = newContent.replace(instaTarget, instaReplacement);
    }

    // Replace footer contact to include Service Area in NY
    const footerTarget = `<div class="contact-info">
                    <p class="call-text">Give us a call</p>`;
    const footerReplacement = `<div class="contact-info">
                    <p class="call-text">Service Area</p>
                    <p class="call-number" style="font-size: 0.95rem; margin-bottom: 20px;">New York Metro Area</p>
                    <p class="call-text">Give us a call</p>`;
    
    // Only replace if it doesn't already have Service Area
    if (newContent.includes(footerTarget) && !newContent.includes('New York Metro Area')) {
        newContent = newContent.replace(footerTarget, footerReplacement);
    }

    if (content !== newContent) {
        fs.writeFileSync(f, newContent, 'utf8');
        console.log('Fixed', f);
    }
});
