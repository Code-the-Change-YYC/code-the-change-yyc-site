import Benevity from '../public/sponsor_logos/Benevity.png';
import Cisco from '../public/sponsor_logos/Cisco Secure.jpg';
import Schulich from '../public/sponsor_logos/Schulich School of Engineering.png';
import ATB from '../public/sponsor_logos/atb.jpg';
import FacultyOfScience from '../public/sponsor_logos/UC Faculty of Science.jpg';

// Multiplier is the value you need to multiply height by to get width
export const GOLD_SPONSORS_ONE = [
  { file: ATB, multiplier: 1.42, height: 120, website: 'atb.com' },
  { file: Benevity, multiplier: 3.216, height: 90, website: 'benevity.com' },
];

export const GOLD_SPONSORS_TWO = [{ file: Cisco, multiplier: 3.41, height: 120, website: 'cisco.com' }];

export const SILVER_SPONSORS_ONE = [
  { file: Schulich, multiplier: 1.45, height: 115, website: 'schulich.ucalgary.ca' },
  { file: FacultyOfScience, multiplier: 4.26, height: 115, website: 'science.ucalgary.ca' },
];

export const SILVER_SPONSORS_TWO = [];

export const BRONZE_SPONSORS = [];
