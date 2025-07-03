import fs from 'fs';

// Read the stories file
const storiesContent = fs.readFileSync('./src/data/stories.js', 'utf8');

// Function to fix ending references
function fixEndingReferences(content) {
  // Replace all ending: true with ending: "ID" where ID matches the choice id
  let fixedContent = content;
  
  // Find all choice objects with ending: true and replace them
  const choicePattern = /(\s*{\s*id:\s*"([^"]+)",\s*text:\s*"[^"]+",\s*)ending:\s*true(\s*})/g;
  
  fixedContent = fixedContent.replace(choicePattern, (match, prefix, choiceId, suffix) => {
    return `${prefix}ending: "${choiceId}"${suffix}`;
  });
  
  return fixedContent;
}

// Apply the fix
const fixedContent = fixEndingReferences(storiesContent);

// Write back to file
fs.writeFileSync('./src/data/stories.js', fixedContent, 'utf8');

console.log('✅ Fixed all ending references in stories.js');
console.log('All ending: true have been changed to ending: "ID" format'); 