import { Box, Button, TextField, Typography } from "@mui/material";
import Elipse from "../../assets/Ellipse6.png";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Register = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = handleSubmit((data) => console.log(data));

  const inputs = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Email", name: "email", type: "text" },
    { label: "Password", name: "password", type: "password" },
  ];

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
          Register
        </Typography>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          width="80%"
          gap="30px"
          onSubmit={onSubmit}
        >
          {inputs.map((element) => {
            console.log(element);
            return (
              <TextField
                id="standard-basic"
                label={element.label}
                variant="standard"
                {...register(element.name)}
              />
            );
          })}

          <Typography textAlign="center">
            Do you already have an account?{" "}
            <NavLink to="/login">Log in</NavLink>
          </Typography>
          <Button variant="contained" type="submit">
            Create Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
