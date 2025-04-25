export type page = "home" | "roofing" | "about" | "contact" | "affiliates";

export type bgColor = "light" | "dark-blue" | "light-blue" | "dark" | "img";

export type iconContent = {
  imgSrc: string;
  text?: string;
};

export type paragraphType = string | iconContent;

export type subContent = {
  isImgLeft?: boolean;
  conceptTitle?: string;
  imageSrc?: string[];
  paragraphs: paragraphType[];
  callToAction?: string;
};

export type contentType = {
  subTitle?: string;
  bgColor: bgColor;
  content: subContent[];
};

export type allContent = {
  sectionTitle: string;
  content: contentType[];
}[];
