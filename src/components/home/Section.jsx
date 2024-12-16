import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SwiperSlick from "../slider/SwiperSlick";

const Section = () => {
  return (


    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#F0F6F9",
              height: "400px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#25343F",
              textAlign: "center",
            }}>
              <SwiperSlick />
            </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Box
            sx={{
              backgroundColor: "#FED04E",
              height: "400px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#25343F",
              textAlign: "right",
            }}>
            <Container>
              <Typography
                variant="h5"
                sx={{
                  marginBottom: "1rem",
                  mt: "0",
                  fontSize: "32px",
                  fontWeight: "800",
                  lineHeight: "43px",
                  color: "#24343f",
                  mb: "10px",
                  textAlign: "right",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                اصقل مهاراتك العمليّة مع تخصّصات <br />
                إدراك
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  marginBottom: "1rem",
                  textAlign: "right",
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "29px",
                  alignItems: "center",
                }}>
                قم بتطوير مهارة مهنية محددة من خلال سلسلة من الدورات التدريبية
                <br /> المترابطة. جسّد أفكارك على أرض الواقع من خلال مشاريع
                عمليّة
                <br /> واحصل على شهادة تخصص لإضافتها إلى سيرتك الذاتية
              </Typography>

              <Button
                sx={{
                  backgroundColor: "#FFF",
                  color: "#687185",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  "&:hover": {
                    background: "#DDD",
                    color: "#000",
                  },
                }}
                variant="contained">
                تصفح التخصصات
              </Button>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
