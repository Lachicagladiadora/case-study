import { ReactNode } from "react";

export type page = "home" | "roofing" | "about" | "contact" | "affiliates";

export type iconContent = {
  imgSrc: string;
  text?: string;
};

export type paragraphType = string | iconContent | ReactNode;

export type subContent = {
  title?: string;
  imageSrc?: string[];
  paragraphs: paragraphType[];
  callToAction?: string;
};

export type contentType = {
  subTitle?: string;
  content: subContent[];
};

export type allContent = {
  title: string;
  content: contentType[];
}[];
