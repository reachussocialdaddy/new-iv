const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/ASUS/Desktop/my-work/new-iv/styles.css';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Force the :root to be 100% Option A
const newRoot = `:root {
    --primary: #0B3D2E; /* Deep Forest Green */
    --primary-dark: #072C21;
    --primary-light: #1A6B4C;
    --accent: #C8A96E; /* Warm Gold */
    --accent-light: #F5F0E8; /* Warm Cream */
    --white: #FFFFFF;
    --bg-light: #F5F0E8;
    --text-dark: #333333;
    --text-light: #FFFFFF;
}`;
content = content.replace(/:root\s*\{[\s\S]*?\}/, newRoot);

// 2. Force the .btn-book to GOLD BACKGROUND / DARK TEXT
content = content.replace(/\.btn-book\s*\{[\s\S]*?\}/g, `
.btn-book {
    background-color: var(--accent) !important;
    border: 1px solid var(--accent) !important;
    color: var(--primary) !important;
    padding: 10px 22px;
    font-weight: 700;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 30px;
    letter-spacing: 1px;
    display: inline-block;
    text-decoration: none;
}
.btn-book:hover {
    background-color: var(--primary-light) !important;
    border-color: var(--primary-light) !important;
    color: var(--white) !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}`);

// 3. Force .btn-dark to GOLD BACKGROUND / DARK TEXT
content = content.replace(/\.btn-dark\s*\{[\s\S]*?\}/g, `
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
    text-decoration: none;
}
.btn-dark:hover {
    background-color: var(--primary-light) !important;
    color: var(--white) !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}`);

// 4. Force .wiv-cta to GOLD BACKGROUND / DARK TEXT
content = content.replace(/\.wiv-cta\s*\{[\s\S]*?\}/g, `
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
.wiv-cta:hover {
    background: var(--primary-light) !important;
    transform: translateY(-3px);
    box-shadow: 0 14px 35px rgba(11, 61, 46, 0.25);
    color: #fff !important;
}`);

// 5. Fix Footer Links Overlap
content = content.replace(/\.footer-links\s*\{[\s\S]*?\}/g, `
.footer-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-bottom: 40px;
}
`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('styles.css fixed and stabilized.');
