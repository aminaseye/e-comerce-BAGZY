import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import Header from "../../assets/HeaderBagzy.png";
import { useEffect, useState } from "react";


const HeaderCheckout = () => {
  const item = localStorage.getItem("cart");
  const data = item ? JSON.parse(item) : null;
  const [total, setTotal] = useState(0)
  const [isUpdate, setIsUpdate] = useState(false)  

  useEffect(() => {
     let totalPayment = 0
      data.forEach((product:any) => {
        totalPayment += product.price * product.quantity
      })
      setTotal(totalPayment)
  },[isUpdate])

  const deleteProduct = (id:number) => {
    const newData = data.filter((product:any) => product.id !== id)
    const updateCart = JSON.stringify(newData)
    localStorage.setItem('cart', updateCart)
    setIsUpdate(!isUpdate)
  }


  return (
<Box>
  <Box component="img" src={Header} width="100%" height="60px" />
  <Box bgcolor="gray">
    <Typography variant="body1" textAlign="center" >CHECKOUT</Typography>
  </Box>
  {/* Nos muestra en donde nos econtramos en el momento */}
  <Box display="flex" justifyContent="center" p="5px">
        <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          SHIPPING
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          PAYMENT
        </Link>
        <Typography color="text.primary">SUMMARY</Typography>
      </Breadcrumbs>
  </Box>
  {/* Esta seccion nos muestra todos los items en el carrito  */}
  <Box display="flex" flexDirection="column" gap="20px" alignItems="center" pt="20px">
    {data.map((product:any) => {
      return  <Box width="80%" height="150px" bgcolor="gray" p="10px" display="flex" flexDirection="column" gap="5px">
      <Box component="img" src={product.img} bgcolor="white" height="70%" width="100%" sx={{ objectFit:'cover' }} />

      <Box display="flex" justifyContent="space-between">
        <Typography>{product.nameProduct}</Typography>
        <Box width="30px" height="25px" bgcolor="green"></Box>
        <Box display="flex">
           <button>+</button>
           <p>1</p>
           <button>-</button>
        </Box>
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </Box>
  </Box>
    })}
    
     
     
  </Box>
  {/* Esta seccion nos mostrar el total y el boton pagar */}
  <Box bgcolor="gray" display="flex" justifyContent="space-between" alignItems="center" padding="15px 5px" position="absolute" bottom={0} width="100%">
    <Typography variant="body1">TOTAL: €{total}</Typography>
    <Button variant="contained">Payment</Button>
  </Box>
</Box>
  
  )
}

export default HeaderCheckout