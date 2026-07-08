import re

content = open(r'D:\most\index.md', 'r', encoding='utf-8').read()

# Remove ALL emoji characters (Unicode ranges for emoji)
# This covers flags, symbols, objects, etc.
emoji_pattern = re.compile(
    "["
    "\U0001F600-\U0001F64F"  # emoticons
    "\U0001F300-\U0001F5FF"  # symbols & pictographs
    "\U0001F680-\U0001F6FF"  # transport & map symbols
    "\U0001F1E0-\U0001F1FF"  # flags (regional indicators)
    "\U00002702-\U000027B0"  # dingbats
    "\U000024C2-\U0001F251"  # enclosed characters
    "\U0001f926-\U0001f937"  # more emoticons
    "\U00010000-\U0010ffff"  # supplementary
    "\u2640-\u2642"
    "\u2600-\u2B55"
    "\u200d"  # zero width joiner
    "\u23cf"
    "\u23e9"
    "\u231a"
    "\ufe0f"  # variation selectors
    "\u3030"
    "]+",
    flags=re.UNICODE
)

content = emoji_pattern.sub('', content)

# Clean up extra spaces left by removed emojis
content = re.sub(r'  +', ' ', content)

open(r'D:\most\index.md', 'w', encoding='utf-8').write(content)
print('All emojis removed.')

# Also check custom.css for emojis
css = open(r'D:\most\.vitepress\theme\custom.css', 'r', encoding='utf-8').read()
css = emoji_pattern.sub('', css)
css = re.sub(r'  +', ' ', css)
open(r'D:\most\.vitepress\theme\custom.css', 'w', encoding='utf-8').write(css)
print('CSS emojis removed too.')

# Verify no emojis remain
remaining = emoji_pattern.findall(content)
print(f'Remaining emojis in index.md: {len(remaining)}')
remaining_css = emoji_pattern.findall(css)
print(f'Remaining emojis in custom.css: {len(remaining_css)}')

# Show line 33 area
lines = open(r'D:\most\index.md', 'r', encoding='utf-8').readlines()
for i in range(28, 40):
    print(f'{i+1}: {repr(lines[i])}')
