import { z } from "zod";

export type CardInfo = {
  title : string,
  subtitle? : string,
  description: string,
  dateStart : Date,
  dateEnd? : Date,
  link? : string,
  techStack? : string[],
  image? : string,
  logo?: any,
  createdAt?: string,
}

export type Social = {
  icon: any;
  link: string;
  copyToClipBoard?: boolean;
  name: string;
}

export type ColorModeContent = {
  toggleColorMode: () => void;
}

export const ContactFormSchema = z.object({
  name: z.string().min(1, {message: 'Please enter a name!'}),
  email: z.string().min(1).email('Invalid email'),
  message: z.string().min(6, {message: 'Please send a message longer than at least 6 characters!'})
});

export enum CommonTechStack {
  NEXTJS = "Next.js",
  REACT = "React",
  MONGODB = "MongoDB",
  JS = "JavaScript",
  TS = "TypeScript",
  JAVA = "Java",
  HTMLCSS = "HTML/CSS",
}