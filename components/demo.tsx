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
  src: '/main2.jpg',
  background:
    '/main1.png',
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
