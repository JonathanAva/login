import React, { useState } from "react";
import { Container, Paper, TextField, Button, InputAdornment } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";


const Register = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [salary, setSalary] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
        <h1>Regístrate</h1>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            fullWidth
            required
            autoComplete="off"
            value={firstName}
            onChange={handleFirstNameChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Apellido"
            fullWidth
            required
            autoComplete="off"
            value={lastName}
            onChange={handleLastNameChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Correo Electrónico"
            fullWidth
            required
            autoComplete="off"
            value={email}
            onChange={handleEmailChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Contraseña"
            fullWidth
            type="password"
            required
            autoComplete="off"
            value={password}
            onChange={handlePasswordChange}
            sx={{ marginBottom: 2 }}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Fecha de Ingreso a la Empresa"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} fullWidth sx={{ marginBottom: 2 }} />}
            />
          </LocalizationProvider>
          <TextField
            label="Salario Mensual"
            fullWidth
            type="number"
            required
            autoComplete="off"
            value={salary}
            onChange={handleSalaryChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  $
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth type="submit">
            Registrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
