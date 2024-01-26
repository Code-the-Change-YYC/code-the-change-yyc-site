import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Carousel from './Carousel';
import FontAwesomeLink from './FontAwesomeLink';
import 'swiper/css';
import 'swiper/css/navigation';

const CAROUSEL_CONTAINER = 'text-white rounded-lg w-[20rem] h-[44rem] shadow-2xl md:w-4/5 swiper-button-white';
const ALUMNI_TILE =
  'bg-[#7055FD] w-[20rem] h-[70rem] md:h-[44rem] rounded-lg items-center p-14 lg:p-10 flex flex-col shadow-2xl md:w-full md:flex-row';
const ALUMNI_PROFILE = 'flex flex-col items-center mx-auto text-center md:p-10';

const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const AlumniTile = ({ fullName, position, previousRole, testimonial, linkedin, profile }) => {
  return (
    <div className={ALUMNI_TILE}>
      <div className={ALUMNI_PROFILE}>
        <div className="w-40 h-40 mb-3 mt-5 md:w-60 md:h-60 mx-auto relative rounded-full overflow-hidden">
          <Image
            src={`https:${profile.fields.file.url}`}
            alt="Profile Picture"
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={rgbDataURL(112, 85, 175)}
          />
        </div>
        <h2 className="text-[2rem] md:text-[2rem] font-bold">{fullName}</h2>
        <h2 className="text-[1rem] md:text-[1rem] font-semibold text-[#BAFBE4]">{position}</h2>
        <h2 className="text-[1rem] md:text-[1rem] font-medium mb-2">Previously: {previousRole}</h2>
        <FontAwesomeLink
          username={linkedin}
          icon={faLinkedin}
          classes="h-6 w-6 md:h-10 md:w-10 text-white cursor-pointer mb-5"
        />
      </div>
      <p className="text-[1.1rem] font-light italic leading-7 mx-auto md:ml-14 md:mb-24 md:text-[1.3rem] lg:text-[1.5rem] md:p-10">
        <span className="text-[2rem] font-extrabold">&quot;</span>
        {testimonial}
        <span className="text-[2rem] font-extrabold">&quot;</span>
      </p>
    </div>
  );
};

const AlumniCarousel = ({ alumni }) => {
  return (
    <div className={CAROUSEL_CONTAINER}>
      <Carousel>
        {alumni.map((alumni) => (
          <SwiperSlide key={alumni.name}>
            <AlumniTile {...alumni} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default AlumniCarousel;
