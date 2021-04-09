import "@fontsource/inter/variable-full.css"
import { lightBlue } from "@material-ui/core/colors"
import { createTheme } from "react-library"

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[600],
    },
  },
})

export default theme
