import { DataListTechStack } from "@/constant/dataListTechStack";
import { memo } from "react";

const ListTechStack = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {DataListTechStack?.map((item, index) => (
        <div
          key={index}
          className="border rounded-md border-nightLine px-5 pb-5 pt-20"
        >
          <div className="border rounded-md border-nightLine inline-block p-2">
            <img src={item.urlImg} alt="icon-stack" className="w-5 h-5" />
          </div>
          <div className="my-2">
            <p className="text-white text-xl">{item.stackName}</p>
          </div>
          <div>
            <p className="text-whiteText text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ListTechStack);
