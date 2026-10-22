import Benevity from '../public/sponsor_logos/Benevity.png';
import Schulich from '../public/sponsor_logos/Schulich School of Engineering.png';
import FacultyOfScience from '../public/sponsor_logos/UC Faculty of Science.jpg';
import AWS from '../public/sponsor_logos/AWS.png';
import Clio from '../public/sponsor_logos/clio.png';
import Pason from '../public/sponsor_logos/pason.png';

// Multiplier is the value you need to multiply height by to get width
export const GOLD_SPONSORS_ONE = [
  { file: Benevity, multiplier: 3.216, height: 90, website: 'benevity.com' },
  { file: Clio, multiplier: 2.85, height: 100, website: 'clio.com' },
];

export const GOLD_SPONSORS_TWO = [{ file: AWS, multiplier: 1.5, height: 100, website: 'aws.amazon.com' }];

export const SILVER_SPONSORS_ONE = [
  { file: Schulich, multiplier: 1.45, height: 115, website: 'schulich.ucalgary.ca' },
  { file: FacultyOfScience, multiplier: 4.26, height: 115, website: 'science.ucalgary.ca' },
];

export const SILVER_SPONSORS_TWO = [
  { file: Pason, multiplier: 1.907, height: 100, website: 'pason.com' },
];

export const BRONZE_SPONSORS = [];
