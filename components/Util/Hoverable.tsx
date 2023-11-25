import { toggleCursorHover } from "@/util/cursorEffect";

interface HoverableProps {
  children: React.ReactNode;
  scaleSize?: number
}

const Hoverable = ({children, scaleSize = 1}: HoverableProps) => {

  const handleMouseIn = () => {
    toggleCursorHover(true, scaleSize);
  };

  const handleMouseOut = () => {
    toggleCursorHover(false, scaleSize);
  };
  
  return <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
    {children}
  </div>
}

export default Hoverable