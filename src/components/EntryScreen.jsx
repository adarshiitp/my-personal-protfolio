import React, { useEffect, useState } from "react";

export default function EntryScreen({ onFinish }) {
  const [startAnim, setStartAnim] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText = "Hello World!";

  useEffect(() => {
    setStartAnim(true);

    let i = 0;
    const typer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typer);
        setTimeout(() => onFinish(), 800);
      }
    }, 110);

    return () => clearInterval(typer);
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

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 26 }).map((_, i) => (
          <div
            key={i}
            className="line-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 3}s`,
              "--rot": `${Math.random() * 160 - 80}deg`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 22 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-[110px] bg-white/10 animate-line"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 3}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="absolute text-[1.55rem] tracking-[0.32em] font-semibold text-white">
        {typedText}
        <span className="opacity-60 animate-pulse">▮</span>
      </div>
    </div>
  );
}
