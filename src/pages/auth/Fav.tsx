import Header from "../../assets/HeaderBagzy.png";
import { Box, Icon, Typography } from "@mui/material";

const HeaderFav = () => {
  return (
    <>
       <Box>
    <Box component="img" src={Header} width="100%" height="60px" />
    <Box bgcolor="gray">
      <Typography variant="body1" textAlign="center" >FAV</Typography>
    </Box>
   
        
      </Box>
      <Box display="flex" flexDirection="column" gap="50px" p="35px">
        <Box
          border="1px solid black"
          width="320px"
          height="250px"
          bgcolor="#D9D9D9"
        >
           <hr
            color="grey"
            style={{
              position: "relative",
              top: "180px",
              width: "320px",
            }}
          />
        <Box display="flex"
            flexDirection="row"
           gap="25px"
           pt="190px">
          <p>icono like</p>
          <Typography>Name of the product</Typography>
          <p>Color</p>
          <p>icono cesta</p>
</Box>

        </Box>

        <Box
          border="1px solid black"
          width="320px"
          height="250px"
          bgcolor="#D9D9D9"
        >
          <hr
            color="grey"
            style={{
              position: "relative",
              top: "190px",
              width: "320px",
            }}
          />
          <Box
            display="flex"
            flexDirection="row"
            gap="25px"
            pt="190px"
          >
            <p>icono like</p>
            <Typography>Name of the product</Typography>
            <p>Color</p>
            <p>icono cesta</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeaderFav;
