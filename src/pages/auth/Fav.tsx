import Header from "../../assets/HeaderBagzy.png";
import { Box } from "@mui/material";

const HeaderFav = () => {
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

export default HeaderFav