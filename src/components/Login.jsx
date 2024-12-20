import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";

const Login = () => {
  const preventDefault = (event) => event.preventDefault();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   if (userName === "user" && password === "password") {
  //     navigate("/couses");
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // };

  const goToCourses = () => {
    navigate("/couses");
  };
  const goToHomePage = () => {
    navigate("/header");
  };
  const goToLearning = () => {
    navigate("/learning");
  };

  return (
    <Box
      sx={{
        background: "#222222cf",
        width: "100%",
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "#fff",
          background: "#222222",
        }}>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
          onClick={preventDefault}>
          <Typography
            onClick={goToHomePage}
            variant="body1"
            component="a"
            href="#features"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                color: "#0BA7AA",
                transition: "0.2s",
              },
            }}>
            Home Page
          </Typography>
          <Typography
            onClick={goToCourses}
            variant="body1"
            component="a"
            href="#features"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                color: "#0BA7AA",
                transition: "0.2s",
              },
            }}>
            Courses
          </Typography>
          <Typography
            onClick={goToLearning}
            variant="body1"
            component="a"
            href="#features"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                color: "#0BA7AA",
              },
              transition: "0.2s",
            }}>
            Learn
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="#features"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                color: "#0BA7AA",
              },
              transition: "0.2s",
            }}>
            Blog
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="#features"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                color: "#0BA7AA",
              },
              transition: "0.2s",
            }}>
            Instructors
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Button
            onChange={(e) => setUsername(e.target.value)}
            variant="text"
            sx={{ color: "#fff" }}>
            Login
          </Button>
          <Button className="signIn" variant="text" sx={{ color: "#DDD" }}>
            Sign In
          </Button>
          <SearchOutlinedIcon sx={{ color: "#FFF", cursor: "pointer" }} />
        </Box>
      </Box>

      <div className="line"></div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          justifyContent: "center",
          flexDirection: "column",
          height: "60vh",
        }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "2.5rem",
            textAlign: "center",
            justifyContentL: "center",
            color: "#FFF",
            pb: "2rem",
          }}>
          Sign in to your account
        </Typography>

        <FormControl style={{ width: "30%" }} variant="standard">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            id="component-simple"
            sx={{
              backgroundColor: "#FFF",
              padding: "7px 20px",
              borderRadius: "4px",
            }}
            placeholder="UserName"
          />
        </FormControl>

        <FormControl
          defaultValue="Password"
          sx={{ m: 1 }}
          style={{ width: "30%" }}
          variant="standard">
          <InputLabel htmlFor="Password">Password</InputLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            sx={{
              backgroundColor: "#FFF",
              padding: "5px ",
              borderRadius: "4px",
            }}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    color: "#ff00008f",
                    "& svg": {
                      color: "#0ca7aa96",
                      "&:hover": {
                        color: "#0BA7AA", // لون عند التمرير
                      },
                    },
                  }}
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Box sx={{ display: "flex", gap: "13rem",pb: "2rem" }}>
          <Typography
            sx={{ color: "#fff", fontSize: "13px", cursor: "pointer" }}>
            Remeber password
          </Typography>
          <Typography
            sx={{
              color: "#ff0000ad",
              cursor: "pointer",
              fontSize: "13px",
              ml: "auto",
              fontWeight: "bold",
            }}>
            Forgot password?
          </Typography>
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "#0ca7aab8",
            "&:hover": {
              background: "#0ca7aa",
            },
            width: "250px",
          }}>
          سجل
        </Button>
      </Box>

      <Footer />
    </Box>
  );
};

export default Login;
