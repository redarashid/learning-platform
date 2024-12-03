import {
  Container,
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
import * as React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const preventDefault = (event) => event.preventDefault();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container className="login">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "#fff",
        }}>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
          onClick={preventDefault}>
          <Typography
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
            Features
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
                transition: "0.2s",
              },
            }}>
            Courses
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
        </Box>

        <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Button variant="text" sx={{ color: "#fff" }}>
            Login
          </Button>
          <Button variant="text" sx={{ color: "#DDD" }}>
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
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="Password">Password</InputLabel>
          <Input
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
                  sx={{ color: "red" }}
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input
            id="component-simple"
            sx={{
              backgroundColor: "#FFF",
              padding: "7px 20px",
              borderRadius: "4px",
            }}
            placeholder="UserName"
          />
        </FormControl>
        <Typography sx={{ color: "red", cursor: "pointer" }}>
          Forget the password?
        </Typography>
        <Button variant="contained" disableElevation>
          Supmit
        </Button>
      </Box>
      <div className="line"></div>
      <Box
        sx={{
          display: "flex",
          color: "#fff",
          cursor: "pointer",
          mt: "1.5rem",
          gap: "5rem",
        }}>
        <Box>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Courses
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Learn
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Workshops
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Topics
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
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
              },
            }}>
            Teachers
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Reviews
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Guides
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Blog
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
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
              },
            }}>
            Teachers
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Reviews
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Guides
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Blog
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
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
              },
            }}>
            Teachers
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Reviews
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Guides
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Blog
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                color: "red",
              },
            }}>
            Join Now
          </Typography>
        </Box>
      </Box>
      
    </Container>
  );
};

export default Login;
