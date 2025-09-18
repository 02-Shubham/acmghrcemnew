'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  background: string;
  title: string;
}

const imageMedia: MediaContent = {
  src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop',
  background:
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop',
  title: 'ACM GHRCEM',
 
};


const Demo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaSrc={imageMedia.src}
        bgImageSrc={imageMedia.background}
        title={imageMedia.title}
      >

      </ScrollExpandMedia>
    </div>
  );
};

export default Demo;
