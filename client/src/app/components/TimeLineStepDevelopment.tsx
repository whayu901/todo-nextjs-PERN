import { DataWhatIDoHome } from "@/constant/dataWhatIDo";
import { memo } from "react";

const TimeLineStepDevelopment = () => {
  return (
    <div>
      {DataWhatIDoHome?.map((item, index) => (
        <div
          key={index}
          className="border rounded-md border-nightLine px-5 w-1/3 py-10 my-2"
        >
          <div className="flex flex-row items-center">
            <img
              src={item.urlImage}
              className="w-10 h-10"
              alt="timeline-icon-home"
            />
            <p className="text-white ml-3">{item.title}</p>
          </div>

          <div className="mt-3">
            <p className="text-whiteText text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(TimeLineStepDevelopment);
