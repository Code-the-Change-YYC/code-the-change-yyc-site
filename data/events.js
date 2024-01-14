import HackathonWork from "../public/images/events/img1.jpg";
import HackathonSpeech from "../public/images/events/img2.jpg";
import HackathonSpeechTwo from "../public/images/events/img3.jpg";
import HackathonJudges from "../public/images/events/img4.jpg";
import networkingONE from "../public/images/events/past-events/networking_1.png"
import networkingTWO from "../public/images/events/past-events/networking_2.jpg"
import networkingTHREE from "../public/images/events/past-events/networking_3.jpg"
import OpenSourceONE from "../public/images/events/past-events/open_source_1.png"
import OpenSourceTWO from "../public/images/events/past-events/open_source_2.png"
import OpenSourceTHREE from "../public/images/events/past-events/open_source_3.png"
import ResponsibleAIone from "../public/images/events/past-events/responsible_AI_1.jpg"
import ResponsibleAItwo from "../public/images/events/past-events/responsible_AI_2.jpg"
import ResponsibleAIthree from "../public/images/events/past-events/responsible_AI_3.jpg"
import RoastONE from "../public/images/events/past-events/resume_1.jpg"
import RoastTWO from "../public/images/events/past-events/resume_2.jpg"
import RoastTHREE from "../public/images/events/past-events/resume_3.jpg"

export const EVENTS_IMAGES = [
  {
    file: HackathonWork,
    key: "hackathon-work",
  },
  {
    file: HackathonSpeech,
    key: "hackathon-speech",
  },
  {
    file: HackathonSpeechTwo,
    key: "hackathon-speech-two",
  },
  {
    file: HackathonJudges,
    key: "hackathon-judges",
  },
];

export const PAST_EVENTS = [
  {
    name: "Resume Roast",
    img1: RoastONE,
    img2: RoastTWO,
    img3: RoastTHREE,
    blurb: "Our last event of the 2022-2023 school year was our famous resume roast! This was a fun, engaging event where students got feedback on resumes from experienced fellow upper years!",
  },
  {
    name: "Developing Responsible AI",
    img1: ResponsibleAIone,
    img2: ResponsibleAItwo,
    img3: ResponsibleAIthree,
    blurb: "Jenny Lien, a Data Science Manager at AltaML, talked about importance of developing responsible AI to mitigate the exaggeration of bias and stereotypes embedded within human society by AI systems.",
  },
  {
    name: "Building Open Source Software ",
    img1: OpenSourceONE,
    img2: OpenSourceTWO,
    img3: OpenSourceTHREE,
    blurb: "Students sat down with KOHO engineering manager Ali Waseem to learn more about how to build your first software project, the common frameworks and languages to build software projects in, and how to develop APIs!",
  },
  {
    name: "Networking in Tech",
    img1: networkingONE,
    img2: networkingTWO,
    img3: networkingTHREE,
    blurb: "We hosted a panel discussion with tech industry leaders around Calgary! The discussed what to learn outside of the standard curriculum, how to market yourself to the industry, and what to expect at interviews!",
  },
]