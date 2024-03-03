import { memo } from "react";

interface ChipProps {
  title: string;
  onClick?: () => void;
}

const Chip = ({ title, onClick }: ChipProps) => {
  return (
    <div
      className={`border border-white rounded-[50px] text-white text-center py-2 px-3 ${
        onClick ? "cursor-pointer" : "cursor-default"
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default memo(Chip);
