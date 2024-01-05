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
    
    let sort = (b.dateEnd?.getTime() || b.dateStart.getTime()) - (a.dateEnd?.getTime() || a.dateStart.getTime());
    if(sort === 0) {
      sort = (b.title.localeCompare(a.title))
    }
    return sort;
  });
};

export const EXPERIENCE_DISPLAYED_COUNT = 3;
export const ExperienceCardInfos: CardInfo[] = sortCardInfos([
  {
    title: "HackBeanpot",
    subtitle: "Software Engineer",
    description:
      "I created the main site for the new theme and architected the internal tools backend for team sorting during the event. I also helped freshen up the site with an animation revamp. I joined the HackBeanpot team after participating in the 2023 event and now, I work with my peers towards the common goal of making the next year's hackathon greater than the last. ",
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
    description: "I helped to freshen up an internal tools UI page by redesigning and architecting the entire page with Next.js. I then reimaged the visuals with Tailwind and Bootstrap.",
    dateStart: new Date(2023, 4),
    dateEnd: new Date(2023, 7),
    techStack: [REACT, NEXTJS, JS, "Material UI", "Tailwind", "Bootstrap"],
    logo: PaynalliSystemsLogo,
    link: "https://paynalli.com",
  },
  {
    title: "Wood Mackenzie",
    subtitle: "Software Engineer Co-op",
    description: `My first co-op experience where I was immersed in the professional industry. I migrated core functionality to asynchronous task handlers and pioneered free text filtering onto critical table. I also worked as a release engineer for one of the monthly code releases to production environments. Outside of technicals, I also helped interview the following co-op cycle candidates and conducted daily code reviews/browser tests.`,
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
    description: `I created this website as an archive for my projects and work experiences. Created proudly with Next.js and Typescript and a bit of framer motion for animation.`,
    dateStart: new Date(2023, 11),
    dateEnd: undefined,
    techStack: [NEXTJS, "Styled Components", TS, JS, "Resend", "Framer Motion"],
    createdAt: "Personal",
    link: "/",
  },
  {
    title: "WiseWallet",
    description: `A top 6 placing hackathon project at HackBeanpot 2023, showcasing a Chrome extension that helps you save money by archiving transactions made with a friendly UI. The "Evil Mode" button features a payment blocker, which completely blocks all payment buttons on any website.`,
    dateStart: new Date(2023, 2),
    dateEnd: undefined,
    techStack: [REACT, "Chrome Storage API", TS, JS],
    createdAt: "Hackbeanpot",
    link: "https://devpost.com/software/wisewallet-2iqrl8",
  },
  {
    title: "Mockple",
    description: `An e-commerce platform featuring an admin panel and a customer facing front end. Takes advantage of modern frontend design with a backend that utilizes AWS S3, Stripe API, MongoDB and authentication through NextAuth and Google OAuth.`,
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
