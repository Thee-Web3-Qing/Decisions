// Calculate overall story progress based on story structure
export const calculateStoryProgress = (story, progress) => {
  if (!progress || !story) return 0;
  
  // Total chapters = 1 (intro) + number of decisions
  const totalChapters = 1 + story.decisions.length;
  let completedChapters = 0;
  
  // Check if intro is completed (user has moved past intro)
  if (progress.currentNode && progress.currentNode.type !== 'intro') {
    completedChapters = 1; // Intro is complete
    
    // Find current decision index
    const currentDecisionIndex = story.decisions.findIndex(d => d.id === progress.currentNode.id);
    if (currentDecisionIndex !== -1) {
      completedChapters += currentDecisionIndex; // Previous decisions are complete
      
      // Add partial progress for current decision based on paragraphs read
      if (progress.currentNode.paragraphs) {
        const paragraphProgress = (progress.currentParaIdx + 1) / progress.currentNode.paragraphs.length;
        completedChapters += paragraphProgress;
      }
    }
  } else if (progress.currentNode && progress.currentNode.type === 'intro') {
    // User is still in intro, calculate intro progress
    if (progress.currentNode.paragraphs) {
      const introProgress = (progress.currentParaIdx + 1) / progress.currentNode.paragraphs.length;
      completedChapters = introProgress;
    }
  }
  
  return Math.min(100, (completedChapters / totalChapters) * 100);
};

// Get story progress from localStorage
export const getStoryProgress = (storyId) => {
  const raw = localStorage.getItem(`storyProgress_${storyId}`);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

// Calculate progress for current story session (used in StoryPlay)
export const calculateCurrentSessionProgress = (currentStory, currentNode, currentParaIdx) => {
  if (!currentStory) return 0;
  
  // Total chapters = 1 (intro) + number of decisions
  const totalChapters = 1 + currentStory.decisions.length;
  let completedChapters = 0;
  
  // Check if intro is completed (user has moved past intro)
  if (currentNode.type !== 'intro') {
    completedChapters = 1; // Intro is complete
    
    // Find current decision index
    const currentDecisionIndex = currentStory.decisions.findIndex(d => d.id === currentNode.id);
    if (currentDecisionIndex !== -1) {
      completedChapters += currentDecisionIndex; // Previous decisions are complete
      
      // Add partial progress for current decision based on paragraphs read
      if (currentNode.paragraphs) {
        const paragraphProgress = (currentParaIdx + 1) / currentNode.paragraphs.length;
        completedChapters += paragraphProgress;
      }
    }
  } else if (currentNode.type === 'intro') {
    // User is still in intro, calculate intro progress
    if (currentNode.paragraphs) {
      const introProgress = (currentParaIdx + 1) / currentNode.paragraphs.length;
      completedChapters = introProgress;
    }
  }
  
  return Math.min(100, (completedChapters / totalChapters) * 100);
};

// Helper: Recursively collect all unique node IDs and paragraph counts in the story
function collectAllParagraphs(story) {
  const visited = new Set();
  let totalParagraphs = 0;

  // Collect intro
  if (story.intro && story.intro.paragraphs) {
    totalParagraphs += story.intro.paragraphs.length;
    visited.add('intro');
  }

  // Collect all decisions
  if (story.decisions) {
    for (const node of story.decisions) {
      if (node.id && node.paragraphs) {
        totalParagraphs += node.paragraphs.length;
        visited.add(node.id);
      }
    }
  }

  // Collect all endings (if present)
  if (story.endings) {
    for (const ending of story.endings) {
      if (ending.id && ending.paragraphs) {
        totalParagraphs += ending.paragraphs.length;
        visited.add(ending.id);
      }
    }
  }

  return totalParagraphs;
}

// Calculate progress based on unique paragraphs visited
export const calculateOverallParagraphProgress = (story, progress) => {
  if (!progress || !story) return 0;
  // progress.visitedNodes: array of { nodeId, paraIdx } objects
  // If not present, fallback to currentNode/currentParaIdx only
  let visited = new Set();
  let visitedParagraphs = 0;

  if (progress.visitedNodes && Array.isArray(progress.visitedNodes)) {
    for (const v of progress.visitedNodes) {
      visited.add(`${v.nodeId}_${v.paraIdx}`);
    }
    visitedParagraphs = visited.size;
  } else if (progress.currentNode && typeof progress.currentParaIdx === 'number') {
    // Fallback: only current node/para
    visitedParagraphs = 1;
  }

  const totalParagraphs = collectAllParagraphs(story);
  if (totalParagraphs === 0) return 0;
  return Math.min(100, (visitedParagraphs / totalParagraphs) * 100);
}; 