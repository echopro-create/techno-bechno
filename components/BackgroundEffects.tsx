export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] md:top-[-20%] left-[0%] md:left-[-10%] w-[60%] md:w-[50%] h-[40%] md:h-[50%] rounded-full bg-indigo-900/15 md:bg-indigo-900/20 blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[-10%] md:bottom-[-20%] right-[0%] md:right-[-10%] w-[60%] md:w-[50%] h-[40%] md:h-[50%] rounded-full bg-fuchsia-900/15 md:bg-fuchsia-900/20 blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      <div className="absolute top-[30%] left-[30%] md:left-[50%] w-[50%] md:w-[40%] h-[30%] md:h-[40%] rounded-full bg-blue-900/15 md:bg-blue-900/20 blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
    </div>
  );
}
