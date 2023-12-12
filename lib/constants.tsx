import { CardInfo, CommonTechStack, Social } from "./types";
import HackBeanpotLogo from "../public/hackBeanPot.png";
import PaynalliSystemsLogo from "../public/paynalliSystems.png";
import WoodMacLogo from "../public/woodMacLogo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const { TS, JS, JAVA, REACT, NEXTJS, MONGODB, HTMLCSS } = CommonTechStack;
export const sectionNames = ["About", "Experiences", "Projects", "Contact"];

const sortCardInfos = (CardInfos: CardInfo[]): CardInfo[] => {
  return CardInfos.sort((a, b) => {
    return (
      (b.dateEnd?.getTime() || b.dateStart.getTime()) -
      (a.dateEnd?.getTime() || a.dateStart.getTime())
    );
  });
};

export const EXPERIENCE_DISPLAYED_COUNT = 3;
export const ExperienceCardInfos: CardInfo[] = sortCardInfos([
  {
    title: "HackBeanpot",
    subtitle: "Software Engineer",
    description:
      "Joined the HackBeanpot core team after participating in the 2023 Hackathon Event. Now I create and progress towards the common goal of making the next year's hackathon as great at it was for me. I created the main site for the new theme and architected the internal tools backend for team sorting during the event. I also helped freshen up the site with an animation revamp.",
    dateStart: new Date(2023, 7),
    dateEnd: new Date(),
    techStack: [
      REACT,
      NEXTJS,
      TS,
      MONGODB,
      "Vercel",
      "Framer Motion",
      "Material UI",
    ],
    logo: HackBeanpotLogo,
    link: "https://hackbeanpot.com",
  },
  {
    title: "Paynalli Systems",
    subtitle: "Software Engineer Intern",
    description: "As a very quick internship, I helped to freshen up an internal tools UI page by architecting the page with Next.js. I then redesigned it with Tailwind and Bootstrap.",
    dateStart: new Date(2023, 4),
    dateEnd: new Date(2023, 7),
    techStack: [REACT, NEXTJS, JS, "Material UI", "Tailwind", "Bootstrap"],
    logo: PaynalliSystemsLogo,
    link: "https://paynalli.com",
  },
  {
    title: "Wood Mackenzie",
    subtitle: "Software Engineer Co-op",
    description: `My first full professional coop where I learned and was immersed in the professional industry. In the hybrid monolithic and microservice architecture I worked on, I migrated core functionality to asyncronous task handlers and pioneered free text filtering to a core table. I also worked as a release engineer for the monthly code releases to production environments. Outside of technicals, I also helped interview the following co-op cycle candidates and conducted daily code reviews/browser tests.`,
    dateStart: new Date(2023, 7),
    dateEnd: new Date(),
    techStack: ["Java Spring", JS, REACT, "AWS", "Postgres", "CI/CD"],
    logo: WoodMacLogo,
    link: "https://www.woodmac.com",
  },
]);

export const PROJECT_DISPLAYED_COUNT = 3;
export const ProjectCardInfos: CardInfo[] = sortCardInfos([
  {
    title: "Portfolio Website",
    description: `You are on this website right now! Inspired by many of my peers, I created this website as an archive for my projects and work experiences. Created proudly with Next.js and Typescript and a bit of framer motion for animation.`,
    dateStart: new Date(2023, 11),
    dateEnd: undefined,
    techStack: [NEXTJS, "Styled Components", TS, JS, "Resend", "Framer Motion"],
    createdAt: "Personal",
    link: "/",
  },
  {
    title: "WiseWallet",
    description: `A top 6 placing hackathon project at HackBeanpot 2023, showcasing a chrome extension that helps you save money by archiving transactions made with a friendly UI. On the "evil" side, features a "payment blocker", completely blocking any payment button.`,
    dateStart: new Date(2023, 2),
    dateEnd: undefined,
    techStack: [REACT, "Chrome Storage API", TS, JS],
    createdAt: "Hackbeanpot",
    link: "https://devpost.com/software/wisewallet-2iqrl8",
  },
  {
    title: "Mockple",
    description: `An E-commerce platform featuring an admin panel and a customer facing front end. Taking advantage of modern frontend design with a backend that utilizes AWS S3, Stripe API, MongoDB and Google OAuth.`,
    dateStart: new Date(2023, 6),
    dateEnd: undefined,
    techStack: [
      NEXTJS,
      REACT,
      MONGODB,
      JS,
      "Stripe API",
      "Google OAuth",
      "Tailwind",
    ],
    createdAt: "Personal",
  },
  {
    title: "Noods. Ramen App",
    description: ``,
    dateStart: new Date(2022, 12),
    dateEnd: undefined,
    techStack: ["Python", "Flask", "REST API", "MySQL", "Docker", "Ngrok"],
    createdAt: "Northeastern",
  },
  {
    title: "Forecast Finder App",
    description: ``,
    dateStart: new Date(2022, 9),
    dateEnd: undefined,
    techStack: [JS, HTMLCSS, "APIs"],
    createdAt: "Personal",
  },
  {
    title: "Todo App",
    description: ``,
    dateStart: new Date(2022, 7),
    dateEnd: new Date(2022, 8),
    techStack: [JS, HTMLCSS],
    createdAt: "Personal",
  },
]);

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const SocialsList: Social[] = [
  {
    name: "Github",
    icon: GitHubIcon,
    link: "www.github.com/nelsondong41",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "www.linkedin.com/in/nelson-dong",
  },
  {
    name: "Email",
    icon: EmailIcon,
    link: "",
    copyToClipBoard: true,
  },
];

export const SNACKBAR_TIMER = 5000;
