import { memo, useCallback } from "react";

import { DataFeatureProject } from "@/constant/dataFeatureProject";
import Chip from "../chip";

const ListProjects = () => {
  const openNewTab = useCallback((url?: string) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4  auto-rows-fr">
        {DataFeatureProject?.map((item, index) => (
          <div key={index} className="p-3">
            <div className="rounded-[15px] overflow-hidden">
              <img src={item?.urlImg} alt="img-project" />
            </div>
            <div className="flex flex-row justify-between mt-4">
              <Chip title={item.typeProject} />
              <Chip title={item.typeWork} />
              <Chip
                title={"View Project"}
                onClick={() => openNewTab(item.urlProject)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <button className="text-white border py-2 px-3 font-bold rounded-lg text-xl">
          Explore all the project
        </button>
      </div>
    </div>
  );
};

export default memo(ListProjects);
