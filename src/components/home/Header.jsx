import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Stack
        direction="row"
        spacing={2}
        mt={3}
        justifyContent="space-between"
        alignItems="center">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{
              borderRadius: "23px",
              backgroundColor: "#0CA7AA",
              color: "#FFF",
              fontWeight: "bold",
              mr: "0.7rem",
            }}
            onClick={()=> navigate("/login")}
            variant="contained"
            href="#contained-buttons">
            سجل مجانا
          </Button>
          <Button
            sx={{
              border: "1px solid #0CA7AA",
              color: "#747A85",
              fontWeight: "bold",
              opacity: "5",
              mr: "0.7rem",
              borderRadius: "23px",
              "&:hover": {
                backgroundColor: "#0CA7AA",
                color: "#FFF",
              },
            }}
            href="#contained-buttons">
            دخول
          </Button>
          <Button
            sx={{
              border: "1px solid #0CA7AA",
              color: "#747A85",
              fontWeight: "bold",
              opacity: "5",
              borderRadius: "23px",
              "&:hover": {
                backgroundColor: "#0CA7AA",
                color: "#FFF",
              },
            }}
            href="#contained-buttons">
            En
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              textAlign: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}>
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="ابحث"
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions">
              <DirectionsIcon />
            </IconButton>
          </Paper>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              mr: "1.5rem",
              cursor: "pointer",
              color: "#83939E",
              "&:hover": {
                color: "#000",
                borderBottom: "2px solid #0CA7AA",
              },
            }}>
            تصفح
          </Typography>
          <a>
            <img
              src="/public/images/logo.png"
              alt="Logo"
              style={{
                width: 150,
                height: 50,
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          </a>
        </Box>
      </Stack>
      <Hero />
    </Container>
  );
};

export default Header;
