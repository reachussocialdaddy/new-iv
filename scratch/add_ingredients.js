const fs = require('fs');

const data = {
  "Myers Cocktail": "Vitamin C, Vitamin B1, B2, B3, B5, B6, B12, Magnesium Chloride, Calcium Gluconate, IV Base Fluid",
  "Brain Focus": "Vitamin B Complex, Vitamin B12, Magnesium Chloride, Alpha Lipoic Acid, Acetyl-L-Carnitine, Taurine, Glutathione, IV Fluids",
  "Revive Calm": "Magnesium Sulfate (High Dose), Vitamin B Complex, Vitamin C, Taurine, Glycine, Glutathione, IV Fluids",
  "Revive Defense": "High Dose Vitamin C, Zinc Sulfate, Vitamin B Complex, Vitamin B12, Glutathione, Selenium, Alpha Lipoic Acid, IV Fluids",
  "Beautify": "Glutathione (High Dose), Vitamin C, Biotin, Vitamin B Complex, Zinc, Alpha Lipoic Acid, Collagen-support nutrients, IV Fluids",
  "Liquid Gold": "Vitamin B Complex, Vitamin B12, Vitamin C, Magnesium Chloride, Calcium Gluconate, Zinc, Electrolytes, Anti-nausea (opt), Anti-inflammatory (opt), IV Fluids",
  "Revive Recovery": "Electrolytes, Magnesium, Vitamin B Complex, Vitamin B12, Vitamin C, Amino Acids, Taurine, IV Fluids"
};

const formatIngredients = (ingredients) => {
    return `<div class="ingredients-list" style="margin: 15px 0 20px 0; padding-top: 15px; border-top: 1px dashed rgba(0,0,0,0.1); text-align: left;">
        <p style="font-size: 0.75rem; font-weight: 700; color: var(--primary); margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Key Ingredients:</p>
        <p style="font-size: 0.85rem; color: #64748b; line-height: 1.5; margin: 0;">${ingredients}</p>
    </div>`;
};

const insertIngredients = (content) => {
    let replacedContent = content;
    
    // Find each product description and append the ingredients HTML before the booking button
    for (const [dripName, ingredients] of Object.entries(data)) {
        // Regex to find the <p> containing the description, up to the <a href="...">Book
        // Wait, different cards have different descriptions. We can match by standard structure.
        
        // Find: <h3 ...>Myers Cocktail</h3>
        // <p class="price"...</p>
        // <p style="color: #64748b;">(Description)</p>
        // <a href="..." class="btn-dark
        
        // Build regex for this specific drip name
        const regexStr = `(<h3[^>]*>${dripName}<\\/h3>\\s*<p class="price"[^>]*>.*?<\\/p>\\s*<p style="color: #64748b[^>]*>.*?<\\/p>)\\s*(<a href="[^"]*" class="btn-dark|<!-- BUTTON -->|<div class="urgency-badge")`;
        const r = new RegExp(regexStr, 'gi');
        
        replacedContent = replacedContent.replace(r, (match, p1, p2) => {
            // Only inject if it hasn't been injected yet
            if (p1.includes("Key Ingredients:")) return match;
            return `${p1}\n${formatIngredients(ingredients)}\n                    ${p2}`;
        });
    }
    return replacedContent;
};

// Process both files
['c:\\Users\\ASUS\\Desktop\\my-work\\new-iv\\iv-drips.html', 'c:\\Users\\ASUS\\Desktop\\my-work\\new-iv\\index.html'].forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        let newContent = insertIngredients(content);
        if (content !== newContent) {
            fs.writeFileSync(f, newContent, 'utf8');
            console.log(`Updated ingredients in ${f}`);
        } else {
            console.log(`No updates made in ${f} (maybe already added or regex failed)`);
        }
    }
});
