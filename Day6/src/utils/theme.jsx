import { createTheme } from "@mui/material";
import { colors } from "../constant/constant";
import { fontFamily } from "@mui/system";
const customTheme = createTheme({
    palette: {
        primary: {
            main: "#F45050",
        },
        secondary: {
            main: "#3C486B"
        }
    },
    typography: {
        h1: {
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: "40px",
            padding: 20,
            color: colors.textColor
        },
        h2: {
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: "20px",
            color: colors.textColor
        },
        subtitle1: {
            color: colors.primary,
            fontFamily: "Poppins"

        },
        subtitle2: {
            color: colors.textColor,
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize:"small"
        }
    }
})

export default customTheme;