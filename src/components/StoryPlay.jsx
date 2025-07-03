import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { stories } from '../data/stories';
import AboutDrawer from './AboutDrawer';

const StoryPlay = ({ storyId, onClose }) => {
  const { isConnected } = useAccount();

  const [currentStory, setCurrentStory] = useState(null);
  const [showAbout, setShowAbout] = useState(true);
  const [storyPath, setStoryPath] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [atDecision, setAtDecision] = useState(false);
  const [userChoices, setUserChoices] = useState([]);
  const [showEnding, setShowEnding] = useState(false);
  const [ending, setEnding] = useState(null);

  useEffect(() => {
    const story = stories.find(s => s.id === storyId);
    if (!story) {
      onClose && onClose();
      return;
    }
    setCurrentStory(story);
    setShowAbout(true);
    setStoryPath([{ id: 'intro', text: story.intro.text, choices: story.intro.choices }]);
    setCurrentIndex(0);
    setAtDecision(false);
    setUserChoices([]);
    setShowEnding(false);
    setEnding(null);
  }, [storyId, onClose]);

  // Advance to next paragraph or decision
  const handleNext = () => {
    const currentPara = storyPath[currentIndex];
    if (currentPara.id === 'intro') {
      setAtDecision(true);
    } else {
      setAtDecision(false);
      setCurrentIndex(idx => idx + 1);
    }
  };

  // Handle making a choice at a decision point
  const handleChoice = (choice) => {
    setUserChoices(prev => [...prev, { decisionId: storyPath[currentIndex].id, choiceId: choice.id }]);
    if (choice.ending) {
      setShowEnding(true);
      const endingObj = currentStory.endings?.find(e => e.requirements.some(r => r.decisionId === storyPath[currentIndex].id && r.choiceId === choice.id));
      setEnding(endingObj || null);
    } else if (choice.nextDecision) {
      const nextDecision = currentStory.decisions.find(d => d.id === choice.nextDecision);
      if (nextDecision) {
        setStoryPath(prev => [...prev, { ...nextDecision }]);
        setCurrentIndex(idx => idx + 1);
        setAtDecision(false);
      }
    }
  };

  if (showAbout && currentStory) {
    return (
      <AboutDrawer
        open={showAbout}
        onClose={onClose}
        onPlay={() => setShowAbout(false)}
      />
    );
  }

  // --- Story Play UI ---
  if (!currentStory) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-xl text-slate-400">Loading story...</div>
      </div>
    );
  }

  if (showEnding && ending) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 rounded-2xl shadow-xl bg-gradient-to-br from-slate-900/80 to-indigo-900/80 border border-indigo-700">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent text-center">{ending.title}</h2>
        <p className="text-lg text-slate-200 mb-6 text-center">{ending.description}</p>
        {ending.image && (
          <img src={ending.image} alt={ending.title} className="mx-auto rounded-lg shadow-lg mb-6 max-h-60 object-cover" />
        )}
        <div className="flex flex-col items-center gap-2">
          <button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition"
            onClick={onClose}
          >
            Back to Library
          </button>
        </div>
      </div>
    );
  }

  const currentPara = storyPath[currentIndex];

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-2xl shadow-xl bg-gradient-to-br from-slate-900/80 to-indigo-900/80 border border-indigo-700">
      <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent text-center">{currentStory.title}</h1>
      <div className="mb-8 p-6 rounded-xl bg-black/20 border border-cyan-400/50 shadow-lg shadow-cyan-400/20 backdrop-blur-sm">
        <p className="text-lg text-slate-200 leading-relaxed text-center min-h-[120px] transition-all duration-300">
          {currentPara.text}
        </p>
      </div>
      {atDecision ? (
        <div className="flex flex-col gap-4 items-center">
          {currentPara.choices.map(choice => (
            <button
              key={choice.id}
              className="w-full max-w-xs px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 hover:from-indigo-500 hover:to-blue-500 transition text-lg border border-cyan-400/30"
              onClick={() => handleChoice(choice)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition text-lg border border-cyan-400/30"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default StoryPlay;