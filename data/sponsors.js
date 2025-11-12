import Benevity from '../public/sponsor_logos/Benevity.png';
import Schulich from '../public/sponsor_logos/Schulich School of Engineering.png';
import FacultyOfScience from '../public/sponsor_logos/UC Faculty of Science.jpg';
import AWS from '../public/sponsor_logos/AWS.png';
import Arcurve from '../public/sponsor_logos/Arcurve.png';
import HunterHub from '../public/sponsor_logos/Hunter Hub Logo.jpg';
import Village from '../public/sponsor_logos/Village Ice Cream.png';

// Multiplier is the value you need to multiply height by to get width
export const GOLD_SPONSORS_ONE = [
  { file: AWS, multiplier: 1.5, height: 100, website: 'aws.amazon.com' },
  { file: Benevity, multiplier: 3.216, height: 90, website: 'benevity.com' },
];

export const GOLD_SPONSORS_TWO = [{ file: Arcurve, multiplier: 3.41, height: 120, website: 'arcurve.com' }];

export const SILVER_SPONSORS_ONE = [
  { file: Schulich, multiplier: 1.45, height: 115, website: 'schulich.ucalgary.ca' },
  { file: FacultyOfScience, multiplier: 4.26, height: 115, website: 'science.ucalgary.ca' },
];

export const SILVER_SPONSORS_TWO = [
  { file: Village, multiplier: 1.25, height: 95, website: 'villageicecream.com' },
  { file: HunterHub, multiplier: 4.26, height: 145, website: 'ucalgary.ca/hunter-hub' },
];

export const BRONZE_SPONSORS = [];
