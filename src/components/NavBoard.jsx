import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";


const NavBoard = () => {
  return (
    <Grid
      position="fixed"
      sx={{
        backgroundColor: "#FFF",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        width: "100%",
        padding: "1rem",
        zIndex: 1,
      }}>
      <Stack
        direction="row"
        width={"100%"}
        spacing={2}
        justifyContent="space-between"
        alignItems="center">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{
              border: "1px solid #0CA7AA",
              color: "#747A85",
              fontWeight: "bold",
              opacity: "5",
              mr: "0.7rem",
              borderRadius: "23px",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#0CA7AA",
                color: "#FFF",
              },
            }}
            href="#contained-buttons">
            EN
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ mr: "2rem" }}>
            <Button
              sx={{
                border: "1px solid #0CA7AA",
                color: "#747A85",
                fontWeight: "bold",
                opacity: "5",
                mr: "0.7rem",
                borderRadius: "5px",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#0CA7AA",
                  color: "#FFF",
                },
              }}
              href="#contained-buttons">
              المواضيع الدراسيه
            </Button>
            <Button
              sx={{
                border: "1px solid #0CA7AA",
                color: "#747A85",
                fontWeight: "bold",
                opacity: "5",
                mr: "0.7rem",
                borderRadius: "5px",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#0CA7AA",
                  color: "#FFF",
                },
              }}
              href="#contained-buttons">
              جميع المسابقات
            </Button>
            <Button
              sx={{
                border: "1px solid #0CA7AA",
                fontWeight: "bold",
                opacity: "5",
                borderRadius: "5px",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                backgroundColor: "#0CA7AA",
                color: "#FFF",
              }}
              href="#contained-buttons">
              لوحتى التعليميه
            </Button>
          </Box>
          <a>
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{
                width: 130,
                height: 40,
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          </a>
        </Box>
      </Stack>
    </Grid>
  );
};

export default NavBoard;
