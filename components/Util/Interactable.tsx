import { toggleCursorHover } from "@/lib/cursorEffect";
import RemoveOverflow from "./RemoveOverflow";

interface InteractableProps {
  children: React.ReactElement;
  scaleSize?: string;
  onMouseIn?: () => void;
  onMouseOut?: () => void;
  onMouseClick?: (copyToClipboard?: boolean) => void;
}

const Interactable = ({
  children,
  scaleSize = "1",
  onMouseIn,
  onMouseOut,
  onMouseClick,
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
    >
      <RemoveOverflow>{children}</RemoveOverflow>
    </div>
  );
};
export default Interactable;
