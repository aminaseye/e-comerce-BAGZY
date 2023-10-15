
import Header from "../../assets/HeaderBagzy.png";
import { Box, Typography } from "@mui/material";
import Fondo from "../../assets/Fondo/contact.png";

const HeaderContact = () => {
  return (
    <Box>
    <Box component="img" src={Header} width="100%" height="60px" />
    <Box bgcolor="gray">
      <Typography variant="body1" textAlign="center" >Contact  us!</Typography>
    </Box>
    <Box  sx=
    {{ backgroundImage:`url(${Fondo})`,
   backgroundRepeat: "no-repeat",
   backgroundSize: "100%"
   
  }}>
    <Box 
   
   textAlign="center"
    marginLeft="40px"
    borderRadius="20px"
    height="100px"
    width="320px"
    border="1px solid black"
    bgcolor="rgba(255, 255, 0, 0.5)">
<h1>Let's build something great together</h1> 
</Box>
<Box></Box>
    </Box>
    </Box>

  )
}

export default HeaderContact