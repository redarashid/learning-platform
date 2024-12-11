


import {
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const preventDefault = (event) => event.preventDefault();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();





  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    if (userName === "user" && password === "password") {
      navigate("/couses");
    } else {
      alert("Invalid credentials");
    }
  };

  const goToCourses = () => {
    navigate("/couses")
  }
  const goToHomePage = () => {
    navigate("/header")
  }
  const goToLearning = () => {
    navigate("/learning")
  }


  return (
    <Container  className="login">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "#fff",
          background: "#222222"
        }}>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
          onClick={preventDefault}>
          <Typography
            onClick={goToHomePage }
            variant="body1"
            component="a"
            href="#features"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                color: "#f00",
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
                color: "#f00",
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
                color: "#f00",
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
                color: "#f00",
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
                color: "#f00",
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

        <FormControl style={{width: "30%"}}  variant="standard">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input
            value={userName}
            onChange={(e)=> setUsername(e.target.value)}
            id="component-simple"
            sx={{
              backgroundColor: "#FFF",
              padding: "7px 20px",
              borderRadius: "4px",
            }}
            placeholder="UserName"
          />
        </FormControl>

        <FormControl defaultValue="Password" sx={{ m: 1 }} style={{width: "30%"}}  variant="standard">
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
                      color: "#ff00008f",
                      "&:hover": {
                        color: "rgb(244 203 54 / 91%)", // لون عند التمرير
                      },
                    },
                  }}
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography
            sx={{ color: "#fff", fontSize: "13px", cursor: "pointer" }}>
            Remeber password
          </Typography>
          <Typography
            sx={{
              color: "#ff0000c9",
              cursor: "pointer",
              fontSize: "13px",
              ml: "auto",
              fontWeight: "bold",
            }}>
            Forgot password?
          </Typography>
        </Box>
        <Button
          onClick={handleLogin}
          style={{ width: "250px", fontWeight: "bold" }}
          variant="contained"
          disableElevation>
          Supmit
        </Button>
      </Box>

      <div className="line"></div>
      
      <Stack
        sx={{
          flexDirection: "row",
          display: "flex",
          color: "#fff",
          mt: "1.5rem",
          gap: "5rem",
        }}>
        <Box>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Courses
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Learn
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Workshops
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Topics
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            FAQ
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Teachers
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Reviews
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Guides
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Blog
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Login
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Teachers
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Reviews
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Guides
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Blog
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Join Now
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Teachers
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Reviews
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Guides
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Blog
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointer",
              },
            }}>
            Join Now
          </Typography>
        </Box>
        <Box
          sx={{
            color: "gray",
            display: "flex",
            mb: "1rem",
            justifyContent: "center",
            alignItems: "end",
          }}>
          Create By <span style={{ color: "red" }}>Rashid Reda</span> 2024
        </Box>
        <Box>
          <div>
            <TextField
              sx={{ background: "#FFF", borderRadius: "4px" }}
              id="outlined-multiline-static"
              rows={4}
              placeholder="Say your opinion..."
            />
          </div>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
