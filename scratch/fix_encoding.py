import os
import re

def fix_encoding(directory):
    replacements = {
        '—': '&mdash;',
        '’': '&rsquo;',
        '‘': '&lsquo;',
        '”': '&rdquo;',
        '“': '&ldquo;',
        '…': '&hellip;',
        '–': '&ndash;'
    }
    
    for filename in os.listdir(directory):
        if filename.endswith(".html"):
            filepath = os.path.join(directory, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for char, entity in replacements.items():
                new_content = new_content.replace(char, entity)
            
            if new_content != content:
                print(f"Fixed encoding in {filename}")
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

if __name__ == "__main__":
    fix_encoding(".")
