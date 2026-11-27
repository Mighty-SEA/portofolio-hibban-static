import * as React from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  shape: "circle" | "square" | "star";
  angle: number;
  distance: number;
  rot: number;
}

interface ShardOffset {
  x: number;
  y: number;
  rot: number;
}

export function PuzzleAvatar() {
  const [isShattered, setIsShattered] = React.useState(false);
  const [shardOffsets, setShardOffsets] = React.useState<ShardOffset[]>(
    Array.from({ length: 12 }, () => ({ x: 0, y: 0, rot: 0 }))
  );
  const [particles, setParticles] = React.useState<Particle[]>([]);
  const particleIdRef = React.useRef(0);

  const triggerExplosion = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const colors = ["#FACC00", "#FF4D50", "#38BDF8", "#A78BFA", "#000000", "#00D696"];
    const shapes: ("circle" | "square" | "star")[] = ["circle", "square", "star"];

    // 1. Generate 24 burst particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < 24; i++) {
      newParticles.push({
        id: particleIdRef.current++,
        x: clickX,
        y: clickY,
        color: colors[Math.floor(Math.random() * colors.length)] || "#FACC00",
        size: Math.floor(Math.random() * 16) + 12,
        shape: shapes[Math.floor(Math.random() * shapes.length)] || "circle",
        angle: Math.random() * Math.PI * 2,
        distance: Math.floor(Math.random() * 160) + 110,
        rot: Math.random() * 360,
      });
    }
    setParticles(newParticles);

    // 2. Shatter 12 puzzle pieces with random scatter
    setShardOffsets(
      Array.from({ length: 12 }, () => ({
        x: (Math.random() - 0.5) * 180,
        y: (Math.random() - 0.5) * 180,
        rot: (Math.random() - 0.5) * 70,
      }))
    );
    setIsShattered(true);

    // 3. Reassemble puzzle back to original after 1s
    setTimeout(() => {
      setIsShattered(false);
    }, 1000);

    // Clean up particles
    setTimeout(() => {
      setParticles([]);
    }, 800);
  };

  return (
    <div className="relative w-64 sm:w-72 lg:w-80 aspect-[2/3] select-none">
      {/* Background brutal card patterns */}
      <div className="absolute inset-0 bg-black rounded-3xl translate-x-4 translate-y-4" />
      <div className="absolute inset-0 bg-neo-accent border-3 border-black rounded-3xl -rotate-3" />

      {/* Main Avatar Card (Clickable) */}
      <div
        onClick={triggerExplosion}
        className={`absolute inset-0 bg-white border-3 border-black rounded-3xl flex flex-col justify-between rotate-2 hover:rotate-0 transition-all duration-300 cursor-pointer select-none overflow-hidden z-30 group p-2 ${
          isShattered ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
        }`}
        title="Klik foto untuk memecahkan puzzle!"
      >
        {/* Yellow Portrait Container */}
        <div className="relative w-full h-full bg-[#FFD23F] border-2 border-black rounded-2xl overflow-hidden flex items-end justify-center">
          <img
            src="/foto-profil.webp"
            alt="Foto Hibban Habiburrahman"
            width={320}
            height={480}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-top pointer-events-none group-hover:scale-102 transition-transform duration-300"
          />

          {/* Click Tag */}
          <div className="absolute top-2.5 right-2.5 bg-white border-2 border-black px-2 py-0.5 rounded-md shadow-neo-sm text-[10px] font-display font-black uppercase text-black animate-bounce pointer-events-none">
            <span data-lang-id>Klik Foto!</span>
            <span data-lang-en>Click Photo!</span>
          </div>
        </div>

        {/* Overlay Badge */}
        <div className="absolute bottom-4 left-4 right-4 bg-white border-3 border-black p-2.5 sm:p-3 rounded-xl shadow-neo-sm pointer-events-none">
          <div className="font-display font-black text-center text-xs sm:text-sm tracking-wider uppercase text-black">
            HIBBAN HABIBURRAHMAN
          </div>
          <div className="text-center text-[10px] sm:text-xs font-bold text-gray-700 uppercase mt-0.5 font-display">
            FULL-STACK DEVELOPER
          </div>
        </div>
      </div>

      {/* Shattered White Pieces */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 overflow-visible pointer-events-none rotate-2 z-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="bg-white border-2 border-black rounded-xl p-0.5 shadow-neo-sm transition-all duration-500 ease-out overflow-hidden"
            style={{
              opacity: isShattered ? 1 : 0,
              transform: isShattered
                ? `translate3d(${shardOffsets[i]?.x || 0}px, ${shardOffsets[i]?.y || 0}px, 0px) rotate(${shardOffsets[i]?.rot || 0}deg) scale(0.9)`
                : "translate3d(0px, 0px, 0px) rotate(0deg) scale(1)",
            }}
          >
            {/* Image slice inside the puzzle shard */}
            <div
              className="w-full h-full bg-no-repeat rounded-lg"
              style={{
                backgroundImage: "url(/foto-profil.webp)",
                backgroundSize: "300% 400%",
                backgroundPosition: `${(i % 3) * 50}% ${Math.floor(i / 3) * 33.3}%`,
                height: "100%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Particle Burst Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-visible z-50">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute animate-particle-burst border-2 border-black flex items-center justify-center pointer-events-none"
            style={
              {
                left: `${p.x}px`,
                top: `${p.y}px`,
                backgroundColor: p.color,
                width: `${p.size}px`,
                height: `${p.size}px`,
                "--tx": `${Math.cos(p.angle) * p.distance}px`,
                "--ty": `${Math.sin(p.angle) * p.distance}px`,
                "--rot": `${p.rot}deg`,
                borderRadius:
                  p.shape === "circle" ? "50%" : p.shape === "square" ? "4px" : "0%",
              } as React.CSSProperties
            }
          >
            {p.shape === "star" && (
              <svg
                className="w-full h-full text-black p-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

