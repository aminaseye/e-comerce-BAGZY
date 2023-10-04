import { Box } from "@mui/material";
import Header from "../../assets/HeaderBagzy.png";

const HeaderCheckout = () => {
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

export default HeaderCheckout