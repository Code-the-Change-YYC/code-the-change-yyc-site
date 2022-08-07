import Image from "next/image";
import Button from "../components/Button";
import Tile from "../components/Tile";

const ROLE_TILE_SIZE = 300;

const RoleTile = ({ role }) => {
  return (
    <div className="flex flex-col">
      <Tile classes="flex flex-col items-center">
        <Image
          src={`/svgs/homepage/${role.toLowerCase()}.svg`}
          alt={role}
          width={ROLE_TILE_SIZE}
          height={ROLE_TILE_SIZE}
        />
        <h2 className="text-2xl font-medium italic">{role}</h2>
      </Tile>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="px-10 md:px-24 lg:px-48 py-20 bg-[#FF6B54]">
        <h1 className="text-5xl font-semibold text-white">Ready to join the change?</h1>
        <p className="text-xl text-white py-10 font-medium">
          Explore our roles here and follow us on our socials to know when we’re recruiting! :)
        </p>
        <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-2">
          {["Development", "Marketing", "Design"].map((role) => (
            <RoleTile role={role} key={role} />
          ))}
        </div>
        <div className="py-12 flex justify-center">
          <Button href="/join">Join Us!</Button>
        </div>
      </div>
    </div>
  );
}
