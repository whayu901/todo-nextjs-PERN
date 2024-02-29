import { memo } from "react";

import { DataFeatureProject } from "@/constant/dataFeatureProject";

const ListProjects = () => {
  return (
    <>
      {DataFeatureProject?.map((item, index) => (
        <div key={index}>
          <img src={item?.urlImg} alt="img-project" />
        </div>
      ))}
    </>
  );
};

export default memo(ListProjects);
