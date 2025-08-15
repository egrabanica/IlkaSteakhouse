/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import { useState, useEffect, useCallback } from 'react';

interface VideoItem {
  id: string;
  src: string;
  fallbackImage: string;
  title: string;
}

interface UseVideoManagerProps {
  videos: VideoItem[];
  autoplayInterval?: number;
}

export const useVideoManager = ({ videos, autoplayInterval = 8000 }: UseVideoManagerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());

  // Preload next video
  const preloadVideo = useCallback((index: number) => {
    if (videos[index] && !loadedVideos.has(index)) {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = videos[index].src;
      video.addEventListener('loadedmetadata', () => {
        setLoadedVideos(prev => new Set([...prev, index]));
      });
    }
  }, [videos, loadedVideos]);

  // Auto-advance carousel
  useEffect(() => {
    if (!isPlaying || videos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = (prev + 1) % videos.length;
        // Preload the video after next
        const preloadIndex = (nextIndex + 1) % videos.length;
        preloadVideo(preloadIndex);
        return nextIndex;
      });
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, videos.length, autoplayInterval, preloadVideo]);

  // Preload first few videos on mount
  useEffect(() => {
    if (videos.length > 0) {
      preloadVideo(0);
      if (videos.length > 1) preloadVideo(1);
    }
  }, [videos, preloadVideo]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    preloadVideo((index + 1) % videos.length);
  }, [videos.length, preloadVideo]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + videos.length) % videos.length);
  }, [videos.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % videos.length);
  }, [videos.length]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  return {
    currentIndex,
    isPlaying,
    loadedVideos,
    goToSlide,
    goToPrevious,
    goToNext,
    togglePlayPause,
    setIsPlaying
  };
};