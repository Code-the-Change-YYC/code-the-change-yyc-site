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
const PastEventImage = ({ image, eventName }) => {
  return (
    <div>
      <Image
        className={PAST_EVENTS_IMAGE}
        src={`https:${image.fields.file.url}`}
        alt={eventName}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
      />
    </div>
  );
};

export default PastEventImage;
