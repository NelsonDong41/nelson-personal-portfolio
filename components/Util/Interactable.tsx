import { toggleCursorHover } from "@/lib/cursorEffect";

interface InteractableProps {
  children: React.ReactNode;
  scaleSize?: number;
  onMouseIn? : () => void;
  onMouseOut? : () => void;
  onMouseClick? : (copyToClipboard? : boolean) => void;
}

const Interactable = ({children, scaleSize = 1, onMouseIn, onMouseOut, onMouseClick}: InteractableProps) => {

  const handleMouseIn = () => {
    toggleCursorHover(true, scaleSize);
    onMouseIn && onMouseIn()
  };

  const handleMouseOut = () => {
    toggleCursorHover(false, scaleSize);
    onMouseOut && onMouseOut()
  };

  const handleMouseClick = () => {
    onMouseClick && onMouseClick()
  }
  
  return <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} onMouseDown={handleMouseClick}>
    {children}
  </div>
}

export default Interactable