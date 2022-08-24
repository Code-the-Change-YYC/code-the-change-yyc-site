import Benevity from "../public/sponsor_logos/Benevity.png";
import HunterHub from "../public/sponsor_logos/Hunter Hub.png";
import Arcurve from "../public/sponsor_logos/Arcurve.png";
import Cisco from "../public/sponsor_logos/Cisco Secure.jpg";
import Schulich from "../public/sponsor_logos/Schulich School of Engineering.png";
import LighthouseLabs from "../public/sponsor_logos/Lighthouse Labs.png";
import AltaML from "../public/sponsor_logos/AltaML.png";
import Helcim from "../public/sponsor_logos/Helcim.png";
import VillageIceCream from "../public/sponsor_logos/Village Ice Cream.png";

// Multiplier is the value you need to multiply height by to get width
export const GOLD_SPONSORS_ONE = [
  { file: Benevity, multiplier: 3.216, height: 90, website: "benevity.com" },
  { file: HunterHub, multiplier: 7.02, height: 70, website: "ucalgary.ca/hunter-hub" },
];

export const GOLD_SPONSORS_TWO = [
  { file: Arcurve, multiplier: 10, height: 50, website: "arcurve.com" },
  { file: Cisco, multiplier: 3.41, height: 120, website: "cisco.com" },
];

export const SILVER_SPONSORS = [
  { file: Schulich, multiplier: 1.45, height: 115, website: "schulich.ucalgary.ca" },
  {
    file: LighthouseLabs,
    multiplier: 4.8,
    height: 60,
    website: "https://www.lighthouselabs.ca/?utm_source=ucalgary&utm_campaign=hackathon",
  },
  { file: AltaML, multiplier: 2.86, height: 100, website: "altaml.com" },
];

export const BRONZE_SPONSORS = [
  { file: Helcim, multiplier: 3.39, height: 40, website: "helcim.com" },
  { file: VillageIceCream, multiplier: 1, height: 75, website: "villageicecream.com" },
];
