import Image from 'next/image';
import Link from 'next/link';
import Heading from './Heading';
import {
  GOLD_SPONSORS_ONE,
  GOLD_SPONSORS_TWO,
  SILVER_SPONSORS_ONE,
  SILVER_SPONSORS_TWO,
  BRONZE_SPONSORS,
} from '../data/sponsors';

const SPONSORS_CONTAINER = 'bg-white flex flex-col items-center py-10 md:py-20';
const HEADING_CONTAINER = 'flex flex-row justify-center mb-10 ml-5';
const SPONSORS_LEVEL_CONTAINER = 'flex flex-row justify-center items-center my-5';
const CONTENT_CONTAINER = 'my-10 font-medium w-1/2 text-center';
const UNDERLINE_CONTAINER = 'mb-10';
const UNDERLINE_PROPERTIES = {
  width: 177,
  height: 10,
};

const Sponsors = () => {
  const SponsorImage = ({ file, multiplier, height, website }) => (
    <Link href={`https://www.${website}`} className="mx-5" legacyBehavior>
      <Image src={file} alt={file} width={height * multiplier} height={height} placeholder="blur" />
    </Link>
  );

  return (
    <div className={SPONSORS_CONTAINER}>
      <div className={HEADING_CONTAINER}>
        <Heading>Sponsors</Heading>
        <Image src="/svgs/sponsorship_heart.svg" alt="" width={100} height={100} />
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {GOLD_SPONSORS_ONE.map(({ ...props }) => (
          <SponsorImage key={props.file} {...props} />
        ))}
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {GOLD_SPONSORS_TWO.map(({ ...props }) => (
          <SponsorImage key={props.file} {...props} />
        ))}
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {SILVER_SPONSORS_ONE.map(({ ...props }) => (
          <SponsorImage key={props.file} {...props} />
        ))}
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {SILVER_SPONSORS_TWO.map(({ ...props }) => (
          <SponsorImage key={props.file} {...props} />
        ))}
      </div>
      <div className={SPONSORS_LEVEL_CONTAINER}>
        {BRONZE_SPONSORS.map(({ ...props }) => (
          <SponsorImage key={props.file} {...props} />
        ))}
      </div>
      <div className={CONTENT_CONTAINER}>
        We are continuously pursuing endeavors that could help students achieve more social good for the community.
        These are the amazing sponsors that help make our events and ideas possible.
      </div>
      <div className={UNDERLINE_CONTAINER}>
        <Image
          src="/svgs/purple_underline.svg"
          alt=""
          width={UNDERLINE_PROPERTIES.width}
          height={UNDERLINE_PROPERTIES.height}
        />
      </div>
    </div>
  );
};

export default Sponsors;
