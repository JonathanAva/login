import React, { useState } from "react";
import { Container, Paper, TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Importa los iconos

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
        <h1>Bienvenido</h1>

        <form action="/" method="post">
          <TextField
            label="Correo electronico"
            fullWidth
            required
            autoComplete="off"
            sx={{ marginBottom: 2 }} 
          />
          <TextField
            label="Contraseña"
            fullWidth
            type={showPassword ? "text" : "password"} 
            required
            autoComplete="off"
            sx={{ marginBottom: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <p>
            <a href="#">Olvidaste la contraseña?</a>
          </p>

          <Button variant="contained" color="primary" fullWidth>
            iniciar seción
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LogIn;
