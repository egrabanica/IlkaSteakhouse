/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useVideoManager } from '../hooks/useVideoManager';

export interface VideoItem {
  id: string;
  src: string;
  fallbackImage: string;
  title: string;
  description?: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
  autoplayInterval?: number;
  className?: string;
  showControls?: boolean;
  showIndicators?: boolean;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ 
  videos, 
  autoplayInterval = 8000,
  className = "",
  showControls = true,
  showIndicators = true
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  const {
    currentIndex,
    isPlaying,
    goToSlide,
    goToPrevious,
    goToNext,
    togglePlayPause
  } = useVideoManager({ videos, autoplayInterval });

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos.length]);

  // Handle video loading and playback
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      setIsLoading(true);
      setHasError(false);
      
      const handleCanPlay = () => {
        setIsLoading(false);
        if (isPlaying) {
          currentVideo.play().catch(() => setHasError(true));
        }
      };

      const handleError = () => {
        setIsLoading(false);
        setHasError(true);
      };

      currentVideo.addEventListener('canplay', handleCanPlay);
      currentVideo.addEventListener('error', handleError);
      
      // Only load if src is different to avoid unnecessary reloads
      if (currentVideo.src !== videos[currentIndex].src) {
        currentVideo.src = videos[currentIndex].src;
        currentVideo.load();
      }

      return () => {
        currentVideo.removeEventListener('canplay', handleCanPlay);
        currentVideo.removeEventListener('error', handleError);
      };
    }
  }, [currentIndex, isPlaying]);

  // Pause other videos when switching
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentIndex]);

  if (videos.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Video Elements */}
      {videos.map((video, index) => (
        <div
          key={video.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Fallback Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${video.fallbackImage}')` }}
          />
          
          {/* Video Element */}
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            className="absolute inset-0 w-full h-full object-cover"
            src={video.src}
            muted
            loop
            playsInline
            preload={index === currentIndex ? "auto" : "none"}
            poster={video.fallbackImage}
            style={{ 
              display: hasError && index === currentIndex ? 'none' : 'block' 
            }}
            crossOrigin="anonymous"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}

      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-900/20">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Navigation Controls */}
      {showControls && videos.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-stone-900/50 hover:bg-stone-900/75 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous video"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-stone-900/50 hover:bg-stone-900/75 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next video"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dot Indicators */}
          {showIndicators && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-white scale-110'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          )}
        </>
      )}

      {/* Play/Pause Button */}
      {showControls && (
        <button
          onClick={togglePlayPause}
          className="absolute bottom-6 right-6 bg-stone-900/50 hover:bg-stone-900/75 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      )}

      {/* Video Title Overlay */}
      <div className="absolute bottom-20 left-6 text-white z-10">
        <p className="text-sm font-medium opacity-75">
          {videos[currentIndex]?.title}
        </p>
        {videos[currentIndex]?.description && (
          <p className="text-xs opacity-60 mt-1">
            {videos[currentIndex].description}
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoCarousel;