import Image from "next/image"
import Interactable from "../Util/Interactable"
import { useTheme } from "@mui/material";


const ProfilePic = () => {
  return (
    <Interactable scaleSize={0}>
        <Image priority={true}  src = "/profilepic.png" alt="" width={300} height={300} draggable = {false} style={{borderRadius: "50%"}}/>
    </Interactable>
  )
}

export default ProfilePic