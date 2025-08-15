# Ilka Steakhouse - Premium Dining Experience

A modern, responsive website for Ilka Steakhouse featuring a dynamic video carousel hero section, elegant design, and comprehensive restaurant information.

## Features

### 🎥 Video Carousel Hero
- **Dynamic Background**: Full-width video carousel replacing static images
- **Multiple Videos**: Support for multiple videos with smooth transitions
- **Navigation Controls**: Arrow buttons and dot indicators for manual control
- **Auto-play**: Automatic video progression with customizable intervals
- **Performance Optimized**: Lazy loading, preloading, and fallback images
- **Responsive**: Works seamlessly across all devices
- **Accessibility**: Full keyboard navigation and screen reader support

### 🏪 Restaurant Features
- **Responsive Design**: Mobile-first approach with elegant desktop layouts
- **Interactive Navigation**: Smooth scrolling between sections
- **Featured Cuts**: Showcase of premium steak selections
- **Menu Teaser**: Dynamic menu display with tabs
- **Staff Profiles**: Meet the team section with professional photos
- **Private Events**: Carousel showcase of event spaces
- **Reservation System**: Complete booking form with validation
- **Contact Information**: Comprehensive contact details and hours

## Video Carousel Configuration

### Adding/Updating Videos

Videos are configured in `src/utils/videoConfig.ts`:

```typescript
export const defaultHeroVideos: VideoItem[] = [
  {
    id: 'unique-id',
    src: '/videos/your-video.mp4', // Place videos in public/videos/
    fallbackImage: 'https://your-fallback-image.jpg',
    title: 'Video Title',
    description: 'Optional description'
  }
];
```

### Video Requirements

**Format**: MP4 (H.264 codec recommended)
**Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
**Duration**: 10-30 seconds for optimal user experience
**File Size**: Under 10MB per video for fast loading
**Aspect Ratio**: 16:9 for best compatibility

### Performance Optimization

1. **Compression**: Use tools like HandBrake or FFmpeg to optimize videos
2. **Multiple Formats**: Consider WebM for better compression
3. **CDN**: Host videos on a CDN for global delivery
4. **Lazy Loading**: Only active videos are fully loaded
5. **Fallback Images**: High-quality images for slow connections

### Customization Options

```typescript
<VideoCarousel 
  videos={yourVideos}
  autoplayInterval={12000}    // Time between videos (ms)
  showControls={true}         // Show navigation controls
  showIndicators={true}       // Show dot indicators
  className="custom-class"    // Additional CSS classes
/>
```

## Technology Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling
- **Custom Hooks** for video management

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Videos**
   - Place video files in `public/videos/`
   - Update `src/utils/videoConfig.ts` with your video information

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Video Management

### Adding New Videos
1. Add video files to `public/videos/`
2. Update the configuration in `src/utils/videoConfig.ts`
3. Ensure fallback images are high quality and match the video content

### Removing Videos
1. Remove the video entry from the configuration
2. Delete the video file from `public/videos/`
3. The carousel will automatically adjust

### Reordering Videos
Simply reorder the items in the `defaultHeroVideos` array in the configuration file.

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Fallback**: Graceful degradation to static images for unsupported browsers

## Performance Considerations

- Videos are optimized for web delivery
- Lazy loading prevents unnecessary bandwidth usage
- Fallback images ensure content is always visible
- Preloading strategy minimizes loading delays
- Responsive design reduces mobile data usage

## Accessibility

- Full keyboard navigation support
- Screen reader compatible
- High contrast controls
- Alternative text for all images
- Semantic HTML structure

## License

This project is proprietary software for Ilka Steakhouse.