import { Box, Button } from "@mui/material";
import { Link } from "react-scroll";
import { sectionNames } from "@/util/constants";

export default function SelectSectionsButton() {
  return (
    <Box>
      {sectionNames.map((sectionName) => {
        const cleanedID = sectionName.toLowerCase().trim() + "-section"
        return (<Button key={cleanedID} variant="text">
          <Link
            activeClass="active"
            to={cleanedID}
            smooth={true}
            duration={500}
          >
            {sectionName}
          </Link>
        </Button>
      )})}
    </Box>
  );
}
