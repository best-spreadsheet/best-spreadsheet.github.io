import re

content = open(r'D:\most\index.md', 'r', encoding='utf-8').read()

# Remove all icon lines from frontmatter
content = re.sub(r'  - icon: [^\n]*\n', '  - title:', content)

# Fix double title
content = content.replace('  - title:\n    title:', '  - title:')

open(r'D:\most\index.md', 'w', encoding='utf-8').write(content)
print('Done. Icons removed from frontmatter.')

# Verify
lines = open(r'D:\most\index.md', 'r', encoding='utf-8').readlines()
for i in range(13, 33):
    print(f'{i+1}: {repr(lines[i])}')
