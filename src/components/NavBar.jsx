import {
  AppBar,
  Box,
  Button,
  IconButton,
  TextField,
  Toolbar,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const navigate = useNavigate();


  const goHomePge = () => {
    navigate("/header");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#FFF",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        width: "100%",
        padding: "1.2rem",
        zIndex: 1
      }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Box
          onClick={goHomePge}
          component="img"
          src="/public/images/logo.png"
          alt="Logo"
          sx={{
            height: 40,
            width: "auto",
            marginRight: "auto",
            cursor: "pointer"
          }}
        />
        <Box
          sx={{
            width: 500,
            maxWidth: "40%",
            display: "flex",
            textAlignLast: "center",
            justifyContent: "center",
            margin: "0 auto",
            textAlign: "right",
            borderRadius: "4px",
            "&:focus": {
                border: "1px solid #516088",
            }
          }}>
          <TextField fullWidth sx={{}} id="fullWidth" placeholder="Search..." />
        </Box>

        {isMobile ? (
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"></IconButton>
        ) : (
          <>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                sx={{
                  color: "#58C0C3",
                  border: "1px solid #58C0C3",
                  borderRadius: "20px",
                }}>
                الرئيسية
              </Button>
              <Button
                sx={{
                  color: "#58C0C3",
                  border: "1px solid #58C0C3",
                  borderRadius: "20px",
                }}>
                الدورات
              </Button>
              <Button
                sx={{
                  color: "#58C0C3",
                  border: "1px solid #58C0C3",
                  borderRadius: "20px",
                }}>
                تسجيل الدخول
              </Button>
              <Button
                sx={{
                  color: "#FFF",
                  backgroundColor: "#58C0C3",
                  fontWeight: "bold",
                }}>
                إنشاء حساب
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
