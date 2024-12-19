import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Section = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "62.9vh",
              backgroundColor: "#f4f4f4",
              zIndex: 1000,
            }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                maxWidth: 600,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "#fff",
                padding: 2,
              }}>
              {/* النص */}
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "right",
                }}>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                  }}>
                  أساسيات القيادة المهنية
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  تم تصميم تخصص أساسيات القيادة المهنية لتزويد القادة الشباب
                  بمهارات تواصل أساسية، تعزز التعاون وتوسيع الشبكات المهنية في
                  جميع القطاعات.
                </Typography>
              </CardContent>

              {/* الصورة */}
              <Box
                component="img"
                src="/public/images/managers.jpg"
                alt="Professional Leadership"
                sx={{
                  width: { xs: "100%", md: 200 },
                  borderRadius: 2,
                  marginLeft: { md: 2 },
                }}
              />
            </Card>
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
