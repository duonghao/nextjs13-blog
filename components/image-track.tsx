'use client';

import Image from 'next/image';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image1 from '@/public/Image_1.jpg';
import Image2 from '@/public/Image_2.jpg';
import Image3 from '@/public/Image_3.jpg';
import Image4 from '@/public/Image_4.jpg';
import Image5 from '@/public/Image_5.jpg';
import Image6 from '@/public/Image_6.jpg';

export default function ImageTrack() {
  const [x, setX] = useState(0);
  const [xTranslationPercentage, setXTranslationPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const duringDrag = useCallback(
    (event: MouseEvent) => {
      if (x === 0) return;

      const mouseDelta = x - event.clientX;
      const maxDelta = window.innerWidth / 2;
      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = xTranslationPercentage + percentage;
      const currentPercentage = Math.max(Math.min(nextPercentage, 0), -100);
      if (ref.current != null) {
        ref.current.style.transform = `translate(${currentPercentage}%, -50%)`;

        const images = Array.from(ref.current.children).map(
          (imageContainer) => imageContainer.children[0] as HTMLElement
        );
        for (const image of images) {
          image.style.objectPosition = `${currentPercentage + 100}% 50%`;
        }
      }
      setXTranslationPercentage(currentPercentage);
    },
    [x]
  );

  useEffect(() => {
    const startDrag = (event: MouseEvent) => {
      setX(event.clientX);
    };
    const endDrag = (event: MouseEvent) => {
      setX(0);
    };

    window.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('mousemove', duringDrag);

    return () => {
      window.removeEventListener('mousedown', startDrag);
      window.removeEventListener('mouseup', endDrag);
      window.removeEventListener('mousemove', duringDrag);
    };
  }, [duringDrag]);

  return (
    <section className="w-full h-full relative">
      <div
        ref={ref}
        className={`flex flex-nowrap gap-4 absolute left-1/2 top-1/2 -translate-y-1/2`}
      >
        <div className="trackImage relative">
          <Image
            src={Image1}
            alt="Image 1"
            className="object-cover"
            draggable={false}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
        </div>
        <div className="trackImage relative">
          <Image
            src={Image2}
            alt="Image 2"
            className="object-cover"
            draggable={false}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
        </div>
        <div className="trackImage relative">
          <Image
            src={Image3}
            alt="Image 3"
            className="object-cover"
            draggable={false}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
        </div>
        <div className="trackImage relative">
          <Image
            src={Image4}
            alt="Image 4"
            className="object-cover"
            draggable={false}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
        </div>
        <div className="trackImage relative">
          <Image
            src={Image5}
            alt="Image 5"
            className="object-cover"
            draggable={false}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
        </div>
        <div className="trackImage relative">
          <Image
            src={Image6}
            alt="Image 6"
            className="object-cover"
            draggable={false}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
        </div>
      </div>
    </section>
  );
}
