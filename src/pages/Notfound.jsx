import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="text-center">
        {/* Animated 404 Text */}
        <h1 className="text-9xl font-black text-white tracking-widest animate-pulse">
          404
        </h1>
        
        {/* Glassmorphic Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>

        <div className="mt-8">
          <p className="text-2xl font-semibold text-slate-300 md:text-3xl">
            Looks like you're lost.
          </p>
          <p className="mt-4 text-slate-400">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/"
              className="px-8 py-3 font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-500/30"
            >
              Back to Home
            </a>
            <button 
              onClick={() => window.history.back()}
              className="px-8 py-3 font-semibold rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition-all"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-indigo-900/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-blue-900/20 blur-[120px]"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;