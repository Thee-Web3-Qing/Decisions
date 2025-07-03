// Simple story validation script
const fs = require('fs');

// Read the stories file as text to avoid image import issues
const storiesContent = fs.readFileSync('./src/data/stories.js', 'utf8');

// Extract the stories array by removing the import and export
const storiesText = storiesContent.replace(/import.*?from.*?;?\n?/g, '');
const storiesText2 = storiesText.replace(/export const stories = /, 'const stories = ').replace(/coverImage: pinnedTweetCover,/g, 'coverImage: null,');

// Evaluate the stories (this is safe since we control the content)
const stories = eval(storiesText2 + '; stories;');

console.log('Story validation results:');
console.log('========================');

const story = stories[0];
console.log('Story title:', story.title);
console.log('Total decisions:', story.decisions.length);
console.log('Total endings:', story.endings ? story.endings.length : 0);

// Check for missing decision nodes
const allDecisionIds = story.decisions.map(d => d.id);
const allChoiceIds = [];

story.intro.choices.forEach(choice => {
  if (choice.nextDecision) allChoiceIds.push(choice.nextDecision);
});

story.decisions.forEach(decision => {
  if (decision.choices) {
    decision.choices.forEach(choice => {
      if (choice.nextDecision) allChoiceIds.push(choice.nextDecision);
    });
  }
});

const missingDecisions = allChoiceIds.filter(id => !allDecisionIds.includes(id));
if (missingDecisions.length > 0) {
  console.log('❌ Missing decision nodes:', missingDecisions);
} else {
  console.log('✅ All decision nodes exist');
}

// Check for nodes with empty choices that should have ending: true
const nodesWithEmptyChoices = story.decisions.filter(d => 
  d.choices && d.choices.length === 0 && !d.ending
);

if (nodesWithEmptyChoices.length > 0) {
  console.log('❌ Nodes with empty choices but no ending:', nodesWithEmptyChoices.map(n => n.id));
} else {
  console.log('✅ All nodes with empty choices have ending: true');
}

console.log('✅ Story structure validation complete'); 