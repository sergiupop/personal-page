import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BrandIconProps = {
  iconName: IconName;
  className?: string;
}

const BrandIcon = ({ iconName, className }: BrandIconProps) => 
  <FontAwesomeIcon icon={["fab", iconName]} className={`text-[2.5rem] hover:animate-flip hover:text-red-600 transition-color ease-in duration-500 ${className}`} />;

export default BrandIcon;