import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ProjectCardInfos, monthNames } from "@/lib/constants";
import {
  StyledTechBadge,
  StyledTechStack,
} from "../Sections/Experience/ContentCard";
import { Box, Container, Theme, styled, useTheme } from "@mui/material";
import { StyledClosingLink } from "../Sections/Experience/ExperienceSection";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Interactable from "../Util/Interactable";
import StyledLink from "../Sections/SectionTypography";

interface Column {
  id: "name" | "dateCreated" | "createdLocation" | "tech";
  label: string;
  minWidth?: number;
  align?: "right" | "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "dateCreated", label: "Date", minWidth: 100 },
  {
    id: "createdLocation",
    label: "Created At",
    minWidth: 170,
    align: "right",
  },
  {
    id: "tech",
    label: "Tech Stack",
    minWidth: 170,
    align: "center",
  },
];

interface ProjectData {
  name: string | Element;
  dateCreated: string;
  createdLocation: string;
  tech: string[];
}

function createData(
  name: string | Element,
  dateCreated: string,
  createdLocation: string = "",
  tech: string[] = []
): ProjectData {
  return { name, dateCreated, createdLocation, tech };
}

function formatDateCreated(dateStart: Date, dateEnd: Date | undefined) {
  const dateStartString = `${monthNames[dateStart?.getMonth()].slice(
    0,
    3
  )} ${dateStart?.getFullYear()}`;

  let dateEndString;
  if (!dateEnd) {
    dateEndString = "";
  } else {
    if (dateEnd.toDateString() === new Date().toDateString())
      dateEndString = "Present";
    else
      dateEndString = `${monthNames[dateEnd.getMonth()].slice(
        0,
        3
      )} ${dateEnd.getFullYear()}`;
  }

  const displayedDate = `${dateStartString} 
  ${!!dateEnd ? " - " : ""}
  ${dateEndString}`;
  return displayedDate;
}

const StyledArrowOutwardIcon = styled(ArrowOutwardIcon)<{
  hovered: string;
  current: string;
}>`
  transition: all 400ms ease;
  transform: ${(props) =>
    props.hovered === props.current
      ? "translate(-10%, -20%)"
      : "translate(-40%, 0%)"};
`;

export default function ProjectTable() {
  const [hoveredLink, setHoveredLink] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const theme = useTheme();

  const rows = ProjectCardInfos.map((projectInfo) => {
    const {
      title,
      subtitle,
      description,
      dateStart,
      dateEnd,
      link,
      techStack,
      image,
      logo,
      createdAt,
    } = projectInfo;

    return createData(
      createClickableTitle(title, link),
      formatDateCreated(dateStart, dateEnd),
      createdAt,
      techStack
    );
  });

  function createClickableTitle(title: string, link: string = ""): any {
    if (!!link) {
      return (
        <Interactable
          onMouseIn={() => setHoveredLink(title)}
          onMouseOut={() => setHoveredLink("")}
        >
          <div style={{ display: "flex" }}>
            <StyledClosingLink
              href={link}
              hovered={hoveredLink.toString()}
              current={title}
              color={theme.palette.text.primary}
              target="_blank"
            >
              {title}
            </StyledClosingLink>
            <StyledArrowOutwardIcon
              hovered={hoveredLink.toString().toString()}
              current={title}
              style={{ margin: "0 0 1vh 0" }}
            ></StyledArrowOutwardIcon>
          </div>
        </Interactable>
      );
    }
    return (
      <StyledClosingLink
        href="#"
        hovered={hoveredLink.toString()}
        current={title}
        color={theme.palette.text.primary}
      >
        {title}
      </StyledClosingLink>
    );
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "80%", height: "fit-content" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: ProjectData) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.name.toString() + row.tech.join()}
                  >
                    {columns.map((column) => {
                      let value: any = row[column.id];
                      if (column.id === "tech" && value instanceof Array) {
                        value = (
                          <StyledTechStack style={{ margin: "0" }}>
                            {value.map((tech) => {
                              return (
                                <StyledTechBadge
                                  key={tech}
                                  style={{
                                    backgroundColor:
                                      theme.palette.text.secondary,
                                  }}
                                >
                                  {tech}
                                </StyledTechBadge>
                              );
                            })}
                          </StyledTechStack>
                        );
                      }

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
