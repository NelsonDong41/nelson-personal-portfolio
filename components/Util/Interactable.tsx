import { toggleCursorHover } from "@/lib/cursorEffect";
import RemoveOverflow from "./RemoveOverflow";
import { CSSProperties } from "react";

interface InteractableProps {
  children: React.ReactElement;
  scaleSize?: string;
  onMouseIn?: () => void;
  onMouseOut?: () => void;
  onMouseClick?: (copyToClipboard?: boolean) => void;
  style?: CSSProperties;
}

const Interactable = ({
  children,
  scaleSize = "1",
  onMouseIn,
  onMouseOut,
  onMouseClick,
  style
}: InteractableProps) => {
  const handleMouseIn = () => {
    toggleCursorHover(true, scaleSize);
    onMouseIn && onMouseIn();
  };

  const handleMouseOut = () => {
    toggleCursorHover(false, scaleSize);
    onMouseOut && onMouseOut();
  };

  const handleMouseClick = () => {
    onMouseClick && onMouseClick();
  };

  return (
    <div
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      onMouseDown={handleMouseClick}
      style={style}
    >
      {children}
    </div>
  );
};
export default Interactable;
