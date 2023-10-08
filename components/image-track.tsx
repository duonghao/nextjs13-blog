'use client';

import Image from 'next/image';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image1 from '@/public/Image_1.jpg';
import Image2 from '@/public/Image_2.jpg';
import Image3 from '@/public/Image_3.jpg';
import Image4 from '@/public/Image_4.jpg';
import Image5 from '@/public/Image_5.jpg';
import Image6 from '@/public/Image_6.jpg';
import { useMediaQuery } from '@uidotdev/usehooks';

export default function ImageTrack() {
  const [x, setX] = useState(0);
  const [xTranslationPercentageTemp, setXTranslationPercentageTemp] =
    useState(0);
  const [xTranslationPercentageActual, setXTranslationPercentageActual] =
    useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isLargeDevice = useMediaQuery('only screen and (min-width : 1024px)');

  const duringDrag = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (x === 0) return;

      var delta;
      if (event instanceof MouseEvent) {
        delta = x - event.clientX;
      } else if (event instanceof TouchEvent) {
        delta = x - event.touches[0].clientX;
      }

      const maxDelta = window.innerWidth / 2;
      const percentage = ((delta as number) / maxDelta) * -100,
        nextPercentage = xTranslationPercentageActual + percentage;
      const currentPercentage = Math.max(Math.min(nextPercentage, 0), -100);
      if (ref.current != null) {
        ref.current.animate(
          { transform: `translate(${currentPercentage}%, 0%)` },
          { duration: 200, fill: 'forwards' }
        );

        const images = Array.from(ref.current.children).map(
          (imageContainer) => imageContainer.children[0] as HTMLElement
        );
        for (const image of images) {
          image.animate(
            { objectPosition: `${100 + currentPercentage}% 50%` },
            { duration: 200, fill: 'forwards' }
          );
        }
      }
      setXTranslationPercentageTemp(currentPercentage);
    },
    [x, xTranslationPercentageActual]
  );

  const endDrag = useCallback(
    (event: MouseEvent | TouchEvent) => {
      setX(0);
      setXTranslationPercentageActual(xTranslationPercentageTemp);
    },
    [xTranslationPercentageTemp]
  );

  useEffect(() => {
    const startDrag = (event: MouseEvent | TouchEvent) => {
      if (event instanceof MouseEvent) {
        setX(event.clientX);
      } else if (event instanceof TouchEvent) {
        setX(event.touches[0].clientX);
      }
    };

    if (isLargeDevice) {
      // Handle mouse events
      window.addEventListener('mousedown', startDrag);
      window.addEventListener('mouseup', endDrag);
      window.addEventListener('mousemove', duringDrag);

      // Handle touch events
      window.addEventListener('touchstart', startDrag);
      window.addEventListener('touchend', endDrag);
      window.addEventListener('touchmove', duringDrag);
    }

    return () => {
      window.removeEventListener('mousedown', startDrag);
      window.removeEventListener('mouseup', endDrag);
      window.removeEventListener('mousemove', duringDrag);

      window.removeEventListener('touchstart', startDrag);
      window.removeEventListener('touchend', endDrag);
      window.removeEventListener('touchmove', duringDrag);
    };
  }, [duringDrag, isLargeDevice, endDrag]);

  return (
    <section className="w-full lg:h-full lg:relative lg:overflow-hidden">
      <div
        ref={ref}
        className={`flex flex-col gap-4 lg:absolute lg:left-1/2 lg:flex-row lg:flex-nowrap lg:h-full lg:items-center `}
      >
        <div className="trackImage relative">
          <Image
            src={Image1}
            alt="Image 1"
            className="object-cover"
            draggable={false}
            fill={true}
          ></Image>
        </div>
        <div className="trackImage relative">
          <Image
            src={Image2}
            alt="Image 2"
            className="object-cover"
            draggable={false}
            fill={true}
          ></Image>
        </div>
        <div className="trackImage relative">
          <Image
            src={Image3}
            alt="Image 3"
            className="object-cover"
            draggable={false}
            fill={true}
          ></Image>
        </div>
        <div className="trackImage relative">
          <Image
            src={Image4}
            alt="Image 4"
            className="object-cover"
            draggable={false}
            fill={true}
          ></Image>
        </div>
        <div className="trackImage relative">
          <Image
            src={Image5}
            alt="Image 5"
            className="object-cover"
            draggable={false}
            fill={true}
          ></Image>
        </div>
        <div className="trackImage relative">
          <Image
            src={Image6}
            alt="Image 6"
            className="object-cover"
            draggable={false}
            fill={true}
          ></Image>
        </div>
      </div>
    </section>
  );
}
