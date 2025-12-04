import WinsVolunteeringOne from '../public/images/join/wins_volunteering_1.png';
import WinsVolunteeringFour from '../public/images/join/wins_volunteering_4.png';
import HackathonOne from '../public/images/join/hackathon_2025_1.png';
import HackathonTwo from '../public/images/join/hackathon_2025_2.png';
import HackathonThree from '../public/images/join/hackathon_2025_3.png';
import HackathonFour from '../public/images/join/hackathon_2024_1.png';
import TeamPicOne from '../public/images/join/team_pic_2024_1.png';
import TeamPicTwo from '../public/images/join/team_pic_2024_2.png';

export const JOIN_ONE = [
  { key: 'hackathon-2025-one', photo: HackathonOne, classes: '' },
  { key: 'hackathon-2025-two', photo: HackathonTwo, classes: 'mt-10' },
  { key: 'hackathon-2025-three', photo: HackathonThree, classes: '' },
  { key: 'wins-volunteering-one', photo: WinsVolunteeringOne, classes: 'mt-10' },
];
export const JOIN_TWO = [
  { key: 'hackathon-2024-one', photo: HackathonFour, classes: '' },
  { key: 'team_pic-2024-one', photo: TeamPicOne, classes: 'mt-10' },
  { key: 'team_pic-2024-two', photo: TeamPicTwo, classes: '' },
  { key: 'wins-volunteering-four', photo: WinsVolunteeringFour, classes: 'mt-10' },
];

export const ROLE = [
  {
    name: 'Development',
    description:
      'As a project developer, you’ll be responsible for building code for our non-profit partners and perform code reviews. You’ll work as a team to implement a software project while communicating with our business partners to ensure all requirements are aligned.',
  },
  {
    name: 'Marketing',
    description:
      'As an marketing team member, you’ll be responsible for leading all facets of our external branding and marketing initiatives!',
  },
  {
    name: 'Design',
    description: 'As a design team member, you’ll be responsible for designing our marketing and promotional items!',
  },
  {
    name: 'Events',
    description:
      "As a events team member, you'll be responsible for organizing and host all of the code the change yyc events.",
  },
  {
    name: 'Finance',
    description:
      "As Finance Lead for Code the Change, you'll manage event budgets, ensure accurate fund allocation, assist in sponsorship proposals, and prepare financial reports for the SU.",
  },
  {
    name: 'Contact Us',
    description:
      'Interested in connecting with us about a project, partnership, or anything else? Reach us via our email.',
  },
];
