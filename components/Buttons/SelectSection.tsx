import { Box, Button } from "@mui/material";
import { Link } from "react-scroll";

interface SelectSectionsButtonProps {
  sectionsList: String[];
}

export default function SelectSectionsButton(props: SelectSectionsButtonProps) {
  const sectionsList = props.sectionsList;
  return (
    <Box>
      {sectionsList?.map((sectionName) => {

        const cleanedID = sectionName.toLowerCase().trim() + "id"
        return (<Button variant="text">
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
