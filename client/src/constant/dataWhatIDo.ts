export interface IDataWhatIDo {
  title: string;
  description: string;
  urlImage?: string;
}

export const DataWhatIDoHome: IDataWhatIDo[] = [
  {
    title: "Planning",
    urlImage: "images/planning.png",
    description: "Define goal,wireframe,design concept, content write.",
  },
  {
    title: "Design",
    urlImage: "images/design.png",
    description:
      "Visual design, branding elements, color, typography and images.",
  },
  {
    title: "Development",
    urlImage: "images/development.png",
    description:
      "Develop website or app with responsive design that works across different device.",
  },
  {
    title: "Launch",
    urlImage: "images/launch.png",
    description:
      "Once the website or apps has been throughly tested abd approved, then we launch it to the public.",
  },
];
