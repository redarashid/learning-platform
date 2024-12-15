import { Box, Button, Grid, Typography } from "@mui/material";
import NavBar from "../NavBar";

import CardSlider from "../slider/CardSlider";
import Footer from "../Footer";

// import useMediaQuery from '@mui/material/useMediaQuery';

const Courses = () => {
  // const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <NavBar />

      <Box sx={{ marginTop: "10rem" }}>
        <Grid container spacing={3} sx={{ padding: "20px" }}>
          {/* Sidebar - Filtres */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  borderBottom: "1px solid #E6ECEC",
                  width: "100%",
                  textAlign: "right",
                  justifyContent: "flex-end",
                }}
                variant="h6"
                gutterBottom>
                فئات
              </Typography>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  backgroundColor: "#E6ECEC",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  fontSize: "1.3rem",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                الجميع
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  color: "#4D6679",
                  fontSize: "1.3rem",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                الأعمال والإدارة
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  color: "#4D6679",
                  fontSize: "1.3rem",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                الصحة والتغذية
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  color: "#4D6679",
                  fontSize: "1.3rem",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                التعليم وتدريب المعلمين
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  fontSize: "1.3rem",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                العلوم والبيئه
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  fontSize: "1.3rem",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                تطوير الذات
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  fontSize: "1.3rem",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                التكنولوجيا
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  fontSize: "1.3rem",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                العلوم الانسانيه
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  fontSize: "1.3rem",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                الفن التصميم الاعلام
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  fontSize: "1.3rem",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                الاستعداد الزظيفى
              </Button>{" "}
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  fontSize: "1.3rem",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                اللغات
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  fontSize: "1.3rem",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                البيئه المبنيه
              </Button>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  borderBottom: "1px solid #E6ECEC",
                  width: "100%",
                  textAlign: "right",
                  justifyContent: "flex-end",
                }}
                variant="h6"
                gutterBottom>
                نوع البرامج
              </Typography>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  backgroundColor: "#E6ECEC",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  fontSize: "1.3rem",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                الجميع
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  fontSize: "1.3rem",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                دورات
              </Button>
              <Button
                sx={{
                  marginBottom: "10px",
                  width: "100%",
                  fontSize: "1.3rem",
                  color: "#4D6679",
                  border: "",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  pr: "10px",
                  "&:hover": {
                    backgroundColor: "#58C0C3",
                    color: "#FFF",
                  },
                }}>
                تخصصات
              </Button>
            </Box>
          </Grid>

          {/* Content */}
          <Grid sx={{ marginTop: "9rem" }} item xs={12} md={9}>
            <Grid container spacing={3}>
              {/* Cards for courses */}
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}>
                  <Button
                    sx={{
                      position: "absolute",
                      top: "11rem",
                      color: "#4D6679",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                      left: "26rem"
                    }}>
                    عرض الجميع
                  </Button>
                  <Box sx={{textAlign: "right"}}>
                    <Typography
                      variant="h3"
                      sx={{
                        top: "11rem",
                        position: "absolute",
                        right: "3.3rem",
                        bottom: "0.5rem"
                      }}>
                      التخصصّات
                    </Typography>
                    <Typography
                      sx={{
                        top: "15rem",
                        position: "absolute",
                        fontSize: "1.3rem",
                        color: "#4D6679",
                        right: "3.3rem",
                      }}>
                      التخصّصات هي برامج مكثّفة تساعدك على التعمّق في مجالات
                      مختلفة، تعلّم المزيد
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <CardSlider />
            <CardSlider />
            <CardSlider />
            <CardSlider />
            <CardSlider />
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
};

export default Courses;
