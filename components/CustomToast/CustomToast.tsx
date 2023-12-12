import { SNACKBAR_TIMER } from "@/lib/constants";
import { Alert, AlertColor, Snackbar, useTheme } from "@mui/material";

interface ToastProps {
  message: string;
  severity: AlertColor,
  open: boolean
}

export default function CustomToast({ message, severity, open }: ToastProps) {
  return <Snackbar
    open={open}
    message="Email Sent!"
    autoHideDuration={SNACKBAR_TIMER}
    anchorOrigin={{ vertical: "top", horizontal: "left" }}
    style={{
      margin: "2vh 2vw",
      width: "fit-content",
      borderRadius: "5px",
    }}
  >
    <Alert severity={severity} sx={{ width: "100%", padding: "0.5em 1em"}}>
      {message}
    </Alert>
  </Snackbar>;
}
