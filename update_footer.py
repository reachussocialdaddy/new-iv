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
                    <li><a href="index.html#faqs">FAQS</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="index.html#reviews">REVIEWS</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="contact.html">CONTACT</a><i class="fa-solid fa-chevron-right"></i></li>
                </ul>
            </div>
            <div class="footer-disclaimer-text">
                <p>The services provided have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease. The material on this website is provided for informational purposes only and is not medical advice. Always consult your physician before beginning any treatment or therapy program. Any designations or references to therapies are for marketing purposes only and do not represent actual products.</p>
            </div>
            <div class="footer-contact">
                <div class="social-icons">
                    <a href="https://www.instagram.com/reviveivdrip_/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=61570785538852" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.tiktok.com/@revive.iv.drip?_r=1&_t=ZS-95Y6xC3RF0z" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
                </div>
                <div class="contact-info">
                    <p class="call-text">Give us a call</p>
                    <p class="call-number">+1 (646) 709-3698</p>
                </div>
            </div>
        </div>
    </footer>"""

html_files = ["about.html", "blog.html", "book.html", "contact.html", "faq.html", "index.html", "iv-drips.html", "pricing.html"]

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

print("Footer update complete.")
