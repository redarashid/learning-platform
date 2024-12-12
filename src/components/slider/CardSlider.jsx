import { Box, Stack, Button, Grid2, Typography } from "@mui/material";
import "./CardSlider.css";

const CardSlider = () => {
  return (
    <Grid2 sx={{gap: 2}}>

      <Stack
        sx={{
          backgroundColor: "#FFF",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "10px",
          overflow: "hidden",
          maxWidth: "310px",
          pb: "2rem",
          textAlign: "right",
          width: "80%",
        }}>
        <Box sx={{ textAlign: "right" }}>
          <Box>
            <img
              src="/public/images/Agile-Project-Management.jpg"
              style={{
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              padding: "2rem",
              display: "flex",
              backgroundColor: "#FFF",
              flexDirection: "column",
              justifyContent: "center",
              color: "#25343F",
              position: "relative",
              pb: "5rem",
            }}>
            <Typography
              sx={{
                color: "#25343F",
                fontSize: "1.5rem",
                marginBottom: "1rem",
                textAlign: "right",
              }}
              variant="h3">
              ادارة المشاريع باستخدام الاجيال
            </Typography>
            <Button
              sx={{
                top: "140px",
                right: "15px",
                position: "absolute",
                backgroundColor: "#E9F6FB",
                p: "5px 5px",
                "&:hover": {
                  color: "#25343F",
                },
              }}>
              دورة
            </Button>
          </Box>
        </Box>
      </Stack>

      <Stack
        sx={{
          backgroundColor: "#FFF",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "10px",
          overflow: "hidden",
          maxWidth: "310px",
          pb: "2rem",
          textAlign: "right",
          width: "80%",
        }}>
        <Box sx={{ textAlign: "right" }}>
          <Box>
            <img
              src="/public/images/Agile-Project-Management.jpg"
              style={{
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              padding: "2rem",
              display: "flex",
              backgroundColor: "#FFF",
              flexDirection: "column",
              justifyContent: "center",
              color: "#25343F",
              position: "relative",
              pb: "5rem",
            }}>
            <Typography
              sx={{
                color: "#25343F",
                fontSize: "1.5rem",
                marginBottom: "1rem",
                textAlign: "right",
              }}
              variant="h3">
              ادارة المشاريع باستخدام الاجيال
            </Typography>
            <Button
              sx={{
                top: "140px",
                right: "15px",
                position: "absolute",
                backgroundColor: "#E9F6FB",
                p: "5px 5px",
                "&:hover": {
                  color: "#25343F",
                },
              }}>
              دورة
            </Button>
          </Box>
        </Box>
      </Stack>

      <Stack
        sx={{
          backgroundColor: "#FFF",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "10px",
          overflow: "hidden",
          maxWidth: "310px",
          pb: "2rem",
          textAlign: "right",
          width: "80%",
        }}>
        <Box sx={{ textAlign: "right" }}>
          <Box>
            <img
              src="/public/images/Agile-Project-Management.jpg"
              style={{
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              padding: "2rem",
              display: "flex",
              backgroundColor: "#FFF",
              flexDirection: "column",
              justifyContent: "center",
              color: "#25343F",
              position: "relative",
              pb: "5rem",
            }}>
            <Typography
              sx={{
                color: "#25343F",
                fontSize: "1.5rem",
                marginBottom: "1rem",
                textAlign: "right",
              }}
              variant="h3">
              ادارة المشاريع باستخدام الاجيال
            </Typography>
            <Button
              sx={{
                top: "140px",
                right: "15px",
                position: "absolute",
                backgroundColor: "#E9F6FB",
                p: "5px 5px",
                "&:hover": {
                  color: "#25343F",
                },
              }}>
              دورة
            </Button>
          </Box>
        </Box>
      </Stack>
    </Grid2>
  );
};

export default CardSlider;


