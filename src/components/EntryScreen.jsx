import React, { useEffect, useState } from "react";

export default function EntryScreen({ onFinish }) {
  const [startAnim, setStartAnim] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setStartAnim(true);

    const audio = new Audio("/welcome.mp3");
    audio.volume = 0; 
    audio.playbackRate = 2;


    audio.play().catch(() => {});


    setTimeout(() => {
      let v = 0;
      const interval = setInterval(() => {
        if (v < 0.55) {
          v += 0.05;
          audio.volume = v;
        } else {
          clearInterval(interval);
        }
      }, 120);
    }, 300);

    setTimeout(() => setShowWelcome(true), 2700);
    const end = setTimeout(() => onFinish(), 3500);

    return () => clearTimeout(end);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#020617] z-[999] overflow-hidden">
      <svg width="700" height="700" viewBox="0 0 700 700" fill="none">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <circle
            key={i}
            cx="350"
            cy="350"
            r={60 + i * 48}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            className={`entry-circle ${startAnim ? "animate" : ""}`}
            style={{
              animationDelay: `${i * 0.45}s`,
              animationDuration: "3.6s",
            }}
          />
        ))}
      </svg>

      {showWelcome && (
        <div className="absolute text-[1.55rem] tracking-[0.32em] font-semibold text-white animate-welcome">
          Hello World!
        </div>
      )}
    </div>
  );
}
