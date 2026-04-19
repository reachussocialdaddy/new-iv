const fs = require('fs');

const files = ['c:\\Users\\ASUS\\Desktop\\my-work\\new-iv\\index.html', 'c:\\Users\\ASUS\\Desktop\\my-work\\new-iv\\iv-drips.html'];

const oldTrustBadges = `    <!-- Trust Badges -->
    <div class="container" style="max-width: 900px;">
        <div class="trust-badges-container">
            <div class="trust-badge-item">
                <i class="fa-solid fa-user-nurse"></i>
                Administered by<br>Licensed RNs
            </div>
            <div class="trust-badge-item">
                <i class="fa-solid fa-prescription-bottle-medical"></i>
                FDA-Approved<br>Pharmacy Sourced
            </div>
            <div class="trust-badge-item">
                <i class="fa-solid fa-stethoscope"></i>
                Medical Director<br>Oversight
            </div>
        </div>
    </div>`;

const oldTrustBadgesIV = `    <!-- Trust Badges -->
    <div class="container" data-category="iv-drips">
        <div class="trust-badges-container">
            <div class="trust-badge-item">
                <i class="fa-solid fa-user-nurse"></i>
                Administered by<br>Licensed RNs
            </div>
            <div class="trust-badge-item">
                <i class="fa-solid fa-prescription-bottle-medical"></i>
                FDA-Approved<br>Pharmacy Sourced
            </div>
            <div class="trust-badge-item">
                <i class="fa-solid fa-stethoscope"></i>
                Medical Director<br>Oversight
            </div>
        </div>
    </div>`;


const newTrustBadges = `    <!-- Premium Trust Badges -->
    <div class="container" data-category="iv-drips" style="max-width: 1100px;">
        <div class="trust-badges-container">
            <div class="trust-badge-item">
                <div class="trust-icon-wrapper"><i class="fa-solid fa-user-nurse"></i></div>
                <div>
                   <h4>Licensed RNs</h4>
                   <p>Administered by experts</p>
                </div>
            </div>
            <div class="trust-badge-item">
                <div class="trust-icon-wrapper"><i class="fa-solid fa-prescription-bottle-medical"></i></div>
                <div>
                   <h4>FDA-Approved</h4>
                   <p>Premium pharmacy sourced</p>
                </div>
            </div>
            <div class="trust-badge-item">
                <div class="trust-icon-wrapper"><i class="fa-solid fa-stethoscope"></i></div>
                <div>
                   <h4>Medical Director</h4>
                   <p>Complete safety oversight</p>
                </div>
            </div>
        </div>
    </div>`;

const oldGuide = `    <!-- Quick Guide -->
    <div class="container" style="max-width: 900px; margin-top: 50px;">
        <div class="guide-container">
            <h2 style="font-size: 1.5rem; color: var(--primary); margin-bottom: 10px;">Which Drip Is Right For Me?</h2>
            <p style="color: #64748b; font-size: 0.95rem;">Not sure what to choose? Here is a quick cheat-sheet for your goals.</p>
            <div class="guide-grid">
                <div class="guide-item">
                    <span class="trigger">Need energy & focus?</span> 👉 <span class="solution">Myers Cocktail</span>
                </div>
                <div class="guide-item">
                    <span class="trigger">Drank too much?</span> 👉 <span class="solution">Liquid Gold</span>
                </div>
                <div class="guide-item">
                    <span class="trigger">Upcoming event/wedding?</span> 👉 <span class="solution">Beautify</span>
                </div>
                <div class="guide-item">
                    <span class="trigger">Feeling sick?</span> 👉 <span class="solution">Revive Defense</span>
                </div>
            </div>
        </div>
    </div>`;

const oldGuideIV = `    <!-- Quick Guide -->
    <div class="container" data-category="iv-drips" style="margin-top: 40px;">
        <div class="guide-container">
            <h2 style="font-size: 1.5rem; color: var(--primary); margin-bottom: 10px;">Which Drip Is Right For Me?</h2>
            <p style="color: #64748b; font-size: 0.95rem;">Not sure what to choose? Here is a quick cheat-sheet for your goals.</p>
            <div class="guide-grid">
                <div class="guide-item">
                    <span class="trigger">Need energy & focus?</span> 👉 <span class="solution">Myers Cocktail</span>
                </div>
                <div class="guide-item">
                    <span class="trigger">Drank too much?</span> 👉 <span class="solution">Liquid Gold</span>
                </div>
                <div class="guide-item">
                    <span class="trigger">Upcoming event/wedding?</span> 👉 <span class="solution">Beautify</span>
                </div>
                <div class="guide-item">
                    <span class="trigger">Feeling sick?</span> 👉 <span class="solution">Revive Defense</span>
                </div>
            </div>
        </div>
    </div>`;

const newGuide = `    <!-- Premium Quick Guide -->
    <div class="container" data-category="iv-drips" style="max-width: 1000px; margin-top: 50px;">
        <div class="guide-container">
            <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="font-size: 2.5rem; color: white; margin-bottom: 15px; font-family: 'Playfair Display', serif;">Which Drip Is Right For Me?</h2>
                <p style="color: rgba(255,255,255,0.8); font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Not sure what to choose? Explore our quick cheat-sheet for your specific health and wellness goals.</p>
            </div>
            <div class="guide-grid">
                <div class="guide-item">
                    <div class="guide-icon"><i class="fa-solid fa-bolt"></i></div>
                    <span class="trigger">Need energy?</span>
                    <span class="solution">Myers Cocktail</span>
                </div>
                <div class="guide-item">
                    <div class="guide-icon"><i class="fa-solid fa-wine-glass"></i></div>
                    <span class="trigger">Drank too much?</span>
                    <span class="solution">Liquid Gold</span>
                </div>
                <div class="guide-item">
                    <div class="guide-icon"><i class="fa-solid fa-spa"></i></div>
                    <span class="trigger">Big event soon?</span>
                    <span class="solution">Beautify</span>
                </div>
                <div class="guide-item">
                    <div class="guide-icon"><i class="fa-solid fa-shield-virus"></i></div>
                    <span class="trigger">Feeling sick?</span>
                    <span class="solution">Revive Defense</span>
                </div>
            </div>
        </div>
    </div>`;

files.forEach(f => {
    let html = fs.readFileSync(f, 'utf8');

    // Replace the exact blocks
    if (html.includes(oldTrustBadges)) html = html.replace(oldTrustBadges, newTrustBadges);
    if (html.includes(oldTrustBadgesIV)) html = html.replace(oldTrustBadgesIV, newTrustBadges);
    
    if (html.includes(oldGuide)) html = html.replace(oldGuide, newGuide);
    if (html.includes(oldGuideIV)) html = html.replace(oldGuideIV, newGuide);

    // Remove the old inline styles for CRO block
    const inlineStyleRegex = /<style>\s*\/\* CRO Styling overrides to bypass cache \*\/[\s\S]*?<\/style>/i;
    html = html.replace(inlineStyleRegex, '');

    // Increment cache buster on stylesheet link
    html = html.replace('href="styles.css?v=2"', 'href="styles.css?v=3"');

    fs.writeFileSync(f, html, 'utf8');
    console.log("Updated HTML structure in", f);
});
