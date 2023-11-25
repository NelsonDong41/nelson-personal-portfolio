import Image from "next/image"
import Hoverable from "../Util/Hoverable"
import { useTheme } from "@mui/material";


const ProfilePic = () => {
  const theme = useTheme();
  return (
    <Hoverable scaleSize={0}>
        <Image src = "/profilepic.png" alt="" width={300} height={300} draggable = {false} style={{borderRadius: "50%"}}/>
    </Hoverable>
  )
}

export default ProfilePic