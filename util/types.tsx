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
