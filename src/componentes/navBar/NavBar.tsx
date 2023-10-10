import { Box, Button } from "@mui/material";
import { Icon } from "@iconify/react";

const NavBar = () => {
  return (
    <Box
      
     
      alignItems="center"
      display="flex"
      padding="10px"
      justifyContent="space-between"
    >
      <Box display="flex" gap="20px">
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            height: "20px",
            width: "100px",
            fontSize: "14px",
            backgroundColor: "#EEE8AA",
            color: "black",
          }}
        >
          Sign in
        </Button>
        <Button
          variant="contained"
          sx={{
            
            fontWeight: "bold",
            fontSize: "13px",
            height: "20px",
            width: "100px",
            backgroundColor: "#D9D9D9",
            color: "black",
          }}
        >
          login
        </Button>
      </Box>

      <Box marginRight=".5em">
        <Icon width="30px" icon="ic:baseline-search" />
        <Icon width="30px" icon="tabler:home" />
        <Icon width="30px" icon="tabler:basket-filled" />
        <Icon width="30px" icon="tabler:heart-filled" />
      </Box>
    </Box>
  );
};

export default NavBar;
