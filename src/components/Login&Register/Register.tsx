import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
} from "@mui/material";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateEmail = (email: string) => /.+@.+\..+/.test(email);

  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const activeUser = users.find(
      (user: { isActive: boolean }) => user.isActive,
    );
    if (activeUser) {
      navigate("/");
    }
  }, [navigate]);

  const handleRegister = () => {
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (name.length < 1) {
      setNameError("We would love to know what is your name");
      valid = false;
    } else {
      setNameError("");
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (valid) {
      const newUser = {
        email,
        password,
        name,
        isActive: true,
      };

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/");
    }
  };

  return (
    <Card
      className="Form"
      sx={{ width: 400, margin: "auto", mt: 5, p: 3, boxShadow: 3 }}
    >
      <Link to="/">
        <HomeIcon fontSize="large" />
      </Link>
      <CardHeader />
      <h1 className="Register">Register</h1>
      <CardContent>
        <FormControl fullWidth margin="normal" error={!!emailError}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <FormHelperText>{emailError}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth margin="normal" error={!!nameError}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <FormHelperText>{nameError}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth margin="normal" error={!!passwordError}>
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <FormHelperText>{passwordError}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth margin="normal" error={!!confirmPasswordError}>
          <TextField
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && (
            <FormHelperText>{confirmPasswordError}</FormHelperText>
          )}
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRegister}
          className="ButtonForm"
          sx={{ mt: 2 }}
        >
          Register
        </Button>
        <p className="Redirect">
          You already have an account please press here&nbsp;
          <Link to="/Login">Login </Link>
        </p>
      </CardContent>
    </Card>
  );
}
