'use client';

import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 80;

interface SceneOverlay {
  frameStart: number;
  frameEnd: number;
  headline: string;
  subtext: string;
  position: 'left' | 'right' | 'center' | 'bottom-center';
}

const SCENE_OVERLAYS: SceneOverlay[] = [
  {
    frameStart: 1,
    frameEnd: 8,
    headline: 'Where it begins.',
    subtext: 'Every peanut starts with the soil, the season, and careful cultivation.',
    position: 'left',
  },
  {
    frameStart: 9,
    frameEnd: 16,
    headline: 'From nature, one peanut at a time.',
    subtext: 'Selected with patience. Handled with respect.',
    position: 'right',
  },
  {
    frameStart: 17,
    frameEnd: 25,
    headline: 'Simple on the outside.',
    subtext: 'Naturally valuable inside.',
    position: 'left',
  },
  {
    frameStart: 26,
    frameEnd: 38,
    headline: 'What nature keeps inside.',
    subtext: 'A premium reveal of what matters most.',
    position: 'center',
  },
  {
    frameStart: 39,
    frameEnd: 50,
    headline: 'From the soil.',
    subtext: 'To the shell. To the kernel.',
    position: 'right',
  },
  {
    frameStart: 51,
    frameEnd: 62,
    headline: 'The journey continues.',
    subtext: 'From careful handling to ready-to-deliver quality.',
    position: 'left',
  },
  {
    frameStart: 63,
    frameEnd: 74,
    headline: 'Packed with purpose.',
    subtext: 'Every kernel accounted for. Every pack sealed with trust.',
    position: 'center',
  },
  {
    frameStart: 75,
    frameEnd: 80,
    headline: 'Ready for the next journey.',
    subtext: 'From our hands to yours.',
    position: 'left',
  },
];

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isReady, setIsReady] = useState(false);
  const rafRef = useRef<number>();

  // Preload all frames
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    const onComplete = () => {
      loaded++;
      setLoadedCount(loaded);
      if (loaded === TOTAL_FRAMES) {
        setIsReady(true);
      }
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = `/peanut-animation/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
      img.onload = onComplete;
      img.onerror = onComplete; // Don't block on failed frames
      images[i] = img;
    }

    imagesRef.current = images;
  }, []);

  // Draw frame on canvas — fill entire viewport (cover behavior)
  useEffect(() => {
    if (!isReady || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[currentFrame];
    if (!img) return;

    // Set canvas to viewport size
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    canvas.width = vw;
    canvas.height = vh;

    // Cover: scale image to fill, center and crop
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = vw / vh;
    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image ratio — fit to width
      drawW = vw;
      drawH = vw / imgRatio;
      drawX = 0;
      drawY = (vh - drawH) / 2;
    } else {
      // Canvas is taller — fit to height
      drawH = vh;
      drawW = vh * imgRatio;
      drawX = (vw - drawW) / 2;
      drawY = 0;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.clearRect(0, 0, vw, vh);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, [currentFrame, isReady]);

  // Scroll-driven frame update
  useEffect(() => {
    if (!isReady || !containerRef.current) return;

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollHeight = container.scrollHeight - window.innerHeight;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollHeight));
        const frame = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(progress * (TOTAL_FRAMES - 1)) + 1));
        setCurrentFrame(frame);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isReady]);

  // Update scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    if (bar) {
      const progress = (currentFrame - 1) / (TOTAL_FRAMES - 1);
      bar.style.transform = `scaleX(${progress})`;
    }
  }, [currentFrame]);

  // Find active scene overlay
  const activeScene = SCENE_OVERLAYS.find(
    (s) => currentFrame >= s.frameStart && currentFrame <= s.frameEnd
  );

  // Calculate scene text opacity (fade in and out within scene range)
  const getSceneOpacity = (scene: SceneOverlay) => {
    const range = scene.frameEnd - scene.frameStart;
    const progress = (currentFrame - scene.frameStart) / range;
    // First scene: start visible immediately, only fade out
    if (scene.frameStart === 1) {
      if (progress > 0.8) return (1 - progress) / 0.2;
      return 1;
    }
    // Other scenes: fade in during first 20%, hold, fade out during last 20%
    if (progress < 0.2) return progress / 0.2;
    if (progress > 0.8) return (1 - progress) / 0.2;
    return 1;
  };

  return (
    <section id="story" className="scroll-story-container" ref={containerRef} style={{ height: `${TOTAL_FRAMES * 80}px` }}>
      {/* Scroll progress bar */}
      <div id="scroll-progress" className="scroll-progress-bar" style={{ transform: 'scaleX(0)' }} />

      {/* Sticky canvas viewport */}
      <div className="scroll-story-canvas bg-gb">
        {/* Loading state */}
        {!isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gb z-20">
            <div className="w-16 h-16 rounded-full border-2 border-dg/20 border-t-dg animate-spin mb-6" />
            <p className="text-dg/60 text-sm font-medium tracking-widest uppercase">
              Loading Experience
            </p>
            <p className="text-dg/40 text-xs mt-2">
              {loadedCount} / {TOTAL_FRAMES} frames
            </p>
          </div>
        )}

        {/* Canvas for rendering frames */}
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ opacity: isReady ? 1 : 0, display: 'block', imageRendering: 'auto' }}
        />

        {/* Dark overlay for text contrast */}
        {isReady && <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/30 pointer-events-none" />}

        {/* Scene text overlays */}
        {isReady && activeScene && (
          <div
            className={`absolute z-10 px-8 md:px-16 pointer-events-none transition-opacity duration-500 ${
              activeScene.position === 'left'
                ? 'left-0 top-1/2 -translate-y-1/2 text-left max-w-lg'
                : activeScene.position === 'right'
                ? 'right-0 top-1/2 -translate-y-1/2 text-right max-w-lg ml-auto'
                : activeScene.position === 'bottom-center'
                ? 'bottom-20 left-1/2 -translate-x-1/2 text-center max-w-xl'
                : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-xl'
            }`}
            style={{ opacity: getSceneOpacity(activeScene) }}
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              {activeScene.headline}
            </h2>
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
              {activeScene.subtext}
            </p>


          </div>
        )}

        {/* Frame counter (subtle, for context) */}
        {isReady && (
          <div className="absolute bottom-6 right-6 text-dg/20 text-xs font-mono tracking-wider">
            {String(currentFrame).padStart(2, '0')} / {TOTAL_FRAMES}
          </div>
        )}
      </div>
    </section>
  );
}
