import { Box, Button, TextField, Typography } from "@mui/material";
import Elipse from "../../assets/Ellipse6.png";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${Elipse})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="50%"
        width="100%"
        gap="15px"
      >
        <Typography variant="h4" textAlign="start" width="80%">
          Login
        </Typography>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          width="80%"
          gap="30px"
          onSubmit={onSubmit}
        >
          <TextField
            id="standard-basic"
            label="EMAIL"
            variant="standard"
            {...register("email")}
          />
          <TextField
            id="standard-basic"
            type="password"
            label="PASSWORD"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            variant="standard"
          />
          <Typography textAlign="end">Forget password?</Typography>
          <Typography textAlign="center">
            You do not have an account <NavLink to="/register">Signup</NavLink>
          </Typography>
          <Button variant="contained" type="submit">
            LOGIN
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
