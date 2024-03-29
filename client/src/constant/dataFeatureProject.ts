export interface IFeatureProject {
  name: string;
  typeWork: string;
  typeProject: string;
  urlImg: string;
  urlProject: string;
  description: string;
}

export const DataFeatureProject: IFeatureProject[] = [
  {
    name: "Asian Agri App",
    typeProject: "Mobile App",
    typeWork: "Design Mobile App",
    urlImg: "/images/asian-agri.png",
    urlProject: "https://www.asianagri.com/en/",
    description: "Has responsible for create new app for the ",
  },
  {
    name: "K-OINS",
    typeProject: "Mobile App",
    typeWork: "Mobile App & Dashboard",
    urlImg: "/images/k-oins.png",
    urlProject:
      "https://play.google.com/store/apps/details?id=id.co.koneksindo.kadenceandroidpanel&hl=in",
    description:
      "I create new app for kadence international. Because basically K-oins is on of subsidaries from kadence international business. K-oins is actually app for getting and gathering data from user about their thought about particulary topic. Start from automotive, customer good and more. I have responsibility to create K-OINS with flutter and react native.",
  },
  {
    name: "E-Langsung",
    typeProject: "Mobile App",
    typeWork: "Mobile App & Dashboard",
    urlImg: "/images/elangsung.png",
    urlProject:
      "https://play.google.com/store/apps/details?id=com.elangsung.club&hl=en&gl=US",
    description:
      "Elangsung is fun project that i ever have. Because i have multiple responsibility in here. Because i handled so much role start from mobile developer and also i have handled for website developer. Stack that i used mostly is ReactJS and flutter for mobile app",
  },
];
