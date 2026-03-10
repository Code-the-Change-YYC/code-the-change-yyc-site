import React from 'react';
import Image from 'next/image';
const EVENTS_IMAGE = 'w-40 h-1/3 md:w-full md:h-full rounded-3xl  relative';

import { rgbDataURL } from '../utils/blurImage';

export const EventTileImage = ({ image }) => {
  return (
    <div>
      <div className = "mt-10">
        <Image
          className={EVENTS_IMAGE}
          src={`https:${image.fields.file.url}`}
          alt={image.fields.title || 'Event image'}
          width={400}
          height={100}
          placeholder="blur"
          objectFit="cover"
          blurDataURL={rgbDataURL()}
        />
      </div>
    </div>
  );
};
