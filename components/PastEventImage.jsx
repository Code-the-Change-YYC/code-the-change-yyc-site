import Image from 'next/image';

// const PAST_EVENTS_IMAGE =
//   'w-65 h-65 p-2 md:w-60 md:h-60 lg:w-92 lg:h-92 mx-1 lg:mx-3 rounded-3xl drop-shadow-md relative';
const PAST_EVENTS_IMAGE =
  'w-65 h-65 p-2 md:w-60 md:h-60 lg:w-92 lg:h-92 mx-1 lg:mx-3 rounded-3xl drop-shadow-md relative';

// const PastEventImage = ({img, name}) => {
//   return (
//     <div>
//       <Image
//         className={PAST_EVENTS_IMAGE}
//         src={img}
//         alt={name}
//       />
//     </div>
//   );
// };

// const PastEventImage = ({ images }) => {
//   return (
//     <div className="flex flex-row overflow-x">
//       {images.map((image, index) => (
//         <div key={index}>
//           <Image
//             className={PAST_EVENTS_IMAGE}
//             src={`https:${image.fields.file.url}`}
//             alt={image.fields.title}
//             width={image.fields.file.details.image.width}
//             height={image.fields.file.details.image.height}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

const PastEventImage = ({ images }) => {
  return (
    <div className="flex overflow-x">
      {/* Display only the first image on small screens */}
      <div className="md:hidden lg:hidden">
        <Image
          className={PAST_EVENTS_IMAGE}
          src={`https:${images[0].fields.file.url}`}
          alt={images[0].fields.title}
          width={images[0].fields.file.details.image.width}
          height={images[0].fields.file.details.image.height}
        />
      </div>
      {/* Display only the first two images on medium screens */}
      <div className="hidden md:flex lg:hidden">
        {images.slice(0, 2).map((image, index) => (
          <Image
            key={index}
            className={PAST_EVENTS_IMAGE}
            src={`https:${image.fields.file.url}`}
            alt={image.fields.title}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
          />
        ))}
      </div>
      {/* Display all images on large screens */}
      <div className="hidden lg:flex">
        {images.map((image, index) => (
          <Image
            key={index}
            className={PAST_EVENTS_IMAGE}
            src={`https:${image.fields.file.url}`}
            alt={image.fields.title}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
          />
        ))}
      </div>
    </div>
  );
};

export default PastEventImage;
