const fs = require('fs');
const content = fs.readFileSync('src/lib/categoriesData.js', 'utf8');
const lines = content.split('\n');
let inSavouries = false;
let current = {};
for (const line of lines) {
  if (line.includes('id: "savouries"')) inSavouries = true;
  if (inSavouries && line.includes('id: "cakes"')) break;
  if (inSavouries) {
    if (line.includes('name: "')) current.name = line.trim();
    if (line.includes('image: "')) {
      current.image = line.trim();
      console.log(current.name, '|', current.image);
      current = {};
    }
  }
}
