import os
import re

new_footer_html = """    <!-- Footer -->
    <footer class="footer new-footer">
        <div class="footer-container">
            <div class="footer-links">
                <ul>
                    <li><a href="index.html">HOME</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="iv-drips.html">IV DRIPS</a><i class="fa-solid fa-chevron-right"></i></li>

                    <li><a href="about.html">ABOUT</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="faqs.html">FAQS</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="index.html#reviews">REVIEWS</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="contact.html">CONTACT</a><i class="fa-solid fa-chevron-right"></i></li>
                </ul>
            </div>
            <div class="footer-disclaimer-text">
                <p>The services provided have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease. The material on this website is provided for informational purposes only and is not medical advice. Always consult your physician before beginning any treatment or therapy program. Any designations or references to therapies are for marketing purposes only and do not represent actual products.</p>
            </div>
            <div class="footer-contact">
                <div class="social-icons">
                    <a href="https://www.instagram.com/revivesanctuary?igsh=MzU3Y2sycTd3cnk0" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                </div>
                <div class="contact-info">
                    <p class="call-text">Give us a call</p>
                    <p class="call-number">+1 813-709-3698</p>
                </div>
            </div>
        </div>
    </footer>"""

html_files = ["about.html", "blog.html", "book.html", "contact.html", "faqs.html", "index.html", "iv-drips.html"]

# Regex to find the footer block
footer_regex = re.compile(r'<!-- Footer -->.*?</footer>', re.DOTALL)

for file in html_files:
    file_path = os.path.join(r"c:\Users\ASUS\Desktop\my-work\new-iv", file)
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the footer
        new_content = footer_regex.sub(new_footer_html, content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated footer in {file}")

new_css = """

/* New Footer */
.new-footer {
    background-color: #0b0f12; /* Dark theme matching reference */
    color: #ffffff;
    padding: 60px 40px;
    font-family: 'Inter', sans-serif;
    text-align: left;
}

.new-footer .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
    align-items: center;
}

.new-footer .footer-links {
    flex: 1;
    min-width: 200px;
}

.new-footer .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.new-footer .footer-links li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: none;
    padding: 6px 0;
}

.new-footer .footer-links a {
    color: #ffffff;
    text-transform: capitalize;
    font-size: 0.95rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    transition: color 0.3s;
}

.new-footer .footer-links a:hover {
    color: var(--accent);
}

.new-footer .footer-links i {
    font-size: 0.8rem;
    color: #ffffff;
    opacity: 0.7;
}

.new-footer .footer-disclaimer-text {
    flex: 2;
    min-width: 300px;
    font-size: 0.7rem;
    line-height: 1.8;
    color: #a0aab5;
    padding: 0 40px;
    text-align: left;
}

.new-footer .footer-contact {
    flex: 1;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.new-footer .footer-contact .social-icons {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
}

.new-footer .footer-contact .social-icons a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #a0aab5;
    background-color: transparent;
    color: #a0aab5;
    font-size: 1.8rem;
    transition: all 0.3s;
}

.new-footer .footer-contact .social-icons a:hover {
    border-color: #ffffff;
    color: #ffffff;
}

.new-footer .contact-info {
    text-align: center;
}

.new-footer .call-text {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 5px;
    color: #ffffff;
}

.new-footer .call-number {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 1px;
}

@media (max-width: 768px) {
    .new-footer .footer-container {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }
    .new-footer .footer-disclaimer-text {
        padding: 20px 0;
    }
    .new-footer .footer-links {
        width: 100%;
    }
    .new-footer .footer-contact {
        align-items: flex-start;
    }
    .new-footer .contact-info {
        text-align: left;
    }
}
"""

css_path = os.path.join(r"c:\Users\ASUS\Desktop\my-work\new-iv", "styles.css")
with open(css_path, 'a', encoding='utf-8') as f:
    f.write(new_css)

print("Updated styles.css with new footer CSS")
