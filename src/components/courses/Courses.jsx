import { Box, Button, Container, Grid, Typography } from "@mui/material";
import NavBar from "../NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// import useMediaQuery from '@mui/material/useMediaQuery';

const Courses = () => {
  // const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <NavBar />

      <Container>
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
                      }}>
                      عرض الجميع
                    </Button>
                    <Typography
                      variant="h3"
                      sx={{
                        textAlign: "right",
                        top: "11rem",
                        position: "absolute",
                        right: "10rem",
                      }}>
                      التخصصّات
                    </Typography>
                    <Typography
                      sx={{
                        top: "16rem",
                        position: "absolute",
                        right: "10rem",
                        fontSize: "1.3rem",
                        color: "#4D6679",
                      }}>
                      التخصّصات هي برامج مكثّفة تساعدك على التعمّق في مجالات
                      مختلفة، تعلّم المزيد
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                    }}>
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper"
                      spaceBetween={20} // المسافة بين البوكسات
                      slidesPerView={1} // عدد العناصر الافتراضي
                      breakpoints={{
                        768: {
                          slidesPerView: 2, // يظهر عنصرين على الشاشات المتوسطة
                        },
                        1024: {
                          slidesPerView: 3, // يظهر ثلاثة عناصر على الشاشات الكبيرة
                        },
                      }}>
                      {[...Array(6)].map((_, index) => (
                        <SwiperSlide
                          key={index}
                          style={{
                            display: "flex",
                            justifyContent: "center", // لمحاذاة العناصر وسط السلايد
                          }}>
                          <Box
                            sx={{
                              flex: 1, // يضمن أن العناصر تتمدد لتملأ المساحة
                              maxWidth: "calc(100% / 3)", // يجعل كل عنصر يأخذ ثلث العرض
                              border: "1px solid #ccc",
                              borderRadius: "8px",
                              overflow: "hidden",
                              textAlign: "center",
                              backgroundColor: "#fff",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            }}>
                            {/* الصورة */}
                            <Box
                              component="img"
                              src="https://via.placeholder.com/300x200"
                              alt={`Image ${index + 1}`}
                              sx={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                              }}
                            />
                            {/* الوصف */}
                            <Box sx={{ padding: "16px" }}>
                              <Typography variant="h6" gutterBottom>
                                عنوان الصورة {index + 1}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary">
                                هذا هو وصف للصورة رقم {index + 1}.
                              </Typography>
                            </Box>
                          </Box>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Box>
                </Grid>

                {/* Repeat similar cards for other courses */}
                {/* <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "20px",
                    }}>
                    <Typography variant="h6">دورة 2</Typography>
                    <Typography variant="body2" sx={{ marginTop: "10px" }}>
                      تفاصيل الدورة 2.
                    </Typography>
                    <Button variant="outlined" sx={{ marginTop: "10px" }}>
                      تخصّص
                    </Button>
                  </Box>
                </Grid> */}
                {/* More cards here */}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Courses;
