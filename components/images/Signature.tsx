import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function Signature() {

    const draw = {
        hidden: { pathLength : 0, opacity: 0},
        visible: (i : number) => {
            const delay = 1 + i;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: {delay, type: "spring", duration: 3},
                    opacity: {delay, duration: 0.03},
                }
            }
        }
    }
  return (
    <Box sx={{width: "max-content"}}>
        <motion.div>
        <motion.svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="300.000000pt"
            height="240.000000pt"
            viewBox="0 0 300.000000 240.000000"
            preserveAspectRatio="xMidYMid meet"
        >
            <g
            transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="white"
            >
            <motion.path stroke="white" strokeWidth="20" strokeLinecap="round" variants={draw}
                d="M872 1372 c-34 -139 -63 -222 -80 -222 -12 0 -52 77 -93 175 -71 175
    -80 173 -152 -44 -60 -179 -65 -201 -43 -201 8 0 29 44 54 118 54 156 72 196
    82 186 4 -5 22 -43 39 -85 57 -139 113 -206 147 -179 17 15 66 164 90 276 16
    77 15 114 -3 114 -4 0 -23 -62 -41 -138z"
            />
            <motion.path stroke="white" strokeWidth="20" strokeLinecap="round" variants={draw}
                d="M1306 1468 c-4 -10 -75 -249 -91 -304 -4 -14 -121 -44 -170 -44 -32
    0 -36 3 -33 22 2 16 28 39 78 73 47 31 76 58 78 71 4 28 -15 74 -31 74 -22 0
    -73 -43 -121 -102 -56 -67 -62 -113 -20 -155 23 -23 30 -25 82 -19 30 4 75 15
    100 26 l44 20 20 -25 c22 -28 35 -30 91 -14 57 15 46 30 -18 23 l-55 -7 0 41
    c0 22 16 96 36 164 20 68 37 132 38 142 1 22 -22 34 -28 14z m-172 -167 c10
    -16 -78 -80 -92 -67 -5 6 67 75 80 76 4 0 9 -4 12 -9z"
            />
            <motion.path stroke="white" strokeWidth="20" strokeLinecap="round" variants={draw}
                d="M1495 1346 c-27 -18 -59 -43 -70 -55 -24 -28 -15 -35 70 -51 108 -20
    109 -35 3 -92 -55 -29 -78 -51 -66 -64 3 -2 30 4 59 15 65 25 129 75 129 101
    0 24 -45 48 -105 57 -25 3 -45 9 -45 14 0 4 25 23 55 41 32 19 54 39 52 48 -4
    26 -30 21 -82 -14z"
            />
            <motion.path strokeWidth="20" strokeLinecap="round" variants={draw}
                d="M2074 1304 c-21 -14 -49 -36 -62 -47 l-23 -22 3 39 c6 75 -19 50 -53
    -53 -46 -141 -33 -145 70 -24 56 66 111 113 133 113 16 0 18 -43 3 -98 -19
    -74 -20 -135 -2 -130 6 3 12 16 13 29 0 13 8 57 18 97 24 94 17 122 -28 122
    -19 0 -50 -11 -72 -26z"
            />
            <motion.path strokeWidth="20" strokeLinecap="round" variants={draw}
                d="M1726 1299 c-31 -25 -76 -111 -76 -147 0 -13 11 -34 25 -47 67 -68
    185 14 185 129 0 71 -77 109 -134 65z m98 -25 c19 -19 20 -26 3 -67 -14 -32
    -88 -107 -106 -107 -15 0 -41 30 -41 46 0 42 79 144 111 144 10 0 25 -7 33
    -16z"
            />
            </g>
        </motion.svg>
        </motion.div>
    </Box>
  );
}
