import { StaticImageData } from "next/image";

import AsianAgriImage from "../../assets/images/asian-agri.png";
import ElangsungImage from "../../assets/images/elangsung.png";
import KOINSImage from "../../assets/images/k-oins.png";

export interface FeatureProjectProps {
  name: string;
  typeWork: string;
  typeProject: string;
  urlImg: string | StaticImageData;
  urlProject: string;
  description: string;
}

export const DataFeatureProject: FeatureProjectProps[] = [
  {
    name: "Asian Agri App",
    typeProject: "Mobile App",
    typeWork: "Design Mobile App",
    urlImg: AsianAgriImage,
    urlProject: "https://www.asianagri.com/en/",
    description: "Has responsible for create new app for the ",
  },
  {
    name: "K-OINS",
    typeProject: "Mobile App",
    typeWork: "Mobile App & Dashboard",
    urlImg: KOINSImage,
    urlProject:
      "https://play.google.com/store/apps/details?id=id.co.koneksindo.kadenceandroidpanel&hl=in",
    description: "",
  },
  {
    name: "E-Langsung",
    typeProject: "Mobile App",
    typeWork: "Mobile App & Dashboard",
    urlImg: ElangsungImage,
    urlProject:
      "https://play.google.com/store/apps/details?id=com.elangsung.club&hl=en&gl=US",
    description: "",
  },
];
