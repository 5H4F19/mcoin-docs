import { StaticImageData } from "next/image";

type itemDataType = {
  icon: string | StaticImageData;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export type tech = itemDataType;
export type client = itemDataType;
export type feature = itemDataType;
export type property = itemDataType;

export type member = {
  image: string;
  name: string;
  designation: string;
  info: string;
};

export type step = itemDataType & { side?: "left" | "right" };
export type navitem = {
  title: string;
  href: string;
  gradient: "v1" | "v2" | "v3" | "v4" | "v5" | "v6";
};

export type measure = {
  amount: string;
  description: string;
};

export enum Status {
  completed = "Completed",
  ongoing = "Ongoing",
}
export type phaseitem = {
  title: string;
  status?: Status;
};
export type phase = {
  title: string;
  phaseitem: phaseitem[];
};
export type phases = phase[];
