import React from "react";
import { createPortal } from 'react-dom';
import ucheCover from "../assets/uches-journey-cover.jpg"; // Adjust path if needed

const AboutDrawer = ({ open, onClose, story }) => {
  if (!open) return null;

  // Example: Only show cover for "Uche's Journey"
  const isUche = story?.title === "Uche's Journey";

  return createPortal(
    <div className="fixed inset-0 z-[100]">
      {/* Blurred, darkened background */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[6px] transition-opacity duration-300"
        onClick={onClose}
      ></div>
      {/* Slide-in drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-md bg-gradient-to-br from-slate-900/95 to-indigo-900/95
          border-l border-cyan-400/50 shadow-2xl z-10 flex flex-col
          transition-transform duration-300
        `}
        style={{
          minWidth: '320px',
          transform: 'translateX(0)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/70 hover:bg-slate-700/80 transition-colors text-white"
          aria-label="Close"
        >
          <span style={{ fontSize: 24, fontWeight: 'bold', lineHeight: 1 }}>×</span>
        </button>
        {/* About Content */}
        <div className="p-6 md:p-8 flex flex-col gap-6 overflow-y-auto flex-1">
          {isUche && (
            <img
              src={ucheCover}
              alt="Uche's Journey Book Cover"
              className="rounded-lg shadow-md w-full mb-4 object-cover"
              style={{ maxHeight: "260px" }}
            />
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-2 text-center">{story?.title}</h2>
          <p className="text-gray-500 mb-4">by Qing the Creator</p>
          <div className="space-y-4 text-slate-300 text-base leading-relaxed text-center">
            <p>{story?.description}</p>
            <p>Uche didn't plan to go viral — he was just trying to survive.</p>
            <p>
              What started as a single tweet from a struggling builder turned into a maze of choices, contradictions, and consequences. <strong className="text-cyan-400">Pinned Tweet: The Uche Story</strong> isn't just a narrative. It's a multi-layered, choose-your-path journey through the highs, lows, and quiet truths of building in Web3.
            </p>
            <p>
              You'll follow Uche as he navigates burnouts, breakthroughs, anonymous collectives, public praise, private doubt, and the unglamorous realities behind going "full-time crypto." Every decision you make shapes the outcome — and each branch reveals a different version of what it means to create, lead, quit, or begin again in a space that never stops moving.
            </p>
            <p className="text-cyan-400 font-semibold">It's not a fantasy. It's a mirror.</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg border border-cyan-400/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span role="img" aria-label="play">▶️</span>
                Play Story
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AboutDrawer;
