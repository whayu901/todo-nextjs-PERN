import { DataWhatIDoHome } from "@/constant/dataWhatIDo";
import { memo } from "react";

const TimeLineStepDevelopment = () => {
  return (
    <div>
      {DataWhatIDoHome?.map((item, index) => (
        <div
          key={index}
          className="border rounded-md border-nightLine px-5 pb-5"
        >
          <div className="flex flex-row items-center">
            <img
              src={item.urlImage}
              className="w-10 h-10"
              alt="timeline-icon-home"
            />
            <p className="text-white">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(TimeLineStepDevelopment);
