import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BrandIconProps = {
  iconName: IconName;
}

const BrandIcon = ({ iconName }: BrandIconProps) => 
  <FontAwesomeIcon icon={["fab", iconName]} className="text-[2.5rem]" />;

export default BrandIcon;