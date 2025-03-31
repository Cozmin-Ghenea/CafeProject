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
import "./Login.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  
//  keep it just in case

  function decodeBase64(encodedStr:string ) {
    return new TextDecoder().decode(Uint8Array.from(atob(encodedStr), c => c.charCodeAt(0)));
  }
  
  function encodeBase64(str: string) {
    return btoa(String.fromCharCode(...new TextEncoder().encode(str)));
  }


  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");


    const activeUser = users.find(
      (user: { isActive: boolean }) => user.isActive,
    );
    if (activeUser) {
      navigate("/");
    }
  }, [navigate]);
  const encodedPassword = encodeBase64(password)
  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === encodedPassword,
    );

    if (userIndex !== -1) {
      users = users.map((u: any, index: any) => ({
        ...u,
        isActive: index === userIndex,
      }));
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/");
    } else {
      setEmailError("Invalid email or password");
      setPasswordError("Invalid email or password");
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
      <h1 className="Register">Login</h1>
      <CardContent>
        <FormControl fullWidth margin="normal" error={!!emailError}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <FormHelperText>{emailError}</FormHelperText>}
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
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          className="ButtonForm"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <p className="Redirect">
          You don't have an account? Register here&nbsp;
          <Link to="/Register">Register</Link>
        </p>
      </CardContent>
    </Card>
  );
}
