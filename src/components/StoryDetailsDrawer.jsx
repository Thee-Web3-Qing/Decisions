import React from 'react';

const StoryDetailsDrawer = ({ open, onClose, data, onPlay }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-gradient-to-br from-slate-900/95 to-indigo-900/95 border-l border-cyan-400/50 shadow-2xl h-full flex flex-col animate-slide-in-right">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/70 hover:bg-slate-700/80 transition-colors text-white"
          onClick={onClose}
          aria-label="Close"
        >
          <span style={{ fontSize: 24, fontWeight: 'bold', lineHeight: 1 }}>×</span>
        </button>
        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col gap-6 overflow-y-auto flex-1 items-center justify-center text-center">
          {data?.coverImage && (
            <img
              src={data.coverImage}
              alt={data.title}
              className="rounded-xl shadow-lg w-full max-w-xs max-h-56 object-cover mx-auto mt-2 mb-6 border border-cyan-400/30"
            />
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">{data?.title}</h2>
          <p className="text-gray-400 mb-2 font-medium">by Qing the Creator</p>
          <div className="space-y-4 text-slate-200 text-base leading-relaxed mb-4">
            <p>{data?.description}</p>
          </div>
          <button
            className="mt-4 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={onPlay}
          >
            <span className="flex items-center gap-2 justify-center">
              <span role="img" aria-label="play">▶️</span>
              Play Story
            </span>
          </button>
        </div>
      </div>
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>
    </div>
  );
};

export default StoryDetailsDrawer;
