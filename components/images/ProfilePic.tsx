import Image from "next/image";
import Interactable from "../Util/Interactable";
import { useTheme } from "@mui/material";

const ProfilePic = () => {
  return (
    <Interactable scaleSize={0}>
      <Image
        priority={true}
        src="/profilepic.png"
        alt=""
        draggable={false}
        width={500}
        height={500}
        style={{ borderRadius: "50%", width: "25vh", height: "25vh" }}
      />
    </Interactable>
  );
};

export default ProfilePic;
