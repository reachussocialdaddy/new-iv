const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/ASUS/Desktop/my-work/new-iv/styles.css';
let content = fs.readFileSync(filePath, 'utf8');

// Force btn-book
content = content.replace(/\.btn-book \{[\s\S]*?\}/g, `
.btn-book {
    background-color: var(--accent) !important;
    border: 1px solid var(--accent);
    color: var(--primary) !important;
    padding: 10px 22px;
    font-weight: 700;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 30px;
    letter-spacing: 1px;
    display: inline-block;
}
`);

// Force btn-dark
content = content.replace(/\.btn-dark \{[\s\S]*?\}/g, `
.btn-dark {
    display: inline-block;
    background-color: var(--accent) !important;
    color: var(--primary) !important;
    padding: 16px 30px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(200, 169, 110, 0.2);
}
`);

// Force wiv-cta
content = content.replace(/\.wiv-cta \{[\s\S]*?\}/g, `
.wiv-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--accent) !important;
    color: var(--primary) !important;
    padding: 15px 34px;
    border-radius: 40px;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 1.5px;
    text-decoration: none;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 8px 25px rgba(200, 169, 110, 0.35);
}
`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('styles.css buttons fixed');
