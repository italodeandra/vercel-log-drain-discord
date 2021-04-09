import { FC } from "react"
import { Box } from "@material-ui/core"

const FullBoxCenter: FC = ({ children }) => (
  <Box
    sx={{
      p: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
    }}
  >
    {children}
  </Box>
)

export default FullBoxCenter
