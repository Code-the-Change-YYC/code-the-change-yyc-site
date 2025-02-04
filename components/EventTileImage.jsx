import React from 'react';
import Image from 'next/image';
const EVENTS_IMAGE =
  'w-65 h-65 md:w-60 md:h-60 md:mx-4 lg:w-92 lg:h-92 lg:w-1/3 lg:mx-1 object-cover rounded-3xl drop-shadow-md relative';
import { rgbDataURL } from '../utils/blurImage';

export const EventTileImage = ({ image }) => {
  return (
    <div>
      <div>
        <Image
          className={EVENTS_IMAGE}
          src={`https:${image.fields.file.url}`}
          alt={image.fields.title || 'Event image'}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          placeholder="blur"
          objectFit="cover"
          blurDataURL={rgbDataURL()}
        />
      </div>
    </div>
  );
};
