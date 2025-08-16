/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
// Video configuration - Easy to manage and update
export interface VideoItem {
  id: string;
  src: string;
  fallbackImage: string;
  title: string;
  description?: string;
}

// Default hero videos - Replace these URLs with your actual video files
export const defaultHeroVideos: VideoItem[] = [
  {
    id: 'pan-cook',
    src: '/videos/panCook.mp4',
    fallbackImage: '/images/pan-cook.jpg', // Update this if you have a local fallback image
    title: 'Pan Cooking',
    description: 'Watch our chefs cook with precision in the pan'
  },
  {
    id: 'steak-cut',
    src: '/videos/steakCut.mp4',
    fallbackImage: '/images/steak-cut.jpg', // Update this if you have a local fallback image
    title: 'Steak Cutting',
    description: 'Experience the art of steak cutting'
  }
  
];

// Video optimization settings
export const videoSettings = {
  autoplayInterval: 10000, // 10 seconds per video
  preloadCount: 2, // Number of videos to preload
  quality: {
    mobile: '720p',
    desktop: '1080p'
  },
  formats: ['mp4', 'webm'], // Supported formats
  compression: {
    bitrate: '2000k', // Target bitrate for web optimization
    fps: 30
  }
};

// Helper function to get optimized video URL based on device
export const getOptimizedVideoUrl = (baseUrl: string, isMobile: boolean = false): string => {
  // In a real implementation, you might have different video qualities
  // For now, return the base URL
  return baseUrl;
};

// Helper function to validate video URLs
export const validateVideoUrl = (url: string): boolean => {
  // Accept both absolute and relative URLs ending with supported extensions
  return (
    (url.startsWith('/') || url.startsWith('http')) &&
    (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov'))
  );
};