import { SwiperSlide } from "swiper/react";
import Tile from "../components/Tile";
import Image from "next/image";
import Carousel from "../components/Carousel";
import { Navigation } from 'swiper';
import Button from "../components/Button";
import { roleDescription } from "../data/roleDescription";
import "swiper/css/navigation";

const ROLE_TILE_SIZE = 450;


const RolesTile = ({role}) => {
    return(
    <Tile edgeRounding="rounded-[1.875rem]" padding="p-[1.875rem]" classes="flex flex-col md:flex-row">
        <div>
            <Image
                src={`/svgs/homepage/${role.name.toLowerCase()}.svg`}
                alt={role.name}
                width={ROLE_TILE_SIZE}
                height={ROLE_TILE_SIZE}
            />
        </div>

        <div className="basis-4/5 text-left">
            <h2 className="text-4xl font-medium italic">{role.name}</h2>
            <br></br>
            <div className="lg:space-y-24">
                <div className="text-lg">{role.description}</div>
                <br></br>
                    <div>
                    <center>
                        <Button href="/join" borderColor="border-[#9981f4]" padding="p-[0.313rem]" classes="max-w-[12.5rem] min-w-[12.5rem]"><span className="text-xl font-semibold text-white align-middle">Apply for this role</span></Button>
                    </center>
                </div>
            </div>
        </div>
    </Tile>
    );
  }


const FullRolesCarousel = () => {
    return (

        <div className="px-10 md:px-24 lg:px-48 py-20 bg-[#FF6B54]">
        <h1 className="text-5xl font-semibold text-white">Roles</h1>
        <p className="text-xl text-white py-3 font-medium">More in depth description of what the specific role involves</p>
        <br></br>
        <div className="carousel">
        <Carousel
        style={{
        "--swiper-navigation-color": "#000",
        "--swiper-navigation-size": "35px",
            }}
        modules={[Navigation]}
        navigation
        >          
        {roleDescription.map((role) => (
            <SwiperSlide key={role.name}>
                <RolesTile role={role} key={role} />
            </SwiperSlide> 
            ))}
    </Carousel>
        </div>
    </div>

    );
};

export default FullRolesCarousel;
