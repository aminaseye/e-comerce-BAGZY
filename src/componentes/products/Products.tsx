import { Box, Button } from "@mui/material";
import Minibolso from "../../assets/minibolso/MINIBOLSO1.png";
import Granate from "../../assets/bolso_correa/GRANATE1.png";
import Coach from "../../assets/bolso_coach/COACHBEIGE1.png";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const item = localStorage.getItem("data");
  const data = item ? JSON.parse(item) : null;
  console.log(data);

  // const imagePath = "../../assets/accesorios/CORREA1.png";
  return (
    <Box>
      <Box
        height="100%"
        borderTop=".5px solid grey"
        padding="10px"
        textAlign="center"
        fontWeight="bold"
        color="#D9D9DD"
      >
        Free shipment in UE
      </Box>
      <Box margin="10px" alignContent="center" marginLeft="85px">
        <Button
          variant="contained"
          sx={{
            marginRight: "20px",
            fontWeight: "bold",
            fontSize: "13px",
            height: "40px",
            width: "120px",
            backgroundColor: "#EEE8AA",
            color: "black",
            borderRadius: "15px",
          }}
        >
          TOP VENTAS
        </Button>
        <Button
          variant="contained"
          sx={{
            marginLeft: "15px",
            fontWeight: "bold",
            fontSize: "13px",
            height: "40px",
            width: "120px",
            backgroundColor: "#EEE8AA",
            color: "black",
            borderRadius: "15px",
          }}
        >
          ACCESORIES
        </Button>
      </Box>

      <Box
        gap="20px"
        padding="20px"
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
      >
        <Box
          bgcolor="#D9D9D9"
          position="relative"
          height="220px"
          width="100%"
          gridColumn="1/2"
          onClick={() => navigate(`/view/product/${data[0].id}`)}
          sx={{
            backgroundImage: `url(${Minibolso})`,
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top ",
          }}
        >
          <hr
            color="grey"
            style={{
              position: "relative",
              top: "160px",
              width: "155px",
              marginLeft: "27px",
            }}
          />

          {/* <Divider  style={{ 
                height: '70px',
             position: 'relative',
              top: '45px',
             
              


               }} />  */}
          <Icon
            icon="mdi:cards-heart-outline"
            style={{
              marginLeft: "25px",
              position: "relative",
              top: "175px",
            }}
          />
          <p
            style={{
              position: "relative",
              top: "155px",
              fontWeight: "bold",
              fontSize: "10px",
              alignItems: "center",
            }}
          >
            {data[0].nameProduct}
          </p>
          <Box
            border="1px solid black"
            height="15px"
            width="15px"
            bgcolor="#8B4513"
            display="flex"
            flexDirection="column"
          ></Box>
        </Box>

        <Box
          bgcolor="#D9D9D9"
          // position="relative"
          height="400px"
          padding="5px"
          gridColumn="2/3"
          gridRow="1/3"
          sx={{
            //   backgroundImage: `url(${})`,
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top ",
          }}
        >
          <Box
            height="50%"
            borderBottom="1px solid black"
            display="flex"
            gap="5px"
            padding="10px"
            onClick={() => navigate(`/view/product/${data[1].id}`)}
          >
            <Box border="1px solid red" component="img" width="50%">
              {/* <img src={imagePath} alt="Mi Foto" /> */}
            </Box>
            <Box border="1px solid green" width="50%"></Box>
          </Box>
          <Box height="50%" display="flex" gap="5px" padding="10px" onClick={() => navigate(`/view/product/${data[2].id}`)}>
            <Box border="1px solid green" component="img" width="50%"></Box>
            <Box border="1px solid red" width="50%"></Box>
          </Box>
        </Box>
        <Box
          gridRow="2/4"
          width="100%"
          height="100%"
          bgcolor="#D9D9D9"
          onClick={() => navigate(`/view/product/${data[3].id}`)}
          sx={{
            backgroundImage: `url(${Granate})`,
            backgroundSize: "60%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top ",
          }}
        >
          <hr
            color="grey"
            style={{
              position: "relative",
              top: "320px",
              width: "155px",
              marginLeft: "27px",
            }}
          />
          <Icon
            icon="mdi:cards-heart-outline"
            style={{
              marginLeft: "25px",
              position: "relative",
              top: "335px",
            }}
          />
          <p
            style={{
              position: "relative",
              top: "310px",
              fontWeight: "bold",
              fontSize: "10px",
              alignItems: "center",
            }}
          >
            GLOSS VINTAGE
          </p>
          <Box display="flex" justifyContent="end">
            <Box
              border="1px solid black"
              height="15px"
              width="15px"
              bgcolor="#900C3F"
            ></Box>
            <Box
              border="1px solid black"
              height="15px"
              width="15px"
              bgcolor="black"
            ></Box>
            <Box
              border="1px solid black"
              height="15px"
              width="15px"
              bgcolor="#008000"
            ></Box>
          </Box>
        </Box>

        <Box
          width="100%"
          height="200px"
          
          sx={{
            backgroundColor: "#FFEFD5",
            boxShadow: "15px 5px 20px #EEE8AA",
            borderRadius: "30px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          AUTUM SEASON
        </Box>

        <Box
          bgcolor="#D9D9D9"
          gridColumn="1/3"
          width="100%"
          height="200px"
          onClick={() => navigate(`/view/product/${data[4].id}`)}
          sx={{
            backgroundImage: `url(${Coach})`,
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="end"
            gap="13px"
            padding="25px"

          >
            <p>LACEY</p>
            <Icon
              icon="mdi:cards-heart-outline"
              style={{
                position: "relative",
              }}
            />

            <Box
              border="1px solid black"
              height="15px"
              width="15px"
              bgcolor="#900C3F"
            ></Box>
            <Box
              border="1px solid black"
              height="15px"
              width="15px"
              bgcolor="black"
            ></Box>
            <Box
              border="1px solid black"
              height="15px"
              width="15px"
              bgcolor="#008000"
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
