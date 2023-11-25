import CardInfo from "./types";
import HackBeanpotLogo from '../public/hackBeanPot.png'
import PaynalliSystemsLogo from '../public/paynalliSystems.png'
import WoodMacLogo from '../public/woodMacLogo.png'

export const sectionNames = ["About", "Experience", "Project"];

const sortCardInfos = (CardInfos : CardInfo[]) => {
  return CardInfos.sort((a, b) => {
    if (!a.dateEnd) {
      return -1;
    }
    if (!b.dateEnd) {
      return 1;
    }
    return b.dateEnd.getTime() - b.dateEnd.getTime();
  })
}

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

export const ProjectCardInfos: CardInfo[] = sortCardInfos([
  {
    title: "WiseWallet",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    dateStart: new Date(2023, 2),
    dateEnd: undefined,
    techStack: ["React", "Chrome Storage API", "TypesSript"],
  },
  {
    title: "Mockple",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    dateStart: new Date(2023, 6),
    dateEnd: undefined,
    techStack: ["Next.js", "React.js", "MongoDB", "JavaScript", "Stripe API", "Google OAuth", "Tailwind" ],
  }
]);

export const monthNames = [
  "January", "February", "March", 
  "April", "May", "June", 
  "July", "August", "September",  
  "October", "November", "December"
];
