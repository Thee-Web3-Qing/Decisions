import { useMiniKit, useAddFrame, useNotification, useOpenUrl, useClose, usePrimaryButton, useViewProfile, useAuthenticate } from '@coinbase/onchainkit/minikit';

// Custom hook for story progress tracking
export const useStoryProgress = () => {
  const { context, updateClientContext } = useMiniKit();
  
  const saveProgress = (storyId, progress) => {
    updateClientContext({
      storyProgress: {
        ...context?.storyProgress,
        [storyId]: progress
      }
    });
  };
  
  const getProgress = (storyId) => {
    return context?.storyProgress?.[storyId] || null;
  };
  
  return { saveProgress, getProgress, context };
};

// Custom hook for story choice recording
export const useStoryChoices = () => {
  const { context, updateClientContext } = useMiniKit();
  
  const recordChoice = (storyId, decisionId, choiceId) => {
    const newChoice = {
      storyId,
      decisionId,
      choiceId,
      timestamp: Date.now()
    };
    
    updateClientContext({
      storyChoices: {
        ...context?.storyChoices,
        [storyId]: [...(context?.storyChoices?.[storyId] || []), newChoice]
      }
    });
    
    return newChoice;
  };
  
  const getChoices = (storyId) => {
    return context?.storyChoices?.[storyId] || [];
  };
  
  return { recordChoice, getChoices };
};

// Custom hook for story sharing
export const useStorySharing = () => {
  const addFrame = useAddFrame();
  const sendNotification = useNotification();
  const openUrl = useOpenUrl();
  
  const shareStory = async (storyId, endingId, storyPath) => {
    try {
      // Add frame to user's list
      const frameResult = await addFrame();
      
      if (frameResult) {
        // Send notification about the story
        sendNotification({
          title: 'New Story Ending Unlocked!',
          body: `Check out your unique ending in Web3 Life: ${endingId}`
        });
        
        // Open story URL
        openUrl(`https://web3-life.app/story/${storyId}/ending/${endingId}`);
        
        return frameResult;
      }
    } catch (error) {
      console.error('Failed to share story:', error);
    }
  };
  
  return { shareStory, addFrame, sendNotification, openUrl };
};

// Custom hook for story achievements
export const useStoryAchievements = () => {
  const { context, updateClientContext } = useMiniKit();
  const sendNotification = useNotification();
  
  const unlockAchievement = (achievementId, achievementName) => {
    const currentAchievements = context?.achievements || [];
    
    if (!currentAchievements.includes(achievementId)) {
      updateClientContext({
        achievements: [...currentAchievements, achievementId]
      });
      
      // Send notification
      sendNotification({
        title: 'Achievement Unlocked!',
        body: `Congratulations! You've unlocked: ${achievementName}`
      });
      
      return true;
    }
    
    return false;
  };
  
  const getAchievements = () => {
    return context?.achievements || [];
  };
  
  return { unlockAchievement, getAchievements };
};

// Custom hook for story navigation
export const useStoryNavigation = () => {
  const close = useClose();
  const openUrl = useOpenUrl();
  const viewProfile = useViewProfile();
  
  const navigateToStory = (storyId) => {
    openUrl(`/story/${storyId}/play`);
  };
  
  const navigateToProfile = () => {
    openUrl('/profile');
  };
  
  const closeStory = () => {
    close();
  };
  
  return { navigateToStory, navigateToProfile, closeStory, close, openUrl, viewProfile };
};

// Custom hook for story authentication
export const useStoryAuth = () => {
  const { signIn } = useAuthenticate();
  
  const authenticateUser = async () => {
    try {
      const result = await signIn({
        domain: 'web3-life.app',
        siweUri: 'https://web3-life.app/login'
      });
      
      if (result) {
        console.log('User authenticated:', result);
        return result;
      }
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };
  
  return { authenticateUser, signIn };
};

// Export all MiniKit hooks for convenience
export {
  useMiniKit,
  useAddFrame,
  useNotification,
  useOpenUrl,
  useClose,
  usePrimaryButton,
  useViewProfile,
  useAuthenticate
}; 