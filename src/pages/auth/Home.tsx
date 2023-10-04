import Header from "../../assets/HeaderBagzy.png";
import { Box } from "@mui/material";
const Home = () => {
  return ( 
    <Box
    height="10vh"
    sx={{
      backgroundImage: `url(${Header})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  />
  )
}

export default Home