// Clear all old story progress to fix unhandled errors
console.log('Clearing all story progress...');

// Clear all story progress entries
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key && key.startsWith('storyProgress_')) {
    console.log(`Removing: ${key}`);
    localStorage.removeItem(key);
  }
}

console.log('✅ All story progress cleared!');
console.log('Users will start fresh from the beginning.'); 