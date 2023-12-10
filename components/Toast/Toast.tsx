import styled from "@emotion/styled";
import { useTheme } from "@mui/material";

interface ToastProps {
  message: string;
}

export default function Toast({ message }: ToastProps) {
    const theme = useTheme();
    
  const StyledToast = styled.div`
    width: 10vw;
    height: 10vh;
    background-color: ;
  `;
  return (
    <div>
      This is a custom component{" "}
      <button onClick={() => toast.dismiss(t)}>{message}</button>
    </div>
  );
}
