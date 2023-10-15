import Header from "../../assets/HeaderBagzy.png";
import Footer from "../../assets/FooterBagzy.png";
import { Box } from "@mui/material";
import NavBar from "../../componentes/navBar/NavBar";
import Products from "../../componentes/products/Products";
import { Icon } from "@iconify/react";


const Home = () => {
   
  
   
  return (
    <Box height="150vh" display="flex" flexDirection="column">
      <Box
        height="90px"
        sx={{
          backgroundImage: `url(${Header})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <Box height="100%">
        <NavBar />

        <Products />
      </Box>
      <Box
        height="100px"
        sx={{
          backgroundImage: `url(${Footer})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Icon icon="solar:user-bold" />
        <Icon icon="mdi:logout" />
        <Box marginLeft="3em" marginTop="-1.2em">
          Contact
        </Box>
        <Box display="flex" fontWeight="bold" marginLeft="5em" fontSize="30px">
          <Icon icon="mdi:copyright" /> copyright 2023
          <Icon icon="mdi:trademark" />
        </Box>
        <Box fontWeight="bold" marginLeft="1em" marginTop="-1em">
          Join Us!!
        </Box>
        <Box>Valencia, Spain</Box>
        <Box fontSize="20px" marginLeft="22em">
          <Icon icon="mdi:instagram" />
          <Icon icon="mdi:facebook" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
