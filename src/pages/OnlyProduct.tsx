import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'




// Esto es válido porque quantity está definido en la interfaz Product


const OnlyProduct = () => {
    const {id} = useParams()
    const item = localStorage.getItem("data");
    const data = item ? JSON.parse(item) : null;
    let product : any;

    if(id){
         product = data[parseInt(id) - 1]
    }

    const addCart = () => {
        const cart = localStorage.getItem('cart')
        const productCart = []
        if(!cart){
            product.quantity = 1
            productCart.push(product)
            const allData = JSON.stringify(productCart)
            return localStorage.setItem('cart', allData)
        }

        const dataCart = cart ? JSON.parse(cart) : []
        product.quantity = 1
        dataCart.push(product)
        const allData = JSON.stringify(dataCart)

        localStorage.setItem('cart', allData)

        
    }

    console.log(product)

    
  return (
    <Box>
        <Typography variant='h5'>{product.nameProduct}</Typography>
        <Box component="img" src={product.img}></Box>
        <Button variant='contained' onClick={addCart}>Add Cart</Button>
    </Box>
  )
}

export default OnlyProduct