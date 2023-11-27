import {CardInfo, Social} from "./types";
import HackBeanpotLogo from '../public/hackBeanPot.png'
import PaynalliSystemsLogo from '../public/paynalliSystems.png'
import WoodMacLogo from '../public/woodMacLogo.png'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export const sectionNames = ["About", "Experiences", "Projects", "Contact"];

const sortCardInfos = (CardInfos : CardInfo[]) => {
  return CardInfos.sort((a, b) => {
    return (b.dateEnd?.getTime() || b.dateStart.getTime()) - (a.dateEnd?.getTime()  || a.dateStart.getTime());
  })
}

export const EXPERIENCE_DISPLAYED_COUNT = 3;
export const ExperienceCardInfos: CardInfo[] = sortCardInfos([
  {
    title: "HackBeanpot",
    subtitle: "Software Engineer",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    dateStart: new Date(2023, 7),
    dateEnd: new Date(),
    techStack: ["React", "NextJS", "Typescript", "MongoDB", "Vercel", "Framer Motion", "Material UI"],
    logo: HackBeanpotLogo
  },
  {
    title: "Paynalli Systems",
    subtitle: "Software Engineer Intern",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    dateStart: new Date(2023, 4),
    dateEnd: new Date(2023, 7),
    techStack: ["React", "NextJS", "Material UI", "Tailwind", "Bootstrap"],
    logo: PaynalliSystemsLogo
  },
  {
    title: "Wood Mackenzie",
    subtitle: "Software Engineer Co-op",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    dateStart: new Date(2023, 7),
    dateEnd: new Date(),
    techStack: ["Java Spring", "Javascript", "React", "AWS", "Postgres", "CI/CD"],
    logo: WoodMacLogo
  },
]);

export const PROJECT_DISPLAYED_COUNT = 3;
export const ProjectCardInfos: CardInfo[] = sortCardInfos([
  {
    title: "Portfolio Website",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    dateStart: new Date(2023, 11),
    dateEnd: undefined,
    techStack: ["NextJs", "Styled Components", "TypeSript", "JavaScript"],
    createdAt: "Personal",
    link: "/"
  },
  {
    title: "WiseWallet",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    dateStart: new Date(2023, 2),
    dateEnd: undefined,
    techStack: ["React", "Chrome Storage API", "TypeSript", "JavaScript"],
    createdAt: "Hackbeanpot",
    link: "https://devpost.com/software/wisewallet-2iqrl8"
  },
  {
    title: "Mockple",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    dateStart: new Date(2023, 6),
    dateEnd: undefined,
    techStack: ["Next.js", "React.js", "MongoDB", "JavaScript", "Stripe API", "Google OAuth", "Tailwind" ],
    createdAt: "Personal"
  },
  {
    title: "Noods. Ramen App",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    dateStart: new Date(2022, 12),
    dateEnd: undefined,
    techStack: ["Python", "Flask", "REST API", "MySQL", "Docker", "Ngrok" ],
    createdAt: "Northeastern"
  },
  {
    title: "Forecast Finder App",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    dateStart: new Date(2022, 9),
    dateEnd: undefined,
    techStack: ["JavaScript", "HTML/CSS", "APIs"],
    createdAt: "Personal"
  },
  {
    title: "Todo App",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    dateStart: new Date(2022, 7),
    dateEnd: new Date(2022, 8),
    techStack: ["JavaScript", "HTML", "CSS"],
    createdAt: "Personal"
  }
]);

export const monthNames = [
  "January", "February", "March", 
  "April", "May", "June", 
  "July", "August", "September",  
  "October", "November", "December"
];

export const SocialsList : Social[] = [
  {
    name: "Github",
    icon: GitHubIcon,
    link: "www.github.com/nelsondong41"
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "www.linkedin.com/in/nelson-dong"
  },
  {
    name: "Email",
    icon: EmailIcon,
    link: "",
    copyToClipBoard: true
  },
]