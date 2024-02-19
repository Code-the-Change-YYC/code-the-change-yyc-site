import Image from 'next/image';
import { rgbDataURL } from '../utils/blurImage';
const PAST_EVENTS_IMAGE =
  'w-65 h-65 md:w-60 md:h-60 md:mx-4 lg:w-92 lg:h-92 lg:w-1/3 lg:mx-1 object-cover rounded-3xl drop-shadow-md relative';

const PastEventImageComponent = ({ eventImages }) => {
  return eventImages.map((image, index) => (
    <Image
      key={index}
      className={`${PAST_EVENTS_IMAGE}`}
      src={`https:${image.fields.file.url}`}
      alt={image.fields.title}
      width={image.fields.file.details.image.width}
      height={image.fields.file.details.image.height}
      placeholder="blur"
      blurDataURL={rgbDataURL()}
    />
  ));
};
const PastEventImage = ({ images }) => {
  return (
    <div className="flex overflow-x">
      {/* Display only the first image on small screens */}
      <div className="md:hidden lg:hidden">
        <PastEventImageComponent eventImages={[images[0]]} />
      </div>
      {/* Display only the first two images on medium screens */}
      <div className="hidden md:flex lg:hidden">
        <PastEventImageComponent eventImages={images.slice(0, 2)} />
      </div>
      {/* Display all images on large screens */}
      <div className="hidden lg:flex">
        <PastEventImageComponent eventImages={images} />
      </div>
    </div>
  );
};

export default PastEventImage;
