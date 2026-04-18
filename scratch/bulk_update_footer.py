import os
import glob
import re

new_footer_html = """    <!-- Footer -->
    <footer class="footer new-footer">
        <div class="footer-container">
            <div class="footer-links">
                <ul>
                    <li><a href="index.html">HOME</a><i class="fa-solid fa-chevron-right"></i></li>
                    <li><a href="services.html">SERVICES</a><i class="fa-solid fa-chevron-right"></i></li>
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
                    <a href="https://www.instagram.com/reviveivdrip_/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=61570785538852" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.tiktok.com/@revive.iv.drip?_r=1&_t=ZS-95Y6xC3RF0z" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
                </div>
                <div class="contact-info">
                    <p class="call-text">Give us a call</p>
                    <p class="call-number">+1 813-709-3698</p>
                </div>
            </div>
        </div>
    </footer>
    <div class="footer-bottom-bar">
        <div class="footer-bottom-container">
            <p>&copy; 2026 Revive IV Hydration || Drip & CMD websites</p>
        </div>
    </div>"""

files = glob.glob(r"c:\Users\ASUS\Desktop\my-work\new-iv\*.html")
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if 'footer class="footer new-footer"' in content:
        print(f"Skipping {os.path.basename(f)}, already has new footer.")
        continue
    
    pattern = r'<footer class="footer[^>]*>.*?<div class="footer-bottom-bar">\s*<div class="footer-bottom-container">\s*<p>.*?</p>\s*</div>\s*</div>'
    
    if re.search(pattern, content, re.DOTALL):
        new_content = re.sub(pattern, new_footer_html, content, flags=re.DOTALL)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {os.path.basename(f)}")
    else:
        print(f"Could not find old footer pattern in {os.path.basename(f)}")
