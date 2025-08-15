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
    id: 'steak-grilling',
    src: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    fallbackImage: 'https://images.pexels.com/photos/3195394/pexels-photo-3195394.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Perfect Steak Preparation',
    description: 'Watch our master chefs prepare the perfect steak'
  },
  {
    id: 'restaurant-atmosphere',
    src: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
    fallbackImage: 'https://images.pexels.com/photos/3209828/pexels-photo-3209828.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Elegant Dining Atmosphere',
    description: 'Experience our sophisticated dining environment'
  },
  {
    id: 'cooking-flames',
    src: 'https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4',
    fallbackImage: 'https://images.pexels.com/photos/2620043/pexels-photo-2620043.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Culinary Excellence',
    description: 'Experience the art of fine cooking'
  },
  {
    id: 'fine-dining',
    src: 'https://videos.pexels.com/video-files/3298637/3298637-uhd_2560_1440_25fps.mp4',
    fallbackImage: 'https://images.pexels.com/photos/3298637/pexels-photo-3298637.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Fine Dining Experience',
    description: 'Discover our premium dining atmosphere'
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
  try {
    new URL(url);
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');
  } catch {
    return false;
  }
};