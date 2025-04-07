'use client'
import { useState, useEffect, useRef } from "react";

interface Ripple {
  x: number
  y: number
  time: Date
  id: String
}

export default function HoverEffect2() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [ripples, setRipples] : [Array<Ripple>, Function]= useState([]);
  const [closestCells, setClosestCells] = useState(new Set());
  const canvasRef = useRef(null);

  const crossInterval = 80;
  const animationTime = 300;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns = Math.floor(windowSize.width / crossInterval);
  const rows = Math.floor(windowSize.height / crossInterval);
  const area = columns * rows;

  const [mousePos, setMousePos] = useState({ x: -1, y: -1 });
  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleClick = (e:MouseEvent) => {
      requestAnimationFrame(() => {
        const clickX = e.clientX;
        const clickY = e.clientY;
        const newRipple = {
          x: clickX,
          y: clickY,
          time: Date.now(),
          id: Date.now() + Math.random(),
        };

        const newClosestIndex = getClosestIndex(clickX, clickY);
        setClosestCells((prev) => {
          const updated = new Set(prev);
          updated.add(newClosestIndex);
          return updated;
        });
        // @ts-ignore
        setRipples((prev:Set<Ripple>) => [...prev, newRipple]);
      });
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [columns, rows]);

  function getClosestIndex(clickX:number, clickY:number) {
    let minDist = Infinity;
    let closestIndex = -1;
    for (let i = 0; i < area; i++) {
      const row = Math.floor(i / columns);
      const col = i % columns;
      const cellX = col * crossInterval + crossInterval / 2;
      const cellY = row * crossInterval + crossInterval / 2;
      const dist = Math.sqrt((clickX - cellX) ** 2 + (clickY - cellY) ** 2);
      if (dist < minDist) {
        minDist = dist;
        closestIndex = i;
      }
    }
    return closestIndex;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <canvas
        ref={canvasRef}
        width={windowSize.width}
        height={windowSize.height}
        className="absolute top-0 left-0 z-0 pointer-events-none"
      />
      <div
        className="grid absolute top-0 left-0 w-full h-full z-10"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: area }).map((_, index) => {
          const row = Math.floor(index / columns);
          const col = index % columns;
          const cellX = col * crossInterval + crossInterval / 2;
          const cellY = row * crossInterval + crossInterval / 2;

          const hoverDistance = Math.sqrt(
            (mousePos.x - cellX) ** 2 + (mousePos.y - cellY) ** 2
          );
          const hoverMaxDist = Math.sqrt(
            (windowSize.width / 7) ** 2 + (windowSize.height / 7) ** 2
          );
          const hoverIntensity = Math.max(0, 1 - hoverDistance / hoverMaxDist);

          const activeRipples = ripples.map((ripple:Ripple) => {
            const waveOffset = Math.sin((row + col) * 0.5) * 50;
            const rippleDist = Math.sqrt(
              (ripple.x - cellX) ** 2 + (ripple.y - cellY) ** 2
            );
            const rippleDelay = rippleDist * 1.2 + waveOffset;
            return {
              id: ripple.id,
              delay: rippleDelay,
              time: ripple.time,
            };
          });

          const isClosest = closestCells.has(index);

          return (
            <div
              key={`${index}-${ripples.map((r) => r.id).join('-')}`}
              className={`transition-all ease-out flex items-center justify-center`}
              style={{
                width: crossInterval,
                height: crossInterval,
                opacity: isClosest ? 1 : 0.1 + hoverIntensity * 0.9,
                scale: isClosest ? 1 + hoverIntensity * 3 : 1 + Math.sin(hoverIntensity) * 3,
                textShadow: isClosest ? `${Math.floor(hoverIntensity * 1)}px ${Math.floor(hoverIntensity * 1)}px ${Math.floor(hoverIntensity * 5)}px white` : 'none',
                transformOrigin: "center",
                animation: activeRipples
                  .map(
                    (r) => `ripple-wave ${animationTime}ms ${r.delay}ms ease-out`
                  )
                  .join(", ") || "none",
              }}
            >
              ✛
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes ripple-wave {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          40% {
            transform: scale(1.6);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}