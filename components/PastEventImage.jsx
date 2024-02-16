import Image from 'next/image';

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
//   console.log(images);
//   return (
//     <div>
//       <Image
//         className={PAST_EVENTS_IMAGE}
//         src={`https:${images.fields.file.url}`}
//         alt={images.fields.title}
//         width={images.fields.file.details.image.width}
//         height={images.fields.file.details.image.height}
//       />
//     </div>
//   );
// };
const PastEventImage = ({ images }) => {
  return (
    <div className="flex flex-row overflow-x">
      {images.map((image, index) => (
        <div key={index}>
          <Image
            className={PAST_EVENTS_IMAGE}
            src={`https:${image.fields.file.url}`}
            alt={image.fields.title}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
          />
        </div>
      ))}
    </div>
  );
};

export default PastEventImage;
